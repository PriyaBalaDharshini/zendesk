import express from "express";
import EmailServices from '../utils/EmailService.js'


const router = express.Router();

router.get('/email', async (req, res) => {
    try {
        await EmailServices.sendWelcomeMail("Priya", "Enquiry", "Price of additional Pappers")
        res.status(200).send({
            message: "Email send successfully"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message || "Indternal server error"
        })
    }

})

export default router