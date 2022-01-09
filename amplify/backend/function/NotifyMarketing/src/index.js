const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
    let start = new Date(2021, 9, 2, 0, 0, 0);
    let tomorrow  =  new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    console.log("tomorrow: ");
    console.log(tomorrow);
    console.log("start: ");
    console.log(start);
    var Difference_In_Time = tomorrow.getTime() - start.getTime();
    console.log("Difference_In_Time: ");
    console.log(Difference_In_Time);
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    console.log("Difference_In_Days: " + Difference_In_Days);
    if(Difference_In_Days % 20 == 0){
        console.log("should send email!");
        await ses
        .sendEmail({
            Destination: {
                ToAddresses: ["standard12520@gmail.com"],
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