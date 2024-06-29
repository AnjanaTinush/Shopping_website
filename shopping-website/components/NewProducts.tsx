import React from 'react'
import ProductCard from './ProductCard'

function NewProducts() {

    const productData = [
        {
            img: "/l1.jpg",  // Corrected the image path
            title: "Asus",
            desc: "Gaming",
            rating: 4,
            price: "50.00",
        },
        {
            img: "/l2.jpg",
            title: "Msi",
            desc: "Gaming",
            rating: 4,
            price: "45.00",
        },
        {
            img: "/l3.jpg",
            title: "Asus",
            desc: "Gaming",
            rating: 3,
            price: "25.00",
        },
        {
            img: "/l4.jpg",
            title: "Lenovo",
            desc: "Gaming",
            rating: 4,
            price: "45.00",
        },
        {
            img: "/l5.jpg",
            title: "Lenovo",
            desc: "Gaming",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/l6.jpg",
            title: "Msi",
            desc: "Gaming",
            rating: 4,
            price: "100.00",
        },
        {
            img: "/l7.jpg",
            title: "Asus",
            desc: "Gaming",
            rating: 4,
            price: "120.00",
        },
    ]
  return (
    <div className='container pt-16'>
      <h2 className='font-medium text-2xl pb-4'>New Product</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {productData.map((item, index) => (
          <ProductCard 
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default NewProducts
