var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

router.post('/add_new_subcategory', upload.single('icon'), function (req, res, next) {
    console.log("BODY:", req.body)
    console.log("FILE:", req.file)
    pool.query("insert into subcategory(categoryid,subcategoryname,icon,bannerpriority)values(?,?,?,?)", [req.body.categoryid, req.body.subcategoryname, req.file.filename,req.body.bannerpriority], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ result: false })
        }
        else {
            return res.status(200).json({ result: true })
        }

    })
});



router.get('/display_all_subcategory', function (req, res, next) {
    pool.query("select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid) as cn from subcategory S", function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            return res.status(200).json({ data: result })
        }

    })
});

router.post('/display_subcategory_by_category', function (req, res, next) {
    pool.query("select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid) as cn from subcategory S where S.categoryid=?", [req.body.categoryid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            return res.status(200).json({ data: result })
        }

    })
});

router.post('/edit_subcategory_data', function (req, res, next) {
    pool.query("update subcategory set categoryid=?, subcategoryname=?, bannerpriority=? where subcategoryid=?", [req.body.categoryid, req.body.subcategoryname, req.body.bannerpriority, req.body.subcategoryid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ status: false })
        }
        else {
            return res.status(200).json({ status: true })
        }

    })
});

router.post('/delete_subcategory_data', function (req, res, next) {
    pool.query("delete from subcategory where subcategoryid=?", [req.body.subcategoryid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ status: false })
        }
        else {
            return res.status(200).json({ status: true })
        }

    })
});

router.post('/update_icon', upload.single('icon'), function (req, res, next) {
    console.log("FILE:", req.file)
    pool.query("update subcategory set icon=? where subcategoryid=?", [req.file.filename, req.body.subcategoryid], function (error, result) {
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