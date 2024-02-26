import {mockTransactions} from "../data/transactions.js"

export default function Revenue() {
  let revenue = 0;
    mockTransactions.forEach((transaction) => {
      revenue += parseInt(transaction.cost)
    });
    console.log(revenue);
    return (
    <p>Revenue Generated ${revenue}</p>
    );
}