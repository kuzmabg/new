(function () {
  var timerArr = [3000, 4000, 3000, 3000, 4000];  //The time for single frame in order.
  var i = 0;
  var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.diy-slideshow figure'), // a collection of all of the slides, caching for performance    
    numItems = $items.length; // total number of slides
  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function () {
    var itemToShow = Math.abs(counter % numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
    // remove .show from whichever element currently has it 
    [].forEach.call($items, function (el) {
      el.classList.remove('show');
    });
    // add .show to the one item that's supposed to have it
    $items[itemToShow].classList.add('show');
  };


  function autoplay(i) {
    var tout = setTimeout(function () {
      if (i < timerArr.length) { i++; } else { /*poslednji();*/ return false; }
      counter++; showCurrent(); autoplay(i);
    }, timerArr[i]);
    return tout;
  }

  function poslednji() {
    if(stopAutoPlayBrB)return false;
    video.play();
    video.muted = true;

    document.getElementById("diy-slideshow").style.display = 'none';
    document.getElementById("ssbg").style.display = 'none';
    document.getElementById("btn").style.display = 'none';
  }

 autoplay(0);
 window['stopAutoPlayBrB']=false;
})();