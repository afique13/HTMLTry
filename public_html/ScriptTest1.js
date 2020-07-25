/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    //innerHTML writes HTML code to the HTML file
    document.getElementById("demo").innerHTML = "Fun with JavaScript";
//    window.alert("JavaScript Alert");
    document.getElementById("var").innerHTML  = "The answer for x + y = " + z;
}

function myFunction(){
    document.getElementById("demo").innerHTML = "Header changed";
}

var x,y,z;
x=5;
y=6;
z = x + y;
