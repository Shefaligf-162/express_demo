const express=require('express');
const app=express();
app.get('/',(req,res)=>{
	res.send('Hello World!!hskdksjdl');
});
app.get('/api/courses',(req,res)=>{
	res.send([1,2,3,5,6]);
});
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}...`));