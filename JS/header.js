window.addEventListener('scroll', function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "40px";
    document.getElementById("header").style.background = "rgb(255,255,255,.4)";
  } else {
    document.getElementById("header").style.height = "80px";
    document.getElementById("header").style.background = "rgb(255,255,255,1)";
  }
});
