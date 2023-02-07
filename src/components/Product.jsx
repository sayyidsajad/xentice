import React, { useState, useEffect } from 'react';

function Product({ data, type }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(
            data.filter(property => property.propertyType.name === type)
        );
    }, [data]);
    console.log(filteredData);
    return (
        <div className='container'>
            <div className=''>
                <h4>{type}</h4>
                <div className='mt-4 d-flex justify-content-evenly'>
                    {filteredData.map(item => (
                        <div className='ms-3' key={item.id}>
                            <div className='row'>
                                <div className='col-4'>
                                    <img width={200} height={200} src={item.images} alt='random-img' />
                                    <h4>{item.details.title}</h4>
                                    <h5 className='text-muted'>{item.location.city}, {item.location.country}</h5>
                                    <h5>{item.details.rate}</h5>
                                    <a className='text-end'>Explore now</a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default Product