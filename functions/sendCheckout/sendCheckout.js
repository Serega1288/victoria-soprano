//const nodemailer = require('nodemailer');
const axios = require('axios')
// const {localStoreService} = require("../../src/function/hook");

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   auth: {
//     user: "victoriasoprano.com",
//     pass: "U7=3rZ*q8"
//   }
// });

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'info@victoriasoprano.com',
//     pass: 'U7=3rZ*q8'
//   }
// });

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   auth: {
//     user: "info@victoriasoprano.com",
//     pass: "U7=3rZ*q8",
//   },
// });





function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
}

// send the email
exports.handler = async (event, context) => {
    // Делаем паузу - 2сек.


    const body = JSON.parse(event.body);

    // console.log('body delivery >>>', body.delivery );
    // console.log('body payment >>>', body.payment );
    // console.log('body cart >>>', body.cart );
    //
    // console.log('body first_name >>>', body.dataAccount.first_name );
    // console.log('body last_name >>>', body.dataAccount.last_name );
    // console.log('body email >>>', body.dataAccount.email );
    // console.log('body billing company >>>', body.dataAccount.billing.company );
    //
    //
    // console.log('body billing first_name >>>', body.dataAccount.billing.first_name );
    // console.log('body billing last_name >>>', body.dataAccount.billing.last_name );
    //
    // console.log('body billing email >>>', body.dataAccount.billing.email );
    // console.log('body billing phone >>>', body.dataAccount.billing.phone );
    //
    // console.log('body billing country >>>', body.dataAccount.billing.country );
    // console.log('body billing city >>>', body.dataAccount.billing.city );
    //
    // console.log('body billing address_1 >>>', body.dataAccount.billing.address_1 );
    // console.log('body billing postcode >>>', body.dataAccount.billing.postcode );

    // Проверка "мусорного" поля input
    if (body.garbage) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Spam !!!' }),
        };
    }

    // const fieldsRequired = [
    //     {
    //         delivery : body.delivery,
    //     }
    // ];




    const cart = body?.cart;

    const cartArray = [];

    for (const field of cart) {
        // console.log('field', field)
        cartArray.push(`${field.databaseId}_${field.step}_${field.color}_${field.size}`);
    }


    // console.log('body>>>>>>>>>>>>', cartArray);



    const delivery = body?.delivery;
    const payment = body?.payment;
    const first_name = body?.dataAccount?.first_name;
    const last_name = body?.dataAccount?.last_name;
    const email = body?.dataAccount?.email;
    const company = body?.dataAccount?.billing?.company;
    const b_first_name= body?.dataAccount?.billing?.first_name;
    const b_last_name = body?.dataAccount?.billing?.last_name;
    const b_email = body?.dataAccount?.billing?.email;
    const b_phone = body?.dataAccount?.billing?.phone;
    const b_country = body?.dataAccount?.billing?.country;
    const b_city = body?.dataAccount?.billing?.city;
    const b_address_1 = body?.dataAccount?.billing?.address_1;
    const b_postcode = body?.dataAccount?.billing?.postcode;



    const fieldsRequired = [
        {status : delivery ? (1) : (0), name: 'Personal information: <strong>Delivery</strong>',},
        {status : payment ? (1) : (0), name: 'Personal information: <strong>Payment</strong>',},
        {status : first_name ? (1) : (0), name: 'Personal information: <strong>First name</strong>',},
        {status : last_name ? (1) : (0), name: 'Personal information: <strong>Last name</strong>',},
        {status : email ? (1) : (0), name: 'Personal information: <strong>Company',},
        {status : company ? (1) : (0), name: 'Personal information: <strong>Company</strong>',},
        {status : b_first_name ? (1) : (0), name: 'Shipping information: <strong>First name</strong>',},
        {status : b_last_name ? (1) : (0), name: 'Shipping information: <strong>Last name</strong>',},
        {status : b_email ? (1) : (0), name: 'Shipping information: <strong>Email</strong>',},
        {status : b_phone ? (1) : (0), name: 'Shipping information: <strong>Phone</strong>',},
        {status : b_country ? (1) : (0), name: 'Shipping information: <strong>Country</strong>',},
        {status : b_city ? (1) : (0), name: 'Shipping information:  <strong>City</strong>',},
        {status : b_address_1 ? (1) : (0), name: 'Shipping information: <strong>Address</strong>',},
        {status : b_postcode ? (1) : (0), name: 'Shipping information: <strong>Postcode</strong>',}
    ];

    // console.log('fieldsRequired >>>', fieldsRequired );

    //

    // Email - обязательное поле

    for (const field of fieldsRequired) {
        // console.log('field', field)
        if ( field.status === 0 ) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: fieldsRequired,
                    result: 'error'
                }),
            };
        }
    }


    let msg = '';
    Object.entries(body).forEach(field => {
        const [key, value] = field;
        if ( key !== 'garbage' ) {
            msg += key + ': ' + value +  '\n'
        }
    })
    msg = encodeURI(msg)

    let date = '';
    let m='';




    const send = `&cart=${cartArray}&delivery=${delivery}&payment=${payment}&first_name=${first_name}&last_name=${last_name}&email=${email}&company=${company}&b_first_name=${b_first_name}&b_last_name=${b_last_name}&b_email=${b_email}&b_phone=${b_phone}&b_country=${b_country}&b_city=${b_city}&b_address_1=${b_address_1}&b_postcode=${b_postcode}`;

    console.log('cartArray >>>>>>>', cartArray);

    await axios({
        method: 'get',
        //url: `${process.env.URL_AJAX}?action=checkout&token=${process.env.AUTH_TOKEN}&body=${JSON.stringify(body)}&ud=${localStoreService.getLocal(process.env.LOCAL_TOKEN)?.split('ud=')[1]}`,
        url: `${process.env.URL_AJAX}?action=setCheckout${send}&ud=${body.ud}&token=${process.env.AUTH_TOKEN}`,
    }).then(function (response) {

            // console.log('fine >>>',  response );

            date = response.data.split('{')[1].split('}')[0]; 


        // console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!done >>>')


            if ( date === '01' || date === '02' || date === '03' ) {
                m = 'Sorry, but an error has occurred, please contact technical support. Error code:';
            }

            if ( date[0] + date[1] === '1_' ) {
                m = 'Order confirmed';
            }

            console.log('Mail >>', date);

    }).catch((error) => {
            date = error;
            console.error(error, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!error >>>')
    });

    pause();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: m, result: date.split('_order_')[1] }),
    };
};
