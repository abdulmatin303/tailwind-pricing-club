import React from 'react';
import PricingOption from '../PricingOptions/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, benefits: [
            'lifetime free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {id: 2, name: 'Regular', price: 9.99, benefits: [
            'everything on free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {id: 3, name: 'Premium', price: 19.99, benefits: [
            'everything on regular', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]}
    ]
    return (
        <div className='bg-orange-600 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto consectetur voluptatibus vitae natus sint harum ab eius sequi, praesentium earum!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption 
                        key={option.id}
                        option={option}
                        ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;