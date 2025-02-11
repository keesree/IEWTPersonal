import React from "react";
import { useState } from "react";
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import Checkout from "../components/Checkout";
import '../App.css'
const initialOptions = {
  "client-id": "Aardp00pvynsQX1cGIWCqEvpFmKx1bpwnVUB5eGSlPb-f-Rf46HgIuJZkYcOcp2u0a-8JZTitLGxeq0G",
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
