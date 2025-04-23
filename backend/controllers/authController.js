import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) 
            return res.status(400).json({message: "USer Exists"});

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
            });

            res.status(201).json({ message: "User Created", user});
        }catch(err) {
            res.status(500).json({error:err.message})
        }
};

export const loginUser = async(req,res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if( !user ) return res.status(400).json({message:"Invalid email"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid Password"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.json({message:"Login Success", token});
    } catch(err){
        res.status(500).json({error: err.message});
    }
}
