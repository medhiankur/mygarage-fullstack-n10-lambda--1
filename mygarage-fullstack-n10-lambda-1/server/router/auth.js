const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res)=>{
    res.send(`Hello world from the server router `)
});

// router.post('/register', (req, res)=>{

//     const {name,email,phone,work,password,cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "fill the field properly"})
//     }

//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist) {
//             return res.status(422).json({error: "Email already exist"});
//         }

//     const user = new User({name,email,phone,work,password,cpassword});
//     user.save().then(()=>{
//         res.status(201).json(({Message:"user resistered successfully"}))
//     // }).catch((err)=> res.status(500).json({error:"failed to register"}));
//     }).catch(err => {console.log(err);});

//     }).catch(err => {console.log(err);});
// });

router.post('/register', async (req, res)=>{

    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "fill the field properly"})
    }

    try {

        const userExist = await User.findOne({email:email})
        if(userExist) {
            return res.status(422).json({error: "Email already exist"});
        }
        
        const user = new User({name,email,phone,work,password,cpassword});
        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json(({Message:"user resistered successfully"}))
        }

     }catch(err){
        console.log(err);
    }
 
});

//Login  route

router.post('/signin', async (req, res)=>{
    // console.log(req.body);
    // res.json({ message : "good run"});
    try{
        let token;
        const {email, password} = req.body;
        if((!email || !password)){
            return res.status(400).json({error:"please fill the data"})
        }
        console.log(req.body)
        console.log(email)
        
        const userLogin = await User.findOne({email: email});

        console.log(User)
        console.log(userLogin)

        if(userLogin){
            const isMatch = await bcrypt.compare (password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            if (!isMatch){
                res.status(400).json({error:"Invaide Credentials 1"})
            }else{
                res.json({ message : "User signin succesfully"})
            }

        }else{
                res.status(400).json({error:"Invaide Credentials 2"})
        }

        const isMatch = await bcrypt.compare (password, userLogin.password)

        console.log();
        if (!isMatch){
            res.json({error:"Invaide Credentials"})
        }else{
            res.json({ message : "User signin succesfully"})
        }


    }catch(err){
        console.log(err)
    }
})

module.exports = router;