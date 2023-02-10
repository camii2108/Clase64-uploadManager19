const multer = require('multer');
const path = require('path'); /* modulo nativo de node que nos permite crear rutas seguras */


const storeImageProduct = multer.diskStorage({
    destination : function (req,file,callback) { /* destination: donde debe guardar las iimagenes, los parametros deben estar en ese orden */
    callback(null, 'public/images' )/* Tods los rcursos estaticos son los que se trabajan desde el lado del cliente, por eso tenemos que hacer una ruta relavita . TEGNO RESUELTO DONDE GUARDO MIS IMAGENES*/
   },
   filename: function(req, file, callback) {
    callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)/* INFORMACION DE FECHAS
    originalname: el nombre original de la imagen */ 
   }
});

const upLoadImageProduct = multer({
    storage: storageImageProduct
});

module.exports = {
    upLoadImageProduct
}
