import { useRef, useState } from "react";

export default function App(){
  
  let [num1, setNum]=useState(0);
  // let results = [];

  let num2=useRef(false);
  let operator=useRef('');
  let sum =useRef(0)

  function handleClick(e){
    if(isNaN(e.target.innerText) && e.target.innerText!=='.' && e.target.innerText!=='%' && e.target.innerText!=='+/-'){
      // operator.current=e.target.innerText;

      if(sum.current===0||sum.current==='0'){
        sum.current= Number(num1);
      }else if(operator.current){
        let prevNum= Number(sum.current);
        let currNum = Number(num1);
        if(operator.current==='+'){
          sum.current=prevNum+currNum;
        }else if(operator.current==='-'){
          sum.current = prevNum-currNum;
        }else if(operator.current==='÷'){
          sum.current=prevNum/currNum;
        }else if(operator.current==='x'){
          sum.current=prevNum*currNum;
        }
      }
      operator.current = e.target.innerText;
      setNum(sum.current);
      num2.current=true;
      return
    }else if(e.target.innerText==='%'){
      setNum(Number(num1)/100)
    }else if(e.target.innerText==='+/-'){
      setNum(Number(num1)*(-1))
    }
    else if (num1==='0'|| num1===0 ||num2.current){
      // results.push(e.target.innerText)
      setNum(e.target.innerText);

      num2.current=false;
    }else{

      setNum(num1+e.target.innerText);
    }
  }

  // function handleOperation(e){
  //   setOperator(e.target.innerText);
  // }

  // let result = `${num1} ${operator} ${num2}`;


  return (
    <div  className="calc w-80 border border-gray-400 ">

      <div className="flex justify-end bg-gray-400 px-12 py-4 w-80 ">
        <h2 className=""> {num1}</h2>
      </div>


      <div className="grid box grid-cols-4 w-80 " >
        <p onClick={()=>{
          setNum(0);
          sum.current=0;
          operator.current='';
          
          }}>AC</p>
        <p onClick={handleClick}>+/-</p>
        <p className="perc" onClick={handleClick} >%</p>
        <p className="operator div" onClick={handleClick}>÷</p>

        <p onClick={handleClick}>7</p>
        <p onClick={handleClick}>8</p>
        <p onClick={handleClick}>9</p>
        <p className="operator mult" onClick={handleClick}>x</p>


        <p onClick={handleClick}>4</p>
        <p onClick={handleClick}>5</p>
        <p onClick={handleClick}>6</p>
        <p className="operator min" onClick={handleClick} >-</p>

        <p onClick={handleClick}>1</p>
        <p onClick={handleClick}>2</p>
        <p onClick={handleClick}>3</p>
        <p className="operator plus" onClick={handleClick}>+</p>

        <p onClick={handleClick} className="col-span-2" >0</p>
        <p onClick={handleClick}>.</p>
        <p className="operator equal" onClick={handleClick}>=</p>

      </div>

    </div>
  );
}