

// interface Loan {
//     principal: number; // Principal amount of loan
//     interestRate: number; // Annual interest rate (in decimal form)
//     durationMonths: number; // Duration of loan (in months)
//   }
  
//   function calculateMonthlyPayment(loan: Loan): number {
//     const i = loan.interestRate / 12; // Monthly interest rate
//     const n = loan.durationMonths; // Number of months
//     const p = loan.principal; // Principal amount
//     const monthlyPayment =
//       (p * i) /
//       (1 - Math.pow(1 + i, -n)); // Monthly payment formula
//     return monthlyPayment;
//   }
  
//   function calculateMonthlyProfit(loans: Loan[]): number {
//     let totalPayments = 0;
//     let totalInterest = 0;
  
//     for (const loan of loans) {
//       const monthlyPayment = calculateMonthlyPayment(loan);
//       totalPayments += monthlyPayment * loan.durationMonths;
//       totalInterest += monthlyPayment * loan.durationMonths - loan.principal;
//     }
  
//     const totalProfit = totalPayments - totalInterest;
//     const monthlyProfit = totalProfit / loans[0].durationMonths; // assuming all loans have the same duration
  
//     return monthlyProfit;
//   }
  
//   // Example usage
//   const loans: Loan[] = [
//     { principal: 10000, interestRate: 0.05, durationMonths: 6 },
//     { principal: 5000, interestRate: 0.08, durationMonths: 12 },
//     { principal: 2000, interestRate: 0.1, durationMonths: 24 },
//   ];
  
//   const monthlyProfit = calculateMonthlyProfit(loans);
//   console.log(`Monthly profit: $${monthlyProfit.toFixed(2)} and `);



// import connectDB from "./src/index"



// async function getMonthlyPayments(duedate: Date, period: number) {
//   const query = "SELECT generate_series(duedate, duedate + ((period - 1) * COALESCE(frequency, '1 month'::interval)), COALESCE(frequency, '1 month'::interval)) AS payment_date,amount FROM credit WHERE duedate >= $1";
//   const params = [duedate];

//   try {
//     const result = await connectDB.query(query, params);
//     const payments = result.rows.map((row:any) => ({
//       date: row.duedate.toISOString(),
//       amount: row.amount,
//     }));
//     return payments;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// // Example usage:
// const duedate = new Date('2023-06-12');
// const period = 6;
// getMonthlyPayments(duedate, period).then((payments) => {
//   console.log(payments);
// }).catch((error) => {
//   console.error(error);
// });
