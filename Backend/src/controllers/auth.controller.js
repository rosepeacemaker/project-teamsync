
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try{
        const user = await userModel.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "User already exists",
                success: false
             });
        }
    } catch (error) {
        console.log(error.message);
}
}
   
              