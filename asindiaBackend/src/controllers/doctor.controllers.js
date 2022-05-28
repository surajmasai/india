const express = require('express');

const router = express.Router();

const Doctor = require("../models/doctor.model")

// post - create a doctor
router.post("/doctor", async (req, res) => {

    try {
        const doctor = await Doctor.create(req.body);

        return res.status(201).send({ doctor });
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})

router.get("/", async (req, res) => {

    try {
        const doctor = await Doctor.find().lean().exec()

        return res.status(201).send({ doctor })
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })

    }

})

module.exports = router;

