import { uploadImages } from "../services/uploadImage.service.js";


export const SendImage  = async(req,res)=>{

    const imagesBuffer = req.files;
    try {
        const images = await uploadImages(imagesBuffer);

        return res.status(200).json({
            msg:'Imágenes subidas correctamente c:',
            images
        })

    } catch (error) {
        return res.status(500).json({msg:'Error al subir las imagenes',error:error.message})
    }


}


