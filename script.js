var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rightBtn = document.getElementById("rightBtn");
var defaultBtn = document.getElementById("defaultBtn");
var bottomLeftBtn = document.getElementById("bottomLeftBtn");
var bottomRightBtn = document.getElementById("bottomRightBtn");
var button = document.getElementById("button");
var copyThis = document.getElementById("copyThis");
var popup = document.getElementById("popup");

function setGradientToRight(){
  
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = "background: " + body.style.background + ";";
}

function setGradientToDefault(){
    body.style.background = "linear-gradient(" + color1.value + ", " + color2.value + ") no-repeat fixed";
    css.textContent = "background: " + body.style.background + ";";
}

function setGradientToBottomRight(){
  body.style.background = "linear-gradient(to right bottom , " + color1.value + ", " + color2.value + ") no-repeat fixed";
  css.textContent = "background: " + body.style.background + ";";
}

function setGradientToBottomLeft(){
    body.style.background = "linear-gradient(to left bottom , " + color1.value + ", " + color2.value + ") no-repeat fixed";
    css.textContent = "background: " + body.style.background + ";";
}


function defaultButton(){
  defaultBtn.classList.add("press");
  rightBtn.classList.remove("press");
  bottomLeftBtn.classList.remove("press");
  defaultBtn.classList.remove("buttonHover");
  rightBtn.classList.add("buttonHover");
  bottomLeftBtn.classList.add("buttonHover");
  bottomRightBtn.classList.add("buttonHover");
  bottomRightBtn.classList.remove("press");
}

function rightButton(){
  rightBtn.classList.add("press");
  defaultBtn.classList.remove("press");
  bottomLeftBtn.classList.remove("press");
  rightBtn.classList.remove("buttonHover");
  defaultBtn.classList.add("buttonHover");
  bottomLeftBtn.classList.add("buttonHover");
  bottomRightBtn.classList.add("buttonHover");
  bottomRightBtn.classList.remove("press");
  
}

function bottomRightButton(){
  bottomRightBtn.classList.add("press");
  defaultBtn.classList.remove("press");
  rightBtn.classList.remove("press");
  bottomLeftBtn.classList.remove("press");
  bottomRightBtn.classList.remove("buttonHover");
  defaultBtn.classList.add("buttonHover");
  rightBtn.classList.add("buttonHover");
  bottomLeftBtn.classList.add("buttonHover");
}

function bottomLeftButton(){
        bottomLeftBtn.classList.add("press");
        rightBtn.classList.remove("press");
        defaultBtn.classList.remove("press");
        bottomLeftBtn.classList.remove("buttonHover");
        rightBtn.classList.add("buttonHover");
        defaultBtn.classList.add("buttonHover");
        bottomRightBtn.classList.add("buttonHover");
        bottomRightBtn.classList.remove("press");
}

button.addEventListener("click", function(evt){
  var target = evt.target;

  if(target.id === "defaultBtn"){
    defaultButton();
    setGradientToDefault();
    color1.addEventListener("input", setGradientToDefault);
    color2.addEventListener("input", setGradientToDefault);
  }
  else if(target.id === "rightBtn"){
    rightButton();
    setGradientToRight();
    color1.addEventListener("input", setGradientToRight);
    color2.addEventListener("input", setGradientToRight);
  }
  else if(target.id === "bottomRightBtn"){
    bottomRightButton();
    setGradientToBottomRight();
    color1.addEventListener("input", setGradientToBottomRight);
    color2.addEventListener("input", setGradientToBottomRight);
  }
  else if(target.id === "bottomLeftBtn"){
    bottomLeftButton();
    setGradientToBottomLeft();
    color1.addEventListener("input", setGradientToBottomLeft);
    color2.addEventListener("input", setGradientToBottomLeft);
  }
},true)

function copyToClipboard(){
var selectText = document.getElementById("select");
if(selectText.textContent.length > 0){
  var selection = window.getSelection();
  var range = document.createRange();
      range.selectNodeContents(selectText);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      popup.classList.add("active");
}
else{
  popup.classList.remove("active");
}
}

copyThis.addEventListener("click", function(){
copyToClipboard();
})

popup.addEventListener("animationend", function(){
  popup.classList.remove("active");
})