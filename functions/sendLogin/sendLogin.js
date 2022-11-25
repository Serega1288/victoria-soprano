//const nodemailer = require('nodemailer');
const axios = require('axios')

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
    setTimeout(resolve, 1000);
  });
}

// send the email
exports.handler = async (event, context) => {
  // Делаем паузу - 2сек.


  const body = JSON.parse(event.body);

  // Проверка "мусорного" поля input
  if (body.garbage) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Спам !!!' }),
    };
  }

  //console.log('!!!>> s', body)

  const fieldsRequired = ['email','password'];

  // Email - обязательное поле
  for (const field of fieldsRequired) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Введите ${field}!`,
        }),
      };
    }
  }



  let msg = ''

  Object.entries(body).forEach(field => {
    const [key, value] = field;
    if ( key !== 'garbage' ) {
      msg += key + ': ' + value +  '\n'
    }
  })

  msg = encodeURI(msg)

  // token=${process.env.AUTH_TOKEN}
  // axios
  //     .get(`${process.env.URL_AJAX}?action=authLogin`, {
  //       token: process.env.AUTH_TOKEN,
  //     })
  //     .then((res) => {
  //       // JSON.parse(res.data)
  //       console.log('>>', res, 'ok')
  //       //console.log(res)
  //     })
  //     .catch((error) => {
  //       console.error(error, 'error')
  //     })


  axios({
    method: 'POST',
    responseType: 'json',
    url: `${process.env.URL_AJAX}?action=authLogin&token=${process.env.AUTH_TOKEN}`,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {

    // JSON.parse(res.data)
    console.log(res, 'ok res')
    //console.log(res)
  })
      .catch((error) => {
        console.error(error, 'error >>')
      })

  // axios({
  //   method: 'GET',
  //   url: process.env.URL_AJAX,
  //   headers: {
  //     'action': 'authLogin',
  //     'token': process.env.AUTH_TOKEN,
  //   }
  // }).then(resp => {
  //   console.log(resp.data);
  // }).catch(err => {
  //   // Handle Error Here
  //   console.error(err, 'err');
  // });



  await pause();


  //let emailHtml='';

  // body.forEach(([key, value]) => {
  //   console.log(key + ' - ' + value) // key - value
  // });

  // event.body.forEach((obj) => {
  //   Object.entries(obj).forEach(([key, value]) => {
  //     console.log(`${key} ${value}`);
  //   });
  // });

  // Object.entries(body).forEach(entry => {
  //   const [key, value] = entry;
  //   //console.log(key, value);
  //   if ( key !== 'garbage' ) {
  //     if ( key === 'title' ) {
  //       emailHtml = emailHtml + '<br><strong>Title form send:</strong> ' + value + '<br>'
  //     } else {
  //       emailHtml = emailHtml + '<br><strong>' + key + ':</strong> ' + value
  //     }
  //
  //   }
  // });


  //console.log('body >>>>', emailHtml)

  // Object.keys( JSON.stringify(body) ).forEach(key => {
  //   console.log(key, obj[key]);
  // });

  // const mailOptions = {
  //   from: 'Victoria Soprano Group <info@victoriasoprano.com>',
  //   to: `<${body.email}>`,
  //   subject: body.title,
  //   html: emailHtml,
  // };
  //
  // await transporter.sendMail(mailOptions, function (err, info) {
  //   if(err)
  //     console.log(err)
  //   else
  //     console.log(info);
  // })



  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Transaction successful!' }),
  };
};
