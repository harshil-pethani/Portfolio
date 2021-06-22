const User = require('../models/user');

const router = require('express').Router();

router.post('/', async (req,res)=>{
    const msg = new User(req.body);
    try{
        const savedMsg = await msg.save();

        res.status(200).send(savedMsg);

    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports = router;
