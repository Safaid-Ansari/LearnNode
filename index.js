const express = require('express');
const port = process.env.PORT || 7000;
const app = express();


app.get('/',(req,res)=>{
  res.send('<h1>Hello Safaid-Ansari</h1>')
})
app.listen(port,(err)=>{
    if(err){
        console.log(`fetching the details ${err}`);


    }

    console.log(`Running our server on port No ${port}`);
})