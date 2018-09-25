window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("mooveSlide1").className = "slideInLeft animated";
      document.getElementById("mooveSlide1").style.display = "block";
      } else {
      document.getElementById("mooveSlide1").style.display = "none";
      }

    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      document.getElementById("mooveSlide2").className = "slideInRight animated";
      document.getElementById("mooveSlide2").style.display = "block";
      } else {
      document.getElementById("mooveSlide2").style.display = "none";
      }

    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
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
    }
