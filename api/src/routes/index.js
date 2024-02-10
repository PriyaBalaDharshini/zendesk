import express from "express";
import AdminRoutes from '../routes/admin.js'
import UserRoutes from '../routes/user.js'
import RequestRoutes from '../routes/request.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(` <h1>Backend Implementation of ZEN DESK</h1> `)
})

router.use("/admin", AdminRoutes);
router.use("/user", UserRoutes);
router.use("/request", RequestRoutes);



export default router