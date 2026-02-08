import React, { useState } from 'react'

function Array() {

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFoods(){

    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value="";
    setFoods(f => [...f, newFood]);

    }

    function handleRemoveFoods(index){

        setFoods(foods.filter((_, i) => i!==index))
    }

  return (
    <div>
        <h1>List of Food</h1>
      <ul>
        {foods.map((food, index) =>
        <li key={index} onClick={() => handleRemoveFoods(index)}>{food}</li>
        )}
      </ul>
      <input type="text"  id="foodInput" placeholder='Enter food name' />
      <button onClick={handleAddFoods}>Add Food</button>
    </div>
  )
}

export default Array
