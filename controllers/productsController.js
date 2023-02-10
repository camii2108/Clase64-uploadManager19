const {readJSON,writeJSON} = require('../data')
module.exports = {
    addOneImage : (req,res) => {
        return res.render('addOneImage')
    },
    storeOneImage : (req,res) => {
      const products = readJSON('productsOneImage.json');
      const newproduct = {
        id: products.length ?  products[products.length - 1].id + 1 : 1,
        name: req.body.name,/* viene del formulario */
        description: "Lorem ipsum dolor amer",
        image: req.file ? req.file.filename : null
      };

      products.push(newProduct);

      writeJSON('productsOneImage.json', products)

        return res.send.redirect('/')
    },
    detailOneImage : (req,res) => {
        const products = readJSON('productsOneImage.json');
        const product = products.find(product.id === +req)
        return res.render('detailOneImage');

    },

    addMultipleImages : (req,res) => {
        const images = req.files.map(file => file.filename);
        return res.render('addMultipleImages'),

    },
    storeAddMultipleImages : (req,res) => {
        return res.send(req.body)
    },
    detailMultipleImages : (req,res) => {
        return res.render('detailMultipleImages')
    },

    addMainImage : (req,res) => {
        return res.render('addMainImage')
    },
    storeAddMainImage : (req,res) => {
        return res.send(req.body)
    },
    detailMainImage : (req,res) => {
        return res.render('detailMainImage')
    },
   
}