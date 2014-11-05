$(document).ready(function() {
  speed=20;
  $b = $("#boneco");
      
  function moveRight(){
    
  }
      
  $('#btxxxx').click(function() {
    moveRight();   
  })
  
  /*
  	left = 37
	up = 38
	right = 39
	down = 40
  */
  
  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {
     moveRight()
    }
    else if (e.keyCode == 'xxx') {
        // down arrow
    }
    else if (e.keyCode == 'yyyy') {
        // left arrow
    }
  }


});