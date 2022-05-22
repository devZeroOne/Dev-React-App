import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Card from './components/Card';
import data from './database/fakeData.json'

const App=()=>{

// console.log(data);

  return(
    <div className="myDiv">

{
  data.map((item,index)=>
  <Card key={item.id} item={item}/>
  )
}

    </div>
  )
  
}
export default App


