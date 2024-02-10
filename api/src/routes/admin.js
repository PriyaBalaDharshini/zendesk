import express from "express";


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(` <h1>Backend Implementation of ADMIN</h1> `)
})

export default router