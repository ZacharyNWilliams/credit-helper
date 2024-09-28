import { useState } from 'react';
import { Button, Modal } from 'reactstrap';
import LoanList from './LoanList';
import LoanForm from './LoanForm';
import { Loan } from '../interfaces/loan';

function LoanPosts() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [loans, setLoans] = useState<Loan[]>([]);

  const handleDelete = (index: number) => {
    setLoans(loans.filter((_, i) => i !== index));
  };

  function addPost(loan: Loan) {
    setLoans([...loans, loan]);
  }

  return (
    <div id='loan-form'>
      <div>
        {loans.length > 0 ? (
          <div id="loan-results">
            {loans.map((loan, index) => (
              <LoanList
                key={index}
                loan={loan}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        ) : (
          <p>No loans available. Click the button to add one.</p>
        )}

        <Modal isOpen={modal} toggle={toggle}>
          <LoanForm addPost={addPost} />
        </Modal>
      </div>
      <ul>
        <div id='add-loan-button'>
          <Button id='Show-hide' color="danger" onClick={toggle}>Add Loan</Button>
        </div>
      </ul>
    </div>
  );
}

export default LoanPosts;



