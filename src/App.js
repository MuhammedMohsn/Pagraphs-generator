// import logo from './logo.svg';
import './App.css';
import { Fragment,useState } from 'react';
import Data from './data'

function App() {
  let [count,setcount]=useState(0)
  let [text,settext] = useState([])
  const submithandler=(e)=>{
  e.preventDefault();
  let amount=parseInt(count)
  if (amount>8){
     amount=8
  }
  if(amount<=0){
    amount=0
  }
 
  settext(Data.slice(0,amount))


  }
  return (
    <Fragment> 
   <div className="container"> <h1>TIRED OF BORING LOREM IPSUM?</h1>

   <form onSubmit={(e)=>submithandler(e)}>
   <label htmlFor="paragraphs"> Paragraphs : </label>
    <input type="number" value={count} onChange={(e)=>setcount(e.target.value)} id="paragraphs"/>
    <button  className="generate">Generate</button>
 
   </form>
  <article> {text.map(item=>{
    return (<p key={Math.random()} className="text">{item}</p>) })}</article>
    
  
   
   </div>
  </Fragment>
  );
   
}

export default App;