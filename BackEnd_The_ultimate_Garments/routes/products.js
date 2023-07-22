var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

router.post('/add_new_products', upload.single('picture'), function (req, res, next) {

    pool.query("insert into products(categoryid, subcategoryid, productname, price, offerprice, stock, description, rating, status, salestatus, picture)values(?,?,?,?,?,?,?,?,?,?,?)", [req.body.categoryid, req.body.subcategoryid, req.body.productname, req.body.price, req.body.offerprice, req.body.stock, req.body.description, req.body.rating, req.body.status, req.body.salestatus, req.file.filename], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ result: false })
        }
        else {
            return res.status(200).json({ result: true })
        }

    })
});

router.get('/display_all_products', function (req, res, next) {
    pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as scn from products P", function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            console.log(req.body)
            return res.status(200).json({ data: result })
        }

    })
});

router.post('/display_products_by_subcategory', function (req, res, next) {
    pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as scn from products P where P.subcategoryid=?",[req.body.subcategoryid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            return res.status(200).json({ data: result })
        }

    })
});

router.post('/edit_products_data', function (req, res, next) {
    pool.query("update products set categoryid=?, subcategoryid=?, productname=?, price=?, offerprice=?, stock=?, description=?, rating=?, status=?, salestatus=? where productid=?", [req.body.categoryid, req.body.subcategoryid, req.body.productname, req.body.price, req.body.offerprice, req.body.stock, req.body.description, req.body.rating, req.body.status, req.body.salestatus, req.body.productid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ status: false })
        }
        else {
            return res.status(200).json({ status: true })
        }

    })
});

router.post('/delete_products_data', function (req, res, next) {
    pool.query("delete from products where productid=?", [req.body.productid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ status: false })
        }
        else {
            return res.status(200).json({ status: true })
        }

    })
});

router.post('/update_picture',upload.single('picture'), function(req, res, next) {
    console.log("FILE:",req.file)
pool.query("update products set picture=? where productid=?",[req.file.filename,req.body.productid],function(error,result){
if(error){
    console.log(error)
return res.status(500).json({result:false})
}
else{
    return res.status(200).json({result:true})
}

})
});






module.exports = router;