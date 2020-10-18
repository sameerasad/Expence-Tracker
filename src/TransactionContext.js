import React,{createContext} from "react";
const transaction = [{
      amount:  600,  desc: "Cash",
      amount: -200,  desc: "book",
      amount:  -60,  desc: "camera"
  }]
  


export const TransactionContext = createContext(transaction); 