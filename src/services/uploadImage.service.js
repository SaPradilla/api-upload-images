import { deleteImageCloudinary, uploadCloudinary } from '../helpers/upload_cloudinary.js';
import transformarUrl from '../helpers/split_url.js';

import pLimit from 'p-limit';

export const uploadImages = async (images) => {

  try {

    if (!images) throw new Error('Faltan las imágenes :c sube al menos 1');
    if (images.length > 5) throw new Error('No puedes subir mas de 5 imágenes :(');

    const limit = pLimit(5);

    const imageTospload = images.map((image) => {
      return limit(async () => {
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

export const deleteImages = async (images) => {
  try {
    if (!images || images.length === 0) throw new Error('Debes enviar al menos un id');

    for (const image of images) {
      // separa el public id de la url de la imagen
      const publicID = transformarUrl(image);

      await deleteImageCloudinary(publicID);
    }

  } catch (error) {
    throw error;
  }
};
