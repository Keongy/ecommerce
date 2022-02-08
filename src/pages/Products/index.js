import React from 'react';
import Card from '../../components/Card';
import './products.css'
import data from '../../data/inventory'

const Products = ({ showcaseDataProps }) => {

    const showcaseData = (props) => {
        showcaseDataProps(props)
    }


    return (
        <div className='products'>
            {data.map(el => {
                return (
                    <Card
                        key={el.id}
                        data={el}
                        showcaseData={showcaseData}
                    />
                )
            })}
        </div>
    );
};

export default Products;