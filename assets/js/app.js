var divInsideButton = document.getElementsByClassName('divInsideButton')[0];
var watchNowButton = document.getElementsByClassName('watchNowButton')[0];
var getStartedNow = document.getElementsByClassName('getStartedNow');

// get started now morph window
getStartedNow[0].addEventListener('click',()=>{
  getStartedNow[0].style.width = '50vw';
});

getStartedNow[0].addEventListener('mouseleave',()=>{
  getStartedNow[0].style.width = '5.613vw';
});

// watch no button
watchNowButton.addEventListener('mouseenter',function(){
  divInsideButtonOn();
});

watchNowButton.addEventListener('mouseleave',function(){
  divInsideButtonOff();
});

function divInsideButtonOn() {
  divInsideButton.style.width = '100%';
}

function divInsideButtonOff() {
  divInsideButton.style.width = '0%';
}

window.onload = function(){

}
