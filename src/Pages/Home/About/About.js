import React from 'react';
import warehouse from '../../../images/warehouse-1.jpg'

const About = () => {
    return (
        <div className="row caedItems m-3">
            <h3 className='text-center py-3'>An Overview of the Furniture Industry in Bangladeshh</h3>
            <div className='col-lg-6 col-12 cards'>
                <div className='caedItems'>
                    <img className='w-100' src={warehouse} alt="" />
                </div>
            </div>
            <div className='col-lg-6 col-12 cards'>
                <div>
                    <p>
                        The domestic furniture market is worth more than BDT 67 Billion (EU Technical Report). With this increasing demand for furniture in cities all over the country, there are hundreds of local stores and furniture brands competing for the consumers.
                    </p>
                    <p>
                        Currently in Bangladesh furniture is made from wood, processed wood, melamine board, MDF etc. Although traditionally Bangalis have always favoured the solid wood and beautifully decorated furniture but in the age of millenials people are looking towards more simple and elegantly designed furnitures for their homes.
                    </p>
                    <p>
                        And Real has delivered on that very successfully. Being the only FSC certified furniture manufacturers in Bangladesh, Real uses environment friendly raw materials that cause minimal waste. Lean manufacturing is done here to produce diverse products with minimal waste of materials, resources, processing, and human involvement.
                    </p>
                    <div className='d-flex align-aitems-center justify-content-center w-100'>
                        <button className='w-50 updateBtn'>More...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;