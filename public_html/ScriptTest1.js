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
    document.getElementById("name").innerHTML = person.fullName() + "'s ID number is "+person.id;
    document.getElementById("list").innerHTML = text;
    document.querySelector('h2').innerHTML = localStorage.getItem('count');
};

function myFunction(){
    let heading = document.querySelector('h1');
    if(heading.innerHTML === 'Fun with JavaScript')
        heading.innerHTML = "Header changed";
    else
        heading.innerHTML = "Fun with JavaScript";
}


// /i specifies every case insensitive occurence of the string and /g finds every occurence of the string


var ans = multiplyFunction(3,5);

function multiplyFunction(para1, para2){
    return para1*para2;
}

function displayAnswer(){
    document.getElementById("function-example").innerHTML = "The answer is "+ans;
}

var count=0;

if(!localStorage.getItem('count')){
    localStorage.setItem('count',0);
}

function counter(){
    let count = localStorage.getItem('count');
    count++;
    document.querySelector('h2').innerHTML = count;
    localStorage.setItem('count', count);
}

document.addEventListener('DOMContentLoaded', function(){
   document.getElementById('counter-button').onclick = counter; 
//   
//   setInterval(counter,1000);
});

document.addEventListener('DOMContentLoaded', function(){
    
   document.querySelectorAll('.color-button').forEach(function(button){
       button.onclick = function() {
       document.querySelector('h1').style.color = button.dataset.color;
        };
   });
   
});

var x,y,z;
x=5;
y=6;
z = x + y;

var person = {
  firstName : "Afiq",
  lastName : "Azizul",
  id : 6969,
  fullName : function() {
      return this.firstName + " " + this.lastName;
  }
};

var phones, html_text;
phones = ["iPhone","Huawei","Samsung","OnePlus"];
text = "<ul class='seven'>";
phones.forEach(listFunction);
text += "</ul>";

function listFunction(phones){
    text += "<li>" + phones + "</li>";
}

//Arrays in JavaScript work similarly to linked lists in Java. The size of an array in JavaScript does not need to be specified. To add a new element, use array_name.push(value)
