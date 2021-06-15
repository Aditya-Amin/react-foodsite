import React from 'react';
import Productbox from './Productsbox';
import pimg1 from '../images/s1.png';
import pimg2 from '../images/s2.png';
import pimg3 from '../images/s1.png';

function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY!</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <div className="a-container">
                <Productbox image={pimg1} title="Naga Burger"/>
                <Productbox image={pimg2} title="BBq Chicken Burger"/>
                <Productbox image={pimg3} title="Subway Burger"/>
            </div>
        </div>
    )
}

export default Products
