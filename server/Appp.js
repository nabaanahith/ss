const express = require("express");
const app = express();
const mongoose = require("mongoose");
const joi = require("joi");
const uuidv1 = require("uuid/v1");
const schema =require('./modules/userdata')
const Instagram = require('instagram-web-api')
const sharp=require('sharp')
const FileCookieStore = require('tough-cookie-filestore2')
const fileupload = require("express-fileupload");
var cors = require('cors');


 mongoose.connect(
   "mongodb://apissss:12345naba54321@ds031867.mlab.com:31867/try",
   { useNewUrlParser: true }
 );

//  To Check if the connection works fine or not
mongoose.connection.on("connected", () => {
  console.log("\x1b[36m%s\x1b[0m", "mongo has been connected...");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileupload());

app.use(express.static("./upimg"));
app.use(express.static("./upfile"));
//for input form

app.get('/',(req,res)=>{
  let f=true
  var interval = setInterval(function() {
    // execute your request here
  schema.find({}).then(ressz=>{
   
    (ressz.map((item,i)=>{
    
 let r=`${item.datem} ${item.datet} GMT+0300 (Arabic Standard Time)`

 let rt=Date().valueOf();
 console.log(r , '\n',rt);
 //console.log("itttt",item._id);
 
 
if(rt==r){
 f=false
console.log('ok');

  const client = new Instagram({ username:item.username, password:item.password ,FileCookieStore})    
     doHomework( alertFinished);
    

     
    function doHomework(callback) {
      console.log("item.img",item.img);
      
    //crop img
     sharp(item.img)
      .resize(100,100)
      .toFile('namee.jpg', function(err) {
    console.log(err);
          console.log('\n',typeof(photo))
         
   })
  
   //back to post this img
    callback();
    }   //through this function
      function alertFinished(){
       client
    .login()
   .then(() => {
  //   client
  //    .getProfile()
  //  .then(console.log)
  
  client.uploadPhoto({photo:'namee.jpg', caption: item.texteara }).then(data=>{//name.jpg always the name of new img 
      console.log("data",data);
      
      schema.remove({ _id:item._id}, function(err) {
        if (!err) {
              console.log("item._id)");
             // res.redirect('http://localhost:8000/');
           
              
        }
        else {
                message.type = 'error';
              
        }
    });
    }).catch(e=>{
        console.log("ee1",e);
     
  
   })
       
     }).catch(err=>{
       console.log(err);
     
     })
    }
  }
  else{
    console.log('no');
   // res.redirect('http://localhost:8000')
    
  }
 

    })
    )
  
  }
  )
 //return
  
}, 1000);


})


//now from post man use this way to post img 
app.post("/", (req, res) => {
  
  //schema vakidation
  const validating = validationSchema(req.body);
  //  If the validation fails
  if (validating.error) {
    res.status(400).send(validating.error.details[0].message);
  } else {
//we the img uploaded his info will returned
    var img = req.files.img;
    console.log(img);
    
    var name1 = img.name;
    var bookImgUud = uuidv1();
    const bookImgPath = "./upload" + bookImgUud + name1;//path where i want save img uploaded by user
    var imgdb = bookImgUud + name1;
  //var x=__dirname +imgdb+'.jpg'

    img.mv(bookImgPath);//img saved
  //  console.log('img',img.data,'\n','name1',name1,'\n','bookImgPath',bookImgPath,'\n','imgdb',imgdb,'\n',)
  const  username=req.body.username
password =req.body.password
let f=true;
  new schema({

    img:bookImgPath,
    username:req.body.username,
    password :req.body.password,
    datet:req.body.datet,
    datem:req.body.datem,
    texteara:req.body.texteara,

  })
    .save()
    .then(result => {
      // console.log(
      //   result
      // );
      res.redirect('http://localhost:8000/');
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
  }
})

var port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`the server connect on http://localhost:${port}`)
);
  
function validationSchema(result) {
  var schema = joi.object().keys({

   img: joi.object(),
    username:joi.string(),
    password:joi.string(),
    datet:joi.string(),
    datem:joi.string(),
    texteara:joi.string()
  });
  return joi.validate(result, schema);
}



module.exports = app;









//=======================