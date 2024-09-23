import { useState } from 'react';
import { Loan } from '../interfaces/loan';


function LoanList({loan, onDelete}: { loan: Loan, onDelete: () => void }){

    const [posts, setPosts] = useState<Loan[]>([    
      ])

    const removeElement = (index: number) => {
        const newPosts = posts.filter((_, i) => i !== index);
        setPosts(newPosts);
      };
    return(
        <div>
       
        
        <div className='post-list'>
            
            <h1>{loan.creditSum}</h1>
            <h1>{loan.creditRate} </h1>
            <h1>{loan.years} </h1>
            



            <div id=''>
            <button onClick={onDelete} > 
           
            </button>
       
            </div>
            
            
        
        </div>
        </div>
    )
}

export default LoanList