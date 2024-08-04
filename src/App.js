import './App.css';
import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {UC,LC,NC,SC} from './data/data.jsx'


function App() {
  let [upper,ufunc]=useState(false);
  let [lower,lfunc]=useState(false);
  let [number,nfunc]=useState(false);
  let [symbol,sfunc]=useState(false);
  let [password,passfunc]=useState(10);
  let [get,getfunc]=useState("");
  let container="";
  let finalpass='';
  let btnfunc=()=>{
  if(upper||lower||number||symbol)
  {
    if(upper) {container+=UC}
    if(lower) {container+=LC}
    if(number) {container+=NC}
    if(symbol) {container+=SC}
    
    for(let i=0;i<password;i++)
    {
      finalpass+=container.charAt(Math.floor(Math.random()*container.length))
    }
    getfunc(finalpass);
  }
  else{
    toast.error("please select any one option for creating password");
  }
}
let copy=()=>{
  navigator.clipboard.writeText(get);
}
  return (
    <div className="App bg-primary vh-100" >
              <ToastContainer />

      <h1>Password Generator</h1>
      <div className='w-50 bg-info border-3  shadow-lg p-5 m-auto'>
        <div className='d-flex'>
          <input type='text ' className='w-75 form-control' value={get} readOnly></input>
          <button className='btn btn-outline-dark ms-4' onClick={copy}>Copy</button>
        </div>
        <div className='d-flex justify-content-around  fs-5 my-4'>
          <label>Set length of password</label>
          <input type='number' min={5} max={15} value={password} onChange={(event)=>passfunc(event.target.value)}/>
        </div>
        <hr/>
        <div className='d-flex justify-content-between  fs-5 mt-3'>
          <label className='ms-4'>Include Upper Characters</label>
          <input type='checkbox' className='check me-4' checked={upper} onChange={()=>ufunc(!upper)}/>
        </div>
        <hr/>
        <div className='d-flex justify-content-between  fs-5 mt-3'>
          <label className='ms-4'>Include Lower  Characters</label>
          <input type='checkbox' className='check me-4' checked={lower} onChange={()=>lfunc(!lower)}/>
        </div>
        <hr/>
        <div className='d-flex justify-content-between  fs-5 mt-3'>
          <label className='ms-4'>Include Numbers</label>
          <input type='checkbox' className='check me-4' checked={number} onChange={()=>nfunc(!number)}/>
        </div>
        <hr/>
        <div className='d-flex justify-content-between  fs-5 mt-3'>
          <label className='ms-4'>Include Special Characters</label>
          <input type='checkbox' className='check me-4' checked={symbol} onChange={()=>sfunc(!symbol)}/>
        </div>
        <hr/>
        <button className='btn btn-primary mt-4' onClick={btnfunc}>Generate Password</button>

      </div>
    </div>
  );
}

export default App;
