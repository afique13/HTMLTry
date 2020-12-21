"use strict";

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
  // innerHTML writes HTML code to the HTML file
  document.getElementById('demo').innerHTML = 'Fun with JavaScript'; //    window.alert("JavaScript Alert");

  document.getElementById('var').innerHTML = "The answer for x + y = ".concat(z);
  document.getElementById('name').innerHTML = "".concat(person.fullName(), "'s ID number is ").concat(person.id);
  document.getElementById('list').innerHTML = text;
  document.querySelector('#count-num').innerHTML = localStorage.getItem('count');
};

function myFunction() {
  var heading = document.querySelector('h1');

  if (heading.innerHTML === 'Fun with JavaScript') {
    heading.innerHTML = 'Header changed';
  } else {
    heading.innerHTML = 'Fun with JavaScript';
  }
} // /i specifies every case insensitive occurence of the string and /g finds every occurence of the string


var ans = multiplyFunction(3, 5);

function multiplyFunction(para1, para2) {
  return para1 * para2;
}

function displayAnswer() {
  document.getElementById('function-example').innerHTML = "The answer is ".concat(ans);
}

var count = 0; // If localStorage is null, then set count = 0

if (!localStorage.getItem('count')) {
  localStorage.setItem('count', 0);
}

function counter() {
  var count = localStorage.getItem('count');
  count++;
  document.querySelector('#count-num').innerHTML = count;
  localStorage.setItem('count', count);
}

function reactCounter() {
  var obj = new Count();
  obj.count();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('counter-button').onclick = reactCounter; //
  //   setInterval(counter,1000); // 1000 milliseconds

  document.querySelectorAll('.color-button').forEach(function (button) {
    button.onclick = function () {
      document.querySelector('h1').style.color = button.dataset.color;
    };
  });

  document.querySelector('.text1-button').onclick = function () {
    var textID = this.dataset.text; //       history.pushState({textID: textID},"",'HideText');

    showPage(this.dataset.text);
  }; //   document.getElementById("var").innerHTML  = "The answer for x + y = " + z;

});
document, addEventListener('click', function (event) {
  var element = event.target;

  if (element.className === 'child-button') {
    element.parentElement.style.animationPlayState = 'running';
    element.parentElement.addEventListener('animationend', function () {
      element.parentElement.remove();
    });
  }
});

function showPage(text) {
  console.log(text);
  document.querySelector("#".concat(text)).style.display = 'block';
} // history.replaceState({textID: 'text1'},'','');
// Press back button to return to previous state
// Still needs work since function only works when you press the "Show Text" twice


window.onpopstate = function (event) {
  console.log(event);
  hidePage(event.state.textID);
};

function hidePage(text) {
  if (text !== null) {
    document.querySelector("#".concat(text)).style.display = 'none';
  }
}

var x;
var y;
var z;
x = 5;
y = 6;
z = x + y;
console.log(z);
var person = {
  firstName: 'Afiq',
  lastName: 'Azizul',
  id: 6969,
  fullName: function fullName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  }
};
var phones;
var html_text;
phones = ['iPhone', 'Huawei', 'Samsung', 'OnePlus'];
text = "<ul class='seven'>";
phones.forEach(listFunction);
text += '</ul>';

function listFunction(phones) {
  text += "<li>".concat(phones, "</li>");
} // Arrays in JavaScript work similarly to linked lists in Java. The size of an array in JavaScript does not need to be specified. To add a new element, use array_name.push(value)