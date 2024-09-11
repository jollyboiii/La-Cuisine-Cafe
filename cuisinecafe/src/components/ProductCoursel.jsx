import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import products from '../components/products';  
// import '../Css/Feature.css'
function ProductCoursel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            backgroundColor: 'transparent',
        }
    };

    return (
        <div className='Productcoursel'>
            <Carousel className='Productcoursel'  responsive={responsive}>
                {products.map((product, index) => (
                    <ProductCard 
                        key={index} 
                        images={product.image} 
                        title={product.item} 
                        price={product.price} 
                        description={product.description}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default ProductCoursel;
