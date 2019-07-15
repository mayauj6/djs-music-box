function playIntoYou(){
  var intoYou = new Audio("./songs/IntoYou.wav");
  intoYou.play();
  }

function playConscious(){
  var conscious = new Audio("./songs/Conscious.wav");
  conscious.play();
  }

function playLovingYou(){
  var lovingYou = new Audio("./songs/lovingYou.wav");
  lovingYou.play();
  }

function playMolasses(){
  var molasses = new Audio("./songs/Molasses.wav");
  molasses.play();
  }

function playVessels(){
  var vessels = new Audio("./songs/Vessels.wav");
  vessels.play();
  }

  $(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });
  
