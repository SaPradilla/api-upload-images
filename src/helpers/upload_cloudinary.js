import {v2 as cloudinary} from 'cloudinary';

export const uploadCloudinary = async(image)=>{


    return new Promise((resolve,reject)=>{

        cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: 'images-globermarket' },
            (error, result) => {
                if (error) {
                    reject(new Error('Error al subir la imagen a Cloudinary'));
                } else {
                    resolve(result.secure_url);
                }
            }
        ).end(image.buffer)

    })
    
}


export const deleteImageCloudinary = async (image) => {

    
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(image, { resource_type: 'image',folder: 'images-globermarket' }, (error, result) => {
            if (error) {
                console.log(error)
                reject(new Error('Error al eliminar la imagen de Cloudinary'));
            } else {
                console.log(result)
                // if(result.result === 'not found'){
                //     // reject(new Error('Alguna de las url no se encontraron'));
                // }
                resolve(result);
            }
        });
    });
};