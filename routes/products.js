const express = require('express');
const router = express.Router();

const {addMainImage, addMultipleImages,addOneImage, storeAddMainImage, storeAddMultipleImages, storeOneImage, detailMainImage, detailMultipleImages, detailOneImage} = require('../controllers/productsController');

const { uploadImageProduct} = require('../middlewares/upload')
/* /products */

router
  .get('/add-one-image', addOneImage)
  .post('/add-one-image',  uploadImageProduct.single('image'), storeOneImage)/* esta ruta que vien por post es la que me captura la informacion */
  .get('/detail-one-image/:id', detailOneImage) /* ruta que me renderiza  */
  /* ruta que me muestra detallede producto */

  .get('/add-multiple-images', addMultipleImages)
  .post('/add-multiple-images',uploadImageProduct() storeAddMultipleImages)
  .get('/detail-multiple-images/:id', detailMultipleImages)


  .get('/add-main-image', addMainImage)
  .post('/add-main-image', storeAddMainImage)
  .get('/detail-main-image/:id', detailMainImage)

module.exports = router;
