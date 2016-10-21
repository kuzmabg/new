greenbtn.addEventListener("click", Show1);
redbtn.addEventListener("click", Show2);

answeryes.addEventListener("click", GotoSite);
answerno.addEventListener("click", GotoSite);

function Show1() {   
    document.getElementById("yes_no").className += " pt-page-rotateCubeRightOut";
    document.getElementById("answeryes").style.visibility = "visible";
    document.getElementById("answeryes").className += " pt-page-rotateCubeRightIn";
}

function Show2() { 
    document.getElementById("yes_no").className += " pt-page-rotateCubeLeftOut";
    document.getElementById("answerno").style.visibility = "visible";
    document.getElementById("answerno").className += " pt-page-rotateCubeLeftIn";
}

function GotoSite() {
    window.location.assign("https://www.google.com");
}