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


// Paul Rozzelee text carousel
var onlinePaulContainerInside = document.getElementsByClassName('onlinePaulContainerInside');
var littleSquare = document.getElementsByClassName('littleSquare');
littleSquare[0].addEventListener('click',(e)=>{
  onlinePaulContainerInside[0].style.top = '0vw'
  littleSquareClear(e);
});
littleSquare[1].addEventListener('click',(e)=>{
  onlinePaulContainerInside[0].style.top = '-15vw'
  littleSquareClear(e);
});
littleSquare[2].addEventListener('click',(e)=>{
  onlinePaulContainerInside[0].style.top = '-30vw'
  littleSquareClear(e);
});

function littleSquareClear(e) {
  for (var i = 0; i < littleSquare.length; i++) {
    littleSquare[i].style.background = 'black';
  }
  e.target.style.background = 'white';
}

window.onload = function(){

}