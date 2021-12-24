const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
    let start = new Date(2021, 10, 2, 0, 0, 0);
    let tomorrow  =  new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var Difference_In_Time = tomorrow.getTime() - start.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days % 20 == 0){
        await ses
        .sendEmail({
            Destination: {
                ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
                Subject: { Data: 'תזכורת למאמן משווק מאמן' },
                Body: {
                Text: { Data: `מחר יש מאמן משווק מאמן כנסו ל: https://main.ddhgeqg2yoymf.amplifyapp.com/` },
                },
            },
        })
        .promise();
    }
  return { status: 'done' }
}