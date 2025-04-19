import React from "react";
import { useState } from "react";
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import Checkout from "../components/Checkout";
import '../App.css'
const initialOptions = {
  "client-id": "AfQTrKeZegoWFPg04w-P0EVIkarLDKIQlnngrfr8lXQR5Vva9ZGfqfjWIEJdTdG4llTQlR3dkyZWpjTs",
   currency: "USD",
   intent: "capture",
}
const Support = () => {
  return (
    <div className="supportPage">
      <h1>Support</h1>
      <p>Thank you for your interest in donating to the mission</p>
      <p>Please see the link to the side to donate securely with PayPal!</p>
      
      <PayPalScriptProvider options={initialOptions} className="paymentContainer">
        <Checkout />
      </PayPalScriptProvider>
    </div>
  );
};
export default Support;
