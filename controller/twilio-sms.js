const { TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;
const twilio= require('twilio') 
const client = (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

//send OTP

const sendOTP = async (req, res, next) => { 
    const {countryCode, phoneNumber} = req.body; 
    console.log("Post Request");
    //console.log(`$countryCode`);
    try{
        const otpResponse = await client.verify.services (TWILIO_SERVICE_SID)
        .verifications.create({
        to:`+${countryCode}${phoneNumber}`,
        channel: "sms",
        });
        res.status(200).send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
    }catch(error) {
        res.status(error?.status || 400).send(error?.message || 'Something went wrong!');
    }
};

//verifyOTP
const verifyOTP = async (req, res, next) => {
    const { countryCode, phoneNumber, otp } = req.body;

    try{
        const verifiedResponse = await client.verify
        .services (TWILIO_SERVICE_SID)
        .verificationChecks.create({
        to:`+${countryCode}${phoneNumber}`,
        code: otp,
        }) 
    res.status(208).send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}` ); 
    }catch(error) {
        res.status(error?.status || 408).send(error?.message || 'Something went wrong!');
    }
}
exports.sendOTP=sendOTP
exports.verifyOTP=verifyOTP;

