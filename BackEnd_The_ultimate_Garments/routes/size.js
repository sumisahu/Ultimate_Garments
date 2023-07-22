var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload = require('./multer')

router.post('/add_new_size', function(req, res, next) {
    
pool.query("insert into size(categoryid, subcategoryid, productid, size)values(?,?,?,?)",[req.body.categoryid,req.body.subcategoryid,req.body.productid,req.body.size],function(error,result){
if(error){
    console.log(error)
return res.status(500).json({result:false})
}
else{
    return res.status(200).json({result:true})
}

})
});


router.get('/display_all_size', function (req, res, next) {
    pool.query("select SI.*,(select C.categoryname from category C where C.categoryid=SI.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=SI.subcategoryid) as scn,(select P.productname from products P where P.productid=SI.productid) as pn from size SI", function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            return res.status(200).json({ data: result })
        }

    })
});

router.post('/display_size_by_products', function (req, res, next) {
    pool.query("select SI.*,(select C.categoryname from category C where C.categoryid=SI.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=SI.subcategoryid) as scn,(select P.productname from products P where P.productid=SI.productid) as pn from size SI where SI.productid=?",[req.body.productid], function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [] })
        }
        else {
            if(result.length>0){
                size = JSON.parse(result[0].size)
            return res.status(200).json({ data:size })
            
        }else{
            return res.status(200).json({ data:[] })
        }
        }

    })
});


router.post('/edit_size_data', function(req, res, next) {
   
    pool.query("update size set categoryid=?, subcategoryid=?, productid=?, size=? where sizeid=?",[req.body.categoryid,req.body.subcategoryid,req.body.productid,req.body.size,req.body.sizeid],function(error,result){
    if(error){
        console.log(error)
    return res.status(500).json({status:false})  
    }
    else{
        return res.status(200).json({status:true})
    }
    
    })

    });

    router.post('/delete_size_data', function (req, res, next) {
        pool.query("delete from size where sizeid=?", [req.body.sizeid], function (error, result) {
            if (error) {
                console.log(error)
                return res.status(500).json({ status: false })
            }
            else {
                return res.status(200).json({ status: true })
            }
    
        })
    });
    



module.exports = router;