"use strict";

// output elements

const theDate = document.getElementById("date");
const datePicker = document.querySelector('input[type="date"]');

//save h1 text
const template = theDate.innerText;

// event handler
function showDate() {
  buildDate(new Date(datePicker.value));
}

//useful resuable sfunction
function buildDate(d) {
  theDate.innerText = `${template} ${d.toDateString()}`;
}

// register event handler
datePicker.addEventListener('change', showDate);

//re-use above function to set deafult
buildDate(new Date ());

// colours
const theValue = document.getElementById("the-value");
const colorPicker = document.getElementById('colour');

//event handler
function setColor() {
  theValue.style.backgroundColor = colorPicker.value;
}

//register veent handler
colorPicker.addEventListener('input', setColor);

//initialise colour
setColor();

//ranges
const rangePicker = document.querySelector('input[type="range"]');

//event handler
function rangeAction() {
  theValue.innerText = rangePicker.value;
  theValue.style.width = `${rangePicker.value}%`;
}

//register event handler
rangePicker.addEventListener('input', rangeAction);
