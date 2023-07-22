var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

router.post('/add_new_banners', upload.any(), function (req, res, next) {
    console.log(req.files)
    var banners=[]
    req.files.map((item)=>{
     banners.push(item.filename)
 
    })
     pool.query("insert into banners(bannerpictures) values(?)", [JSON.stringify(banners)], function (error, result) {
         if (error) {
             console.log(error)
             return res.status(500).json({ result: false })
         }
         else {
             return res.status(200).json({ result: true })
         }
 
     })
 });

 router.get('/display_banners', function (req, res, next) {
    pool.query("select * from banners", function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            return res.status(200).json({ data: result[0] })
        }

    })
});
 



module.exports = router;