import React from 'react'
import {localStoreService} from "../../function/hook";
import {format} from "date-fns";
import JSONData from "../../assets/country.json";
import {Link} from "gatsby"

const OrderDetails = ({s}) => {

    // const ID = s.line_items[0].product_id;

    const getContryName = (name) => {
        // console.log('JSONData', JSONData.countries)
        const result = JSONData.countries.find(item => item.value === name)
        // console.log('JSONData', name, result)
        return result.label
    }

    console.log('order', s )


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     let ob = { get: `products/${ID}/`, type : `product` };
    //     const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
    //         method: 'POST',
    //         headers: {
    //             'content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(ob),
    //     });
    //     const data = await response.json();
    //     setData(data);
    //
    //     console.log('data product >>>', data.result )
    // };

    const sumPrice = (products) => {
        // console.log('products', products)
        let sum = 0;
        for (const field of products) {
            sum = sum + +field.total;
        }
        return sum + '$';
    };


    return (
        <>
            <div className="detailsOrder WrapTable-1">
                <div className="wrapOrders">
                    <div className="wrap">

                        <div className="row">
                            <div className="col-6">
                                <strong>
                                    Taken to work:
                                </strong>
                            </div>
                            <div className="col-6">
                                {format( new Date(s.date_created), 'yyyy/MM/dd')}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <strong>
                                    Status:
                                </strong>
                            </div>
                            <div className="col-5">
                                {
                                    s.status
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <strong>
                                    Parcel number:
                                </strong>
                            </div>
                            <div className="col-6">
                                { s.meta_data.map((item, index) => { if (item.key === 'parcel_number') {
                                    return ( <span key={`parcel_number-${index}`}>{item.value}</span> )
                                }})}
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="detailsOrder">
                <div className="title d-flex align-items-center">
                    PRODUCTS
                </div>
                <div className="wrapOrders">
                    <div className="productList">
                        {
                            s.line_items.map((item,index)=>(
                                <div key={`productOrder-${index}`}>
                                    <div className="row">
                                        <div className="col-12 col-sm-auto">
                                            <div className="wrapImg">
                                                <div style={{backgroundImage: `url(${item.image.src})`}} className="img" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm">
                                            <div className="name">
                                                {item.name}
                                            </div>
                                            <div className="row wrapAttr">
                                                <div className="col-3">
                                                    Color:
                                                </div>
                                                <div className="col-3">
                                                    Size:
                                                </div>
                                                <div className="col-3">
                                                    Total:
                                                </div>
                                                <div className="col-3">
                                                    Total price:
                                                </div>
                                            </div>
                                            <div className="row wrapAttr">
                                                <div className="col-3">
                                                    <strong>
                                                        { item.meta_data.map((item, index) => { if (item.key === 'color') {
                                                            return ( <strong key={`wrapAttr-color-${index}`}>{item.value}</strong> )
                                                        }})}
                                                    </strong>
                                                </div>
                                                <div className="col-3">
                                                    { item.meta_data.map((item, index) => { if (item.key === 'size') {
                                                        return ( <strong key={`wrapAttr-size-${index}`}>{item.value}</strong> )
                                                    }})}
                                                </div>
                                                <div className="col-3">
                                                    <strong>{item.quantity}</strong>
                                                </div>
                                                <div className="col-3">
                                                    <strong>{parseFloat(item.total)?.toFixed(0)}$</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row wrapTotal">
                    <div className="col-12 col-sm-6">

                    </div>
                    <div className="col-12 col-sm-6">
                        <div style={{marginTop: '2.5rem'}} className="title d-flex align-items-center">
                            Total order value
                        </div>
                        <div className="row wrapAttr">
                            <div className="col-8">
                                <strong>Total price:</strong>
                            </div>
                            <div className="col-4">
                                {sumPrice(s.line_items)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='wrapList row'>
                <div className="col-12">
                    <div style={{marginBottom: '3rem'}} className="title">
                        my shipping information
                    </div>
                    <div className="list">
                        <div>
                            <strong>
                                <span>{s.billing.last_name}</span> <span>{s.billing.first_name}</span>
                            </strong>
                        </div>
                        <div className='email'>
                            {s.billing.email}
                        </div>
                        <div className='phone'>
                            {s.billing.phone}
                        </div>
                        <div className='country'>
                            {getContryName(s.billing.country)}
                        </div>
                        <div className='city'>
                            {s.billing.city}
                        </div>
                        <div className='address_1'>
                            {s.billing.address_1}
                        </div>
                        <div className='postcode'>
                            {s.billing.postcode}
                        </div>
                    </div>
                </div>
            </div>


            <div className='wrapList row'>
                <div className="col-12 col-sm-6">
                    <div style={{marginBottom: '3rem'}} className="title">
                        payment method
                    </div>
                    <div className="list">
                        <div>
                            { s.meta_data.map((item, index) => { if (item.key === 'payment_method') {
                                return ( <span key={`payment_method-${index}`}>{item.value}</span> )
                            }})}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div style={{marginBottom: '3rem'}} className="title">
                        DELIVERY METHODS
                    </div>
                    <div className="list">
                        <div>
                            { s.meta_data.map((item, index) => { if (item.key === 'delivery_methods') {
                                return ( <span key={`delivery_methods-${index}`}>{item.value}</span> )
                            }})}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default OrderDetails;