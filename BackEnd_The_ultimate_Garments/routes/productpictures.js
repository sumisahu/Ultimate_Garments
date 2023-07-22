var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

router.post('/add_new_product_pictures', upload.any(), function (req, res, next) {
    console.log(req.files)
    var banners=[]
    req.files.map((item)=>{
     banners.push(item.filename)
 
    })
     pool.query("insert into productpictures(categoryid, subcategoryid, productid, productpictures) values(?,?,?,?)", [req.body.categoryid,req.body.subcategoryid,req.body.productid,JSON.stringify(banners)], function (error, result) {
         if (error) {
             console.log(error)
             return res.status(500).json({ result: false })
         }
         else {
                  
             return res.status(200).json({ result: true })
         }
 
     })
 });
 



module.exports = router;