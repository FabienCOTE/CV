window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("mooveSlide1").className = "slideInLeft animated";
    document.getElementById("mooveSlide1").style.display = "block";
  } else {
    document.getElementById("mooveSlide1").style.display = "none";
  }

  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    document.getElementById("mooveSlide2").className = "slideInRight animated";
    document.getElementById("mooveSlide2").style.display = "block";
  } else {
    document.getElementById("mooveSlide2").style.display = "none";
  }

  if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
    document.getElementById("mooveSlide3").className = "slideInLeft animated";
    document.getElementById("mooveSlide3").style.display = "block";
  } else {
    document.getElementById("mooveSlide3").style.display = "none";
  }

  if (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900) {
    document.getElementById("mooveSlide4").className = "slideInRight animated";
    document.getElementById("mooveSlide4").style.display = "block";
  } else {
    document.getElementById("mooveSlide4").style.display = "none";
  }

  if (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 5200) {
    document.getElementById("mooveSlide5").className = "slideInLeft animated";
    document.getElementById("mooveSlide5").style.display = "block";
  } else {
    document.getElementById("mooveSlide5").style.display = "none";
  }

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").className = "lightSpeedIn animated";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").className = "lightSpeedOut animated";

    function miseEnAttente() {
      setTimeOut(function(){document.getElementById("myBtn").style.display = "none";}, 2000)
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
