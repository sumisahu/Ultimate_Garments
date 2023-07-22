var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

router.post('/add_new_color', function(req, res, next) {
    
    pool.query("insert into color(categoryid, subcategoryid, productid, sizeid, color)values(?,?,?,?,?)",[req.body.categoryid,req.body.subcategoryid,req.body.productid,req.body.sizeid,req.body.color],function(error,result){
    if(error){
        console.log(error)
    return res.status(500).json({result:false})
    }
    else{
        return res.status(200).json({result:true})
    }
    
    })
    });


    router.get('/display_all_color', function (req, res, next) {
        pool.query("select CL.*,(select C.categoryname from category C where C.categoryid=CL.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=CL.subcategoryid) as scn,(select P.productname from products P where P.productid=CL.productid) as pn from color CL", function (error, result) {
            if (error) {
                console.log(error)
                return res.status(500).json({ data: [] })
            }
            else {
                return res.status(200).json({ data: result })
            }
    
        })
    });


    router.post('/edit_color_data', function(req, res, next) {
        pool.query("update color set categoryid=?, subcat   egoryid=?, productid=?, sizeid=?, color=? where colorid=?",[req.body.categoryid,req.body.subcategoryid,req.body.productid,req.body.sizeid,req.body.color,req.body.colorid],function(error,result){
        if(error){
            console.log(error)
        return res.status(500).json({status:false})
        }
        else{
            return res.status(200).json({status:true})
        }
        
        })
    
        });
    
        router.post('/delete_color_data', function (req, res, next) {
            pool.query("delete from color where colorid=?", [req.body.colorid], function (error, result) {
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