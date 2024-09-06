import { uploadCloudinary } from '../helpers/upload_cloudinary.js';
import pLimit from 'p-limit';

export const uploadImages = async(images) => {

  try {
    
    if(!images) throw new Error('Faltan las imágenes :c sube al menos 1');
    if(images.length > 5) throw new Error('No puedes subir mas de 5 imágenes :(');
    
    const limit = pLimit(5)

    const imageTospload = images.map((image)=>{
      return limit(async()=>{
          const img = await uploadCloudinary(image); 
          return img;
      })
    });
    const imagesUpload = await Promise.all(imageTospload);
    return imagesUpload;
    
  } catch (error) {
    throw error;
  }

}
