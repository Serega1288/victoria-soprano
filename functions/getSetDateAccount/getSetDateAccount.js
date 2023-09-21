//const nodemailer = require('nodemailer');
const axios = require('axios')



// send the email
exports.handler = async (event, context) => {

  const body = JSON.parse(event.body);

  let m='';
  let date = '';
  let status = '';
  let statusCode = '';


  if ( body.type === 'getDateAccount' || body.type === 'order' ) {

      // console.log('getDateAccount >>>', body );

    await axios.get(`${process.env.URL_WOO_REST_API}${body.get}`, {
      auth: {
        username: process.env.CONSUMER_KEY,
        password: process.env.CONSUMER_SECRET,
      },
    }).then(response => {
      m = response.data;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>> done', body.type, response.data );
    }).catch(error => {
      // console.error('>>>>>>>>>>>>>>>>>>>>>>>> error', error);
      //   console.log('>>>>>>>>', body.type, response.data.result );
      return {
        statusCode: 400,
        body: JSON.stringify({ m: body, result: error}),
      };
    });


  }


  if ( body.type === 'setDataAccount' ) {


      let setField = '';
      if ( body.typeSet === 1 ) {
          setField = `&typeSet=${body.typeSet}&email=${body.email}&first_name=${body.first_name}&last_name=${body.last_name}&billing_company=${body.billing_company}`;
      }

      if ( body.typeSet === 2 ) {
          setField = `&typeSet=${body.typeSet}&billing_first_name=${body.billing_first_name}&billing_last_name=${body.billing_last_name}&billing_phone=${body.billing_phone}&billing_email=${body.billing_email}&billing_country=${body.billing_country}&billing_city=${body.billing_city}&billing_address_1=${body.billing_address_1} &billing_postcode=${body.billing_postcode}`;
      }

      // console.log('>>>>>>>!', body, setField);

    await axios({
      method: 'get',
      url: `${process.env.URL_AJAX}?action=setDataAccount&token=${process.env.AUTH_TOKEN}${setField}&ud=${body.ud}&type=${body.type}`,
    })
        .then(function (response) {
          date = response.data.split('{')[1].split('}')[0];
          // console.log('fine >>>',  date)

          if ( date === '01' || date === '02' || date === '03'|| date === '04' ) {
            m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
          }
          // if ( date === '04' ) {
          //     m = 'Invalid password.';
          // }

          if ( date[0] + date[1] === '1_' ) {
            m = '1_';
          }

          // console.log('Mail >>', m);

        }).catch((error) => {
          date = error;
          // console.error(error, 'error >>>')
        });

  }

  if ( body.type === 'setPass' ) {


    await axios({
      method: 'get',
      url: `${process.env.URL_AJAX}?action=setPass&token=${process.env.AUTH_TOKEN}&email=${body.t.email}&ud=${body.t.name}&pc=${body.passwordCurrent}&p1=${body.password_1}&p2=${body.password_2}&type=${body.type}`,
    })
        .then(function (response) {
          date = response.data.split('{')[1].split('}')[0];
          console.log('fine >>>',  date)

          // CqSnpaH8

          if ( date === '01' || date === '02' || date === '03' ) {
            m = `Sorry, but an error has occurred, please contact technical support. Error code: ${date}`;
            status = 'error';
            statusCode = '01-03';
          }


          if ( date === '04' ) {
            m = 'Current password. Not correct.';
            status = 'error';
            statusCode = '04';
          }

          if ( date === '05' ) {
            m = 'New password confirmation failed.';
            status = 'error';
            statusCode = '05';
          }

          if ( date === '06' ) {
            m = 'The new password is identical to the current one.';
            status = 'error';
            statusCode = '06';
          }

          if ( date[0] + date[1] === '1_' ) {
            m = 'The password has been changed. After 4 seconds, you will be redirected to the authorization page.';
            status = 'done';
            statusCode = '1_';
          }

          console.log('Mail >>', m);

        }).catch((error) => {
          date = error;
          console.error(error, 'error >>>')
          status = 'error';
        });

  }


  return {
    statusCode: 200,
    body: JSON.stringify({ result: m}),
  };
};
