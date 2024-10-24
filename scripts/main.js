/*document.querySelector("body").onclick = function () {
    alert("Ouch! Stop poking me!");
  };

  function multiply(num1, num2) {
    var result = num1 * num2;
    return result;

};

console.log(multiply(0.5, 3));  
*/

let myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
      myImage.setAttribute("src", "images/Google_Chrome_icon.png");
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  };


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
  
  
  myButton.onclick = function() {
    setUserName();
  }