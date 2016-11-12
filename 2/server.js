var express=require("express");
var app=express();
var arr=[1,2,3];
app.use(express.static("public"));
// app.get("/getdata",function  (req,res) {
// 	var name=req.query.username;
// 	var password=req.query.password;
// 	if (name==="123"&&password==="123") {
// 		res.send("成功");
// 	} else{
// 		res.send("失败");
// 	};
// })
app.get("/getdata",function  (req,res) {
	res.send(arr);
})
app.listen(80,function  () {
	console.log("11111")
})