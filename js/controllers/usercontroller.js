import { User } from "../models/usermodel.js";

export const createUser = async(req,res) => {
    const {email, username, password}=req.body;
    const newUser=newUser({email, username, password});
    await newUser.save();
    res.status(201).json(newUser);
}

export const loginUser = async(req,res) => {
    const{password, username} = req.body;
    const user = await User.findOne({email});

    if(!user){
        throw new error('invalid');
    }

    const isMatch = bcrypt.compare(user.password, password);
    
    if(!isMatch){
        throw new error('invalid');
    }

    const token = jwt.sign({userId: user._id}, 'testpassword');
    res.status(200).send({user, token});
    
}