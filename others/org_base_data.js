// SCHEMA:
// 		name : {type : String},
//     contact : {type : String},
//     city : {type : String},
//     address : {type : String},
//     type : {type : String},
//     desc : {type : String},
//     members : {type : Number}


//Insert queries
 db.org.insert({
 	"name":"Stree Shakti",
 	"contact":"+91 924507821",
 	"address": " Roopena Agrahara",
 	"type" :" Women NGO",
 	"desc" : "Help women fighting with domestic violence",
 	"members" : 9,
 	"imgSrc" :"img/ngo1.jpeg"
 });
  db.org.insert({
 	"name":"Second Innings",
 	"contact":"+91 924507821",
 	"address": " India gate ",
 	"type" : " Sr. Citizen NGO",
 	"desc" : "Help Seniors to spend their retired life",
 	"members" : 28,
 	"imgSrc" :"img/ngo2.jpeg"
 });
  db.org.insert({
 	"name":"Nanhe kadam",
 	"contact":"+91 924507823",
 	"address": "Gym Khana",
 	"type" :" Childrens home NGO",
 	"desc" : "Help childresn left unattended",
 	"members" : 34,
 	"imgSrc" :"img/ngo3.jpeg"
 });



/*items_need:
    item_catg:
    item_need_count:
    item_name:
    org_name:
    item_available:
    item_donated:
    item_imgSrc:*/
    
//Insert queries
 db.items_need.insert({
 	"item_name":"tshirts",
 	"item_need_count":12,
 	"item_catg": "clothes",
 	"org_name" :"Second Innings",
 	"item_imgSrc" :"img/clothes.jpg",
 	"item_desc":"ABCD"
 });
 db.items_need.insert({
 	"item_name":"pants",
 	"item_need_count":9,
 	"item_catg": "clothes",
 	"org_name" :"Second Innings",
 	"item_imgSrc" :"img/clothes.jpg",
 	"item_desc":"EFGH"
 });
  db.items_need.insert({
 	"item_name":"Kannada Books",
 	"item_need_count":9,
 	"item_catg": "books",
 	"org_name" :"Nanhe kadam",
 	"item_imgSrc" :"img/books.jpg",
 	"item_desc":"5th Standard State syllabus books"
 });
  db.items_need.insert({
 	"item_name":"English Books",
 	"item_need_count":9,
 	"item_catg": "books",
 	"org_name" :"Nanhe kadam",
 	"item_imgSrc" :"img/books.jpg",
 	"item_desc":"5th Standard English State syllabus books"
 });


db.items_need.aggregate(
   [
     { $group : { _id : "$item_catg", items: { $push: "$item_name" } } }
   ]
);

db.items_need.aggregate(
   [
     { $group : { _id : "$item_catg", items: { $push: "$$ROOT" } } }
   ]
);

db.items_need.aggregate(
   [
     { $group : { _id : {"catg": "$item_catg","catg_img_src":"$item_imgSrc"}, items: { $push: "$$ROOT" } } }
   ]
);

