const nodemailer = require('nodemailer');
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

var transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});



function pause() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
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

  const fieldsRequired = ['email'];

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
  axios
      .post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHOP}&parse_mode=html&text=${msg}`, {
        todo: 'Buy the milk',
      })
      .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })



  await pause();


  let emailHtml='';

  // body.forEach(([key, value]) => {
  //   console.log(key + ' - ' + value) // key - value
  // });

  // event.body.forEach((obj) => {
  //   Object.entries(obj).forEach(([key, value]) => {
  //     console.log(`${key} ${value}`);
  //   });
  // });

  Object.entries(body).forEach(entry => {
    const [key, value] = entry;
    //console.log(key, value);
    if ( key !== 'garbage' ) {
      if ( key === 'title' ) {
        emailHtml = emailHtml + '<br><strong>Title form send:</strong> ' + value + '<br>'
      } else {
        emailHtml = emailHtml + '<br><strong>' + key + ':</strong> ' + value
      }

    }
  });


  console.log('body >>>>', emailHtml)

  // Object.keys( JSON.stringify(body) ).forEach(key => {
  //   console.log(key, obj[key]);
  // });

  const mailOptions = {
    from: `Victoria Soprano Group <${process.env.MAIL_USER}>`,
    to: `<${process.env.SEND_EMAIL_TO}>`,
    subject: body.title,
    html: emailHtml,
  };
  await transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  })



  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Transaction successful!' }),
  };
};
