import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState=[
    {id:0, value:0, name:"Ненужная вещь"},
    {id:1, value:1,name:"Ложка"},
    {id:2,value:2, name:"Вилка"},
    {id:3,value:3, name:"Тарелка"},
    {id:4,value:4, name:"Набор минималиста"}
  ]
  
  const [counters,setCounters]=useState(initialState)

  const handleDelete=(id)=>{
    const newCounters=counters.filter(c=>c.id!==id)
    setCounters(newCounters)
  }
  const handlReset=()=>{
    setCounters(initialState)
    
  }
//  initialState.map((counters)=>{
//    const newValue=counters.value+1
//    console.log(newValue)
// }) 
  const handleIncrement=(id)=>{
    const updatedCounters=counters.map((counter)=>{
      if(counter.id===id){
        return{
          ...counter,
          value:counter.value+1
        }
      }
      return counter
    })
   setCounters(updatedCounters)

  }


   const handleDecrement=(id)=>{
    const updatedCounters=counters.map((counter)=>{
      if(counter.id===id && counter.value>0){
        return{
          ...counter,
          value:counter.value-1
        }
      }
      return counter
    })
   setCounters(updatedCounters)
   }

 
  return (
    <>
    
      {counters.map((count)=>(
      <Counter
        key={count.id}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDicrement={handleDecrement}
        {...count}
      />
       
      ))}
      <button className="btn btn-primary btn-sm m-2" 
      onClick={handlReset}>
        Сброс
      </button>

      
  
    </>
  );
};
export default CountersList;
