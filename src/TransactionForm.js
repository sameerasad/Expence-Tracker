import React from 'react'

const TransactionForm = () => {
    return (
        <div className ="transaction-form">
            <form>
                <h3>
                    Add New Transaction 
                </h3>
                
                <hr/>
                <label name="inputField">Enter Text
                <br/>
                 <input type="text"  id="inputField" className="inputFields"/>
                </label>
                <br />
                <label>
                    Enter Amount
                    <br />
                    <input type="number" required className="inputFields"  />

                </label>
                <h4> If the transaction is expence enter amount in negative!
                <br/ >Otherwise enter in positive numbers </h4>
                <input type="submit" value="Add Transaction" required className="submit-button"/>

            </form>
        </div>
    )
}

export default TransactionForm
