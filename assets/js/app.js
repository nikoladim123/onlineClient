var divInsideButton = document.getElementsByClassName('divInsideButton')[0];
var watchNowButton = document.getElementsByClassName('watchNowButton')[0];
var getStartedNow = document.getElementsByClassName('getStartedNow');
var getStartedNowParagraph = document.getElementsByClassName('getStartedNowParagraph');
var closeGetStartedButtonInside = document.getElementsByClassName('closeGetStartedButtonInside');
var sectionTeamsWeHelped = document.getElementsByClassName('sectionTeamsWeHelped');

// get started now morph window
getStartedNow[0].addEventListener('click',()=>{
  getStartedNow[0].style.width = '100%';
  getStartedNow[0].style.background = 'white';
  getStartedNowParagraph[0].style.color = 'white';
});

// getStartedNow[0].addEventListener('mouseleave',()=>{
//   closeGetStartedFun();
// });

closeGetStartedButtonInside[0].addEventListener('click',(e)=>{
    e.stopPropagation();
    closeGetStartedFun();
});

function closeGetStartedFun() {
  getStartedNow[0].style.background = 'rgba(255,255,255,0.4)';
  getStartedNow[0].style.width = '5.613vw';
  getStartedNowParagraph[0].style.color = 'rgb(255,213,51,1)';
}

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

function littleSquareClear(e,ev) {
  for (var i = 0; i < littleSquare.length; i++) {
    littleSquare[i].style.background = 'black';
  }
  if(e !== null){
    e.target.style.background = 'white';
  }else{
    ev.style.background = 'white';
  }
  // ev.style.background = 'white';
  // console.log(ev);
};

// text car autoscroll
var textCarInterval = 0;
setInterval(function () {
  if(textCarInterval === 0){
    paulRozzeelleContainer[0].style.marginLeft = '0%'
    littleSquareClear(null,littleSquare[textCarInterval]);
    textCarInterval = 1;
  }else if(textCarInterval === 1){
    paulRozzeelleContainer[0].style.marginLeft = '-100%'
    littleSquareClear(null,littleSquare[textCarInterval]);
    textCarInterval = 2;
  }else{
    paulRozzeelleContainer[0].style.marginLeft = '-200%'
    littleSquareClear(null,littleSquare[textCarInterval]);
    textCarInterval = 0;
  }
}, 6000);


// arrow to top
var arrowToTop = document.getElementsByClassName('arrowToTop');
function arrowToTopFun() {
  if(sectionTeamsWeHelped[0].getBoundingClientRect().top - window.innerHeight /1.2 <= 0 ){
    arrowToTop[0].style.opacity = '0.31'
    arrowToTop[0].style.pointerEvents = 'auto'
  }else{
    arrowToTop[0].style.opacity = '0'
    arrowToTop[0].style.pointerEvents = 'none'
  }
}


window.addEventListener('scroll',()=>{
  arrowToTopFun();
})
