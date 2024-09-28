import { useState } from 'react';
import { Loan } from '../interfaces/loan';

function LoanForm({ addPost }: { addPost: (loan: Loan) => void }) {
  const [creditSum, setCreditSum] = useState<number | ''>(''); // Initial state as empty string
  const [creditRate, setCreditRate] = useState<number | ''>(''); // Initial state as empty string
  const [years, setYears] = useState<number | ''>(''); // Initial state as empty string

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation to ensure inputs are filled
    if (creditSum === '' || creditRate === '' || years === '') {
      alert('Please fill out all fields before submitting');
      return;
    }

    const newLoan: Loan = {
      creditSum: Number(creditSum), // Ensure the value is treated as a number
      creditRate: Number(creditRate),
      years: Number(years)
    };

    addPost(newLoan);

    // Reset form fields
    setCreditSum('');
    setCreditRate('');
    setYears('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="creditSum">Credit Sum (RUB):</label>
        <input
          type="number"
          id="creditSum"
          placeholder="Enter the loan amount"
          value={creditSum}
          onChange={(e) => setCreditSum(e.target.value !== '' ? Number(e.target.value) : '')} // Handle empty input
        />
      </div>

      <div>
        <label htmlFor="creditRate">Credit Rate (%):</label>
        <input
          type="number"
          id="creditRate"
          placeholder="Enter the interest rate"
          value={creditRate}
          onChange={(e) => setCreditRate(e.target.value !== '' ? Number(e.target.value) : '')} // Handle empty input
        />
      </div>

      <div>
        <label htmlFor="years">Years:</label>
        <input
          type="number"
          id="years"
          placeholder="Enter the loan duration in years"
          value={years}
          onChange={(e) => setYears(e.target.value !== '' ? Number(e.target.value) : '')} // Handle empty input
        />
      </div>

      <button type="submit">Submit Loan</button>
    </form>
  );
}

export default LoanForm;


