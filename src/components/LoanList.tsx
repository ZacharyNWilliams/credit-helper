import { Loan } from '../interfaces/loan';

function LoanList({ loan, onDelete }: { loan: Loan, onDelete: () => void }) {

    // Calculate Monthly Payment
    const calculateMonthlyPayment = () => {
        const monthlyRate = loan.creditRate / 100 / 12; // Monthly interest rate
        const numberOfPayments = loan.years * 12; // Total payments (months)

        return loan.creditSum * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
               (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    };

    // Calculate Total Payment and Cost of Credit
    const monthlyPayment = calculateMonthlyPayment();
    const totalPayment = monthlyPayment * (loan.years * 12);
    const costOfCredit = totalPayment - loan.creditSum;

    return (
        <div>
            <div className='loan-list'>
                <h1>Credit Sum, RUB: {loan.creditSum.toFixed(2)}</h1>
                <h1>Credit Rate, %: {loan.creditRate.toFixed(2)}</h1>
                <h1>Years: {loan.years}</h1>
                <h1>Monthly Payment, RUB: {monthlyPayment.toFixed(2)}</h1>
                <h1>Total Payment, RUB: {totalPayment.toFixed(2)}</h1>
                <h1>Cost of Credit, RUB: {costOfCredit.toFixed(2)}</h1>

                <div>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default LoanList;


