
const {readJSON} = require('../data')
 module.exports = {
  home: (req, res) => {
    const productsOneImage = readJSON('productsOneImage')
    return res.render("home",
    {
      productsOneImage
    })
  },
};
