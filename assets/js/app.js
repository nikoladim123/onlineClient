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
var paulRozzeelleContainer = document.getElementsByClassName('paulRozzeelleContainer');
var littleSquare = document.getElementsByClassName('littleSquare');
var success = document.getElementsByClassName('success');

littleSquare[0].addEventListener('click',(e)=>{
  littleSquareClear(e);
  paulRozzeelleContainer[0].style.marginLeft = '0%'
  success[0].style.color = 'rgb(255, 222, 0)';
});
littleSquare[1].addEventListener('click',(e)=>{
  littleSquareClear(e);
  paulRozzeelleContainer[0].style.marginLeft = '-100%'
  success[0].style.color = '#7c6ef4';
});
littleSquare[2].addEventListener('click',(e)=>{
  littleSquareClear(e);
  paulRozzeelleContainer[0].style.marginLeft = '-200%'
  success[0].style.color = '#db3723';
});

function littleSquareClear(e) {
  for (var i = 0; i < littleSquare.length; i++) {
    littleSquare[i].style.background = 'black';
  }
  e.target.style.background = 'white';
}

window.onload = function(){

}
