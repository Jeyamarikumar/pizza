import React, { useState } from 'react'

function Car() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carsMake, setCarsMake] = useState("");
    const [carsModel, setCarsModel] = useState("");

    function handleAddCar(){
        const newCar = {year:carYear,
            make:carsMake,
            model:carsModel
        };

        setCars(c=> [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarsMake("");
        setCarsModel("");
    }
    
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i)=> i!==index));
    }

    
    function handleYearChange(event){
        setCarYear(event.target.value);

    }

    
    function handleMakeChange(event){
        setCarsMake(event.target.value);
    }
    
    function handleChangeModel(event){
        setCarsModel(event.target.value);
    }


  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index)=> 
        <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
        )}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} /><br/>
      <input type="text" value={carsMake} onChange={handleMakeChange} placeholder='Enter car make'/><br/>
      <input type="text" value={carsModel} onChange={handleChangeModel} placeholder='Enter car model'/><br/>
      <button onClick={handleAddCar}>Add Car</button>


    </div>
  )
}

export default Car
