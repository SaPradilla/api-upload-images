export default function transformarUrl(url) {
    // Partir la URL por las barras '/'
    const partes = url.split('/');
    
    // Extraer el nombre de la carpeta y el archivo
    const carpeta = partes[partes.length - 2];
    const archivo = partes[partes.length - 1].split('.')[0]; // Eliminar la extensión del archivo
    
    // Combinar la carpeta y el archivo
    const nuevoString = `${carpeta}/${archivo}`;
    
    return nuevoString;
}

