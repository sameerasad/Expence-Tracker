import React,{useContext} from 'react'
import { TransactionContext } from './TransactionContext'



const History = () => {
    let transactions = useContext(TransactionContext)
    console.log(transactions)
    

    return (
        <div className="History">
            <h3>History</h3>
            <hr/>
            {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>
                    )
                })}

           
        </div>
    )
}


export default History
