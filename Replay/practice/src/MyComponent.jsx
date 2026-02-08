import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(1);

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [shipping, setShipping] = useState("");



    const handleChange = (event) => {
        setName(event.target.value);
    }

     const handleChange2 = (event) => {
        setQuantity(event.target.value);
    }

    const handleChange3 = (event) => {
        setComment(event.target.value);
    }

     const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleChangeShipping = (event) => {
        setShipping(event.target.value);
    }


  return (
    <div>
      <input onChange={handleChange} type="text"/>
      <h3>Name: {name}</h3>

      <input onChange={handleChange2} value={quantity} type='number'/>
      <h3>Quantity: {quantity}</h3>

      <textarea onChange={handleChange3} value={comment} placeholder='Enter delivery instructions'/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option>Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>

      </select>
      <h3>Payment: {payment}</h3><br/>


      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleChangeShipping}/>
        Pick Up
      </label>
      <label>
         <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleChangeShipping}/>

        Delivery
      </label>

      <h3>Shipping: {shipping}</h3>
    </div>
  )
}

export default MyComponent
