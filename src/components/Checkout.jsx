import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useState, useEffect, useRef } from "react";
import "../App.css";

const Checkout = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  //const [currency, setCurrency] = useState(options.currency);
  const [currency, setCurrency] = useState("USD");

  const [donationAmount, setDonationAmount] = useState(0.0);
  const donationRef = useRef(donationAmount);

  useEffect(() => {
    donationRef.current = donationAmount;
  }, [donationAmount]);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onDonationAmountChange = ({ target: { value } }) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && numericValue > 0) {
      setDonationAmount(numericValue);
    }
  };

  const onCreateOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: donationRef.current.toFixed(2),
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .catch((error) => {});
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return (
    <div className="checkout">
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <label>Amount to Donate</label>
          <br /> <br />
          <div className="donationOptions">
            <button onClick={() => setDonationAmount(5.0)}>$5</button>
            <button onClick={() => setDonationAmount(10.0)}>$10</button>
            <button onClick={() => setDonationAmount(20.0)}>$20</button>
            <label>Other:</label>$
            <input
              id="otherAmount"
              type="number"
              onKeyDown={(e) => {
                if (
                  e.key === "e" ||
                  e.key === "E" ||
                  e.key === "-" ||
                  e.key === "+"
                ) {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                const value = e.target.value;
                setDonationAmount(value === "" ? 0 : parseFloat(value));
              }}
            />
          </div>
          <br /> <br />
          <br /> <br />
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
};
export default Checkout;
