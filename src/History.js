import React from 'react'


const History = () => {

    let transaction = [{
        amount:  500, desc: "Cash",
        amount: -200, desc: "book",
        amount:  -40,  desc: "camera"
    }]

    console.log(transaction)

    return (
        <div className="History">
            <h3>History</h3>
            <hr/>
            {transaction.map((transObj, ind) => {
                return (
                <li key={ind}>
                    <span>{transObj.desc}</span>
                    <span>{transObj.amount}</span>
                    
                </li>
                )
            })}

           
        </div>
    )
}


export default History
