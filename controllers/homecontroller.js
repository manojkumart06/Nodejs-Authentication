const User = require('../models/user');

module.exports.home=function(req,res){
    console.log(req.cookies);
    console.log(req.body);
    return res.render('home',{
        title:"home"
    })
   
}

module.exports.profile = function(req, res) {
    return res.render('profile', {
        title: "Profile"
    })
}
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:'Auth'
    })
}
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:'Auth'
    })
}
// get signup data

module.exports.create = async function(req,res){

    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password; 
   
     
    try{
    const user= await User.findOne({email})
        


        if(!user){
            const newUser = new User({
                name,
                email,
                password
            });
            newUser.save();
            return res.redirect('/users/sign-in');

        }
        else{
            return res.redirect('back')
        }
    

}catch(err){
    console.log(err);
}
}
