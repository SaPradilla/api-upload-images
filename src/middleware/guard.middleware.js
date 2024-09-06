
export const guard = (req,res,next)=>{

    const secret_gm =  req.headers['secret_gm'];

    if(secret_gm && secret_gm === process.env.SECRET_GM){
        return next();
    }
    return res.status(401).json({msg:'Unauthorized :('})

}