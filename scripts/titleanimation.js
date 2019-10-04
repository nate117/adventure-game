

function title() {
    var counter = 0;
    
    var elem = document.getElementById("mytitle"); 
    
    var myVar = setInterval(titleEffect, 5);
  
  function titleEffect() {
  
    if (counter == 50) {
      clearInterval(myVar);
    } else {
      counter++; 
      elem.style.fontSize = counter + "px"; 
    }
  }
}



    
    //Variables to check frames
    var cur = 1;
    var prev = 0;
    var loop = 0;
   //function changes the z index of image to create animation effect 
function flipshow(){
    var x = document.getElementsByClassName("flipframe");
    if(cur < 6){
        //if cur variable is less than 6 and loop less than 22 times and cur at 3 keep looping first 3 frames
        //or if greater than 23 loops stays on 3 frames
        if(loop < 22 && cur == 3 || loop > 23 && cur == 3){
            x[prev].style.zIndex = "-1";
            cur = 1;
            prev = 0;
            x[prev].style.zIndex = "0";
            console.log(x[cur].style.zIndex);
           }
        //increments the frames 
        else{
            console.log(x[prev].style.zIndex);
            x[cur].style.zIndex = "0";
            x[prev].style.zIndex = "-1";
            cur++;
            prev++;
        }
    }
    //once it reaches final frame at index 6 it restarts form first frame
    //function will loop through al frames only once and then just show flame effect frames
    else if (cur == 6){
        x[prev].style.zIndex = "-1";
        cur = 1;
        prev = 0;
        x[prev].style.zIndex = "0";
        console.log(x[cur].style.zIndex);
        
    }
    loop++;
}    

function showLink(){
    document.getElementById("playbutton").style.display = "block";
}
    setInterval(flipshow, 250);
    
    setTimeout(title, 250 * 28); 
    setTimeout(showLink, 250 * 30);
       
