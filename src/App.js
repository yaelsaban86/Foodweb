import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';

function App() {

  let [list, SetList]= useState([]);

const searchFunction = (value = "")=> {
   fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
  .then((result) => {
    return result.json()
  })
  .then((response) => {
    SetList(response.meals)});
  }

  useEffect(searchFunction, []);

  
    return (

      <div>
        <h1 className='top'>Chef recipes </h1>
       <Search searchFunction={searchFunction}/>
        {list?.map((item) => {
          return(
            <div>
              <p className="name">{item.strMeal} </p> 
              <div className="wrapper">
                <p className="instructions">{item.strInstructions}</p>
                <img className="img" src={item.strMealThumb}/>
              </div>
              




            </div>
             
          )
        })}
      </div>
    )

     
      
   

     

      

    

   
    


    

    
  
};

export default App;
