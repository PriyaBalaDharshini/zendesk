import sgMail from '@sendgrid/mail'

const sendMail = async (to, subject, html) => {
    const msg = {
        to: to,
        from: "priyaarasu12@gmail.com",
        subject: subject,
        text: html,
        html: html,
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail

        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
};

const sendWelcomeMail = async (name, type, title) => {
    try {
        let html = `<div>
        <h3>Welcome ${name}</h3>
        <p>Greetings for the day! We have received your request. We will be notifying you for further updates via email.
            You can also check the status <a href="">Here</a>
        </p>
        <div>
            <table>
                <tr>
                    <td>Type</td>
                    <td>${type}</td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td>${title}</td>
                </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks <br>
            Zen Desk Team
        </div>
    </div>`
        await sendMail("ak3aki@gmail.com", "Test Mail", html);
    } catch (error) {
        throw error
    }

}

export default { sendWelcomeMail }