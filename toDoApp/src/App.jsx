import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
// import { useRef } from 'react';

function App() {

  // let insertedToDo = [];
  let [toDo,setToDo] = useState([]);
  let [changes,setChanges] = useState('');
  let [id,setId] = useState(1);
  // let [isChecked,setIsChecked] = useState(false)
  function handleChanges(e){
    setChanges(e.target.value);
  }
  function handleInput(e){
    e.preventDefault;
    if(changes.trim()!==''){
      
      let newTodo = {
        id: id,
        text: changes,
        isChecked:false
      }
      setToDo([...toDo,newTodo]);
      setId(id+1);
      setChanges('');

    }


    // changes.current='';
    // setToDo([...toDo,changes.current])

  }

  function checkbyId(id){
    setToDo(
      toDo.map((todo)=>
        todo.id===id? {...todo,isChecked:!todo.isChecked}: todo
      )
    )
  }

  function deleteToDo(id){
    setToDo((todos) => todos.filter((todo) => todo.id !== id));
  }


  return (

    <div style={{width:'600px'}} >
      <h1 style={{textAlign:'center'}}>todos</h1>

      <div className='add' style={{border:'2px solid gray', boxShadow:'0 0 10px green', borderRadius:'16px', padding:'10px 10px'}}>

        <input onChange={handleChanges} value={changes} style={{border:0,outline:'none', width:'700px'}} type="text" placeholder="Add todo..." />

        <FontAwesomeIcon onClick={handleInput}
          icon={faCirclePlus} 
          style={{ color: "rgb(99, 230, 190)" }} 
        />
      </div>

      <div className='taskHolder' >
        { toDo.map((value)=>
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',marginLeft:'0px',paddingLeft:'0px', paddingTop:'1px',paddingBottom:'1px', borderBottom:'1px solid gray'} }>
          <div className='single' style={{display:'flex',width:'80%',alignItems:'flex-start'}}>

            <input style={{marginTop:'26px'}} type="checkbox" name="check" id="box" checked={value.isChecked} 
             onChange={()=>checkbyId(value.id)} /> 
            <h4 style={{textDecoration: value.isChecked ? 'line-through': 'none',color:'GrayText',
              maxfontWeight:'lighter',
              overflowWrap:'break-word',width:'100%',fontSize:'16px'}}
               key={value.id}>{ value.text}</h4>

          </div>

          <FontAwesomeIcon 
          onClick={() => deleteToDo(value.id)}
          icon={faTrash} 
          style={{ color: "red", padding:'12px',backgroundColor: 'rgb(234, 239, 242)', borderRadius:'30px'}} 
        />

        </div>
          
        )}
      </div>
    </div>
  );
}

export default App;
