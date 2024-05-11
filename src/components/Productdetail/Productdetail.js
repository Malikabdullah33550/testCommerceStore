import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
    
    let {productName}  = useParams()
    const computersArray = [
        "PC1.jpg",
        "PC2.jpg",
        "PC3.jpg",
        "PC4.jpg",
        "PC5.jpg",
        "PC6.jpg",
        "PC7.jpg",
      ];



    let thisProduct = computersArray.find((item) => item == productName)

  return (
    <div className='w-[500px h-[500px]]'>
    <img className='w-[300px]' src={`/${thisProduct}`} alt={thisProduct}/>
    <h1>Baap nay naam rahka ni</h1>
  </div>
  )
}

export default Productdetail
