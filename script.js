
const a = '<head>    <meta charset="utf-8"/>    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    <title>contacts</title>    <link rel="stylesheet" href="styles.css">  </head><body><div class="page">  <div class="page-header cf">    <h2>Contacts</h2>     <h3>Total: 30</h3>  </div>  '
const b = '  <!-- Add pagination links in this section -->  <div class="pagination">'
const c = '<!-- pagination adapted from https://www.w3schools.com/howto/howto_css_pagination.asp -->  </div></div></body>'

var table;

var table = require("./data.json");

    var text = ["","",""];
    for (let j = 0; j<3; j++){
        for (let i = 0; i<10; i++){

            var name = table.results[i+10*j].name.first + " " + table.results[i+10*j].name.last;
            var email = table.results[i+10*j].email;
            var reg = table.results[i+10*j].registered.date;
            var pic = table.results[i+10*j].picture.thumbnail;

            text[j] += '<li class="contactItem cf">' + '<div class="contactDetails">' +
            '<img class="avatar" src='  + pic + '><h3>' + name
            + '</h3><span class="email">'
            + email + '</span></div><div class="joinedDetails">' +
            '<span class="date"> Joined on ' + reg +'</span></div></li>';
    }}

    text[0] = '<ul class="contactList"></ul>' + text[0] + '</ul>';
    text[1] = '<ul class="contactList"></ul>' + text[1] + '</ul>';
    text[2] = '<ul class="contactList"></ul>' + text[2] + '</ul>';

    var p = ["","",""];
    var ac = ["","",""];
    var back = "";
    var forw = "2";

    for (let i =0;i<3;i++){

        ac[i] = 'class="active"'
        if(i == 2) back = 1;
        if(i == 0) forw = 1;

        p[i]='<a href="/'+back+'">&laquo;</a>' +   
        '<a href="/" '+ac[0]+'>1</a>'  +  
        '<a href="/1" '+ac[1]+'>2</a>' +
        '<a href="/2" '+ac[2]+'>3</a>' +
        '<a href="/'+forw+'">&raquo;</a>';

        ac = ["","",""];
        back = "";
        forw = "2";
    }


    text[0]= a + text[0] + b + p[0] + c;
    text[1]= a + text[1] + b + p[1] + c;
    text[2]= a + text[2] + b + p[2] + c;

    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(__dirname));
    
    app.get("/", function(req,res){
        res.setHeader('Content-type','text/html')
        res.send(text[0]);
    })

    app.get("/1", function(req,res){
        res.setHeader('Content-type','text/html')
        res.send(text[1]);
    })


    app.get("/2", function(req,res){
        res.setHeader('Content-type','text/html')
        res.send(text[2]);
    })

    app.listen(3000, function(){console.log("Server running")})

