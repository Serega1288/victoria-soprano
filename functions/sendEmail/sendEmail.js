const nodemailer = require('nodemailer');
const axios = require('axios')

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function pause() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
}

// send the email
exports.handler = async (event, context) => {
  // Делаем паузу - 2сек.
  await pause();

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
  //const html_ = '';
  // for (body of fieldsRequired) {
  //    html_ = html_ + fieldsRequired
  // }
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

  // Посылаем email
  await transporter.sendMail({
    from: 'Victoria Soprano Group <info@victoriasoprano.com>',
    to: `<${body.email}>`,
    subject: body.title,
    html: emailHtml,
  });

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



  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Transaction successful!' }),
  };
};
