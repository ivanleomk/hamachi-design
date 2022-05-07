import aws from "aws-sdk";

const ses = new aws.SES({
  region: "ap-southeast-1",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function sendEmail(emailTo, message, name) {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Html: {
          Data: `
            <div>
            <h1>Hi there! Thanks for filling in our contact form. We recieved the following details</h1>
            <p>First Name : ${name}</p>
            <p>Last Name : Leo</p>
            <p>Email : ${emailTo}</p>
            <p>Message : ${message}</p>
        </div>
            `,
        },
      },

      Subject: { Data: "From: ivanleo97@gmail.com" },
    },
    Source: "admin@hamachi-design.com",
  };

  //   return ses.sendRawEmail(params).promise();

  return ses.sendEmail(params).promise();
}

export default async function handler(req, res) {
  const { email, message, name } = req.body;

  let emailResult;

  try {
    emailResult = await sendEmail(email, message, name);
    console.log(emailResult);
    res.status(200).json({
      Message: "Ok",
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      Message: "Error",
    });
  }
}
