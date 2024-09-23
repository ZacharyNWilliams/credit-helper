import { useState } from 'react';
export interface LoanFormProps {
    
    addPost: Function
  }


export function LoanForm (props: LoanFormProps) {
    const [creditSum, setCreditSum] = useState<number>();
    const [creditRate, setCreditRate] = useState<number>();
    const [years, setYears] = useState<number>();
    
   

    function onSubmit(e:React.FormEvent<HTMLElement>){
      e.preventDefault();

      props.addPost({creditSum: creditSum, creditRate:creditRate,years:years });
    }
   
    
    return (
    <div >
        <div id='whole-form-div'>
            <form onSubmit = {onSubmit}>
                <label id='' >Credit Sum</label>
                <input id='' onChange={(e) => setCreditSum(Number(e.target.value))} type="number"  />
                <label id=''>Credit Rate</label>
                <input  id='' type="number" onChange={(e) => setCreditRate(Number(e.target.value))} />
                <label id=''>Credit Rate</label>
                <input  id='' type="number" onChange={(e) => setYears(Number(e.target.value))} />
                {
                <button  type="submit">Add Post</button>
                
}               
            </form>
        </div>
    </div>
    )



}