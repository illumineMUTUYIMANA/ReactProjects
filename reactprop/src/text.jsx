// import React from "react";

function Text(){
  let arr = [
    {id:1, name:'Sheep'},
    {id:2,name:'Goats'}, 
    {id:3, name:'Elephant'},
    {id:4,name:'Plant'}];
  return(
    <>
      <h2>Hello! React</h2>
      <ol>
        {arr.map((animal) => <li key={animal.id}>{animal.name}</li>)}
      </ol>
    </>

  );
}

export default Text;