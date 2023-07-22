var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer');

router.get('/display_all_category',function(req, res, next) {
    pool.query("select * from category",function(error,result){
     if(error)
     { console.log(error)
      return res.status(500).json({data:[]}) 
     }
     else
     { console.log("RESULT:",result)
       return res.status(200).json({data:result}) 
     }
    })
})

router.get('/display_all_banners',function(req, res, next) {
  pool.query("select * from banners",function(error,result){
   if(error)
   { console.log(error)
    return res.status(500).json({data:[]}) 
   }
   else
   { console.log("RESULT:",result)
     return res.status(200).json({data:result[0]})
   }
  })
})

router.post('/display_all_subcategory',function(req, res, next) {
    pool.query("select * from subcategory where categoryid=?",[req.body.categoryid],function(error,result){
     if(error)
     { console.log(error)
      return res.status(500).json({data:[]}) 
     }
     else
     { console.log("RESULT:",result)
       return res.status(200).json({data:result}) 
     }
    })
  })


  router.post('/display_all_products_salestatus', function (req, res, next) {
  pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname from products P where P.salestatus=?",[req.body.salestatus], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});

  router.post('/display_all_subcategory_priority', function (req, res, next) {
  pool.query("select * from subcategory where bannerpriority=?",[req.body.priority], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});


router.post('/fetch_all_products_by_subcategory', function (req, res, next) {
  pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as categoryname,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as subcategoryname from products P where P.subcategoryid=?",[req.body.subcategoryid], function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          return res.status(200).json({ data: result })
      }

  })
});
  

router.post('/display_all_size_by_productid', function (req, res, next) {
  pool.query("select SI.*,(select C.categoryname from category C where C.categoryid=SI.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=SI.subcategoryid) as scn,(select P.productname from products P where P.productid=SI.productid) as pn from size SI where SI.productid=?",[req.body.productid],function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          
          return res.status(200).json({ data: result })
      }

  })
});

router.post('/display_all_color_by_size', function (req, res, next) {
  pool.query("select * from color where productid=? and sizeid=?",[req.body.productid,req.body.sizeid],function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          
          return res.status(200).json({ data: result })
      }

  })
});

router.post('/display_all_color_by_productid', function (req, res, next) {
  pool.query("select * from color where productid=?",[req.body.productid,req.body.sizeid],function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          
          return res.status(200).json({ data: result })
      }

  })
});
  

router.post('/fetchallpictures', function (req, res, next) {
  pool.query("select * from productpictures where productid=?",[req.body.productid],function (error, result) {
      if (error) {
          console.log(error)
          return res.status(500).json({ data: [] })
      }
      else {
          
          return res.status(200).json({ data: result })
      }

  })
});



router.post('/check_user_mobilenumber', function (req, res, next) {
    pool.query("select * from users where mobilenumber=?",[req.body.mobilenumber],function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [],status:false })
        }
        else {
            if(result.length==1)
            return res.status(200).json({ data: result[0],status:true })
            else
            return res.status(200).json({ data: [],status:false })
        }
  
    })
  });
  
  router.post('/submit_userdata', function (req, res, next) {
    pool.query("insert into  users  (mobilenumber,emailid,firstname,lastname,dateofbirth,gender)values(?,?,?,?,?,?)",[req.body.mobilenumber,req.body.emailid,req.body.firstname,req.body.lastname,req.body.dateofbirth,req.body.gender],function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ message:'Server Error',status:false})
        }
        else {
            return res.status(200).json({  message:'Submitted',status:true })
                  }
  
    })
  });


   
  router.post('/submit_useraddress', function (req, res, next) {
    pool.query("insert into  useraddress  (userid,pincode,town,city,state,address)values(?,?,?,?,?,?)",[req.body.userid,req.body.pincode,req.body.town,req.body.city,req.body.state,req.body.address],function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ message:'Server Error',status:false})
        }
        else {
            
            return res.status(200).json({  message:'Submitted',status:true })
                  }
  
    })
  });



  router.post('/check_user_address', function (req, res, next) {
    pool.query("select * from useraddress where userid=?",[req.body.userid],function (error, result) {
        if (error) {
            console.log(error)
            return res.status(500).json({ data: [],status:false })
        }
        else {
            if(result.length>=1)
            return res.status(200).json({ data: result,status:true })
            else
            return res.status(200).json({ data: [],status:false })
        }
  
    })
  });


module.exports=router