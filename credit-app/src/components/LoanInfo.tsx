import {useState} from 'react'
import { Button, Modal } from 'reactstrap';
import { Loan } from '../interfaces/loan';
import { LoanForm } from './LoanForm';
import LoanList from './LoanList';
// import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function LoanPosts(){

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    const [loans, setPosts] = useState<Loan[]>([
             // Array that displays posts
            // {title: "yo", thought:"yoo"}
    
    ])
    const handleDelete = (index: number) => {
        setPosts(loans.filter((_, i) => i !== index));
      };
        
 


    function addPost(loan:Loan){
        setPosts([...loans,loan]);

    }
    function handlePostFormDelete(index: number) {
        setPosts((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    return(
      <div className="App">
        
        <ul>
                   
           <div id='thought-button-div'>
                               
            <Button id='Show-hide'  color="danger" onClick={toggle}>New Thought</Button>
           </div>
                    
         </ul>
            
        
     
    <div>
    {loans.map((loan, index) => (
          <LoanList
            key={index}
            loan={loan}
            onDelete={() => handleDelete(index)}
          />
        ))}
        
    <Modal isOpen= {modal} toggle = {toggle}>
    <LoanForm addPost={addPost}/>
    </Modal>
    </div>
   
    <div>
   
   
    </div>
   

     
    
 
       </div>
    )
}

export default LoanPosts;