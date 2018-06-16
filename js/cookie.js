
var score = 0;


function init() {
  var cookie= document.getElementsByClassName('cookie')[0];
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = score_div.innerHTML + score;
  
  
  //Array of Colors to Choose and Counter for Array
  var colors = ["#01BC91", "#E00B6D","#ff4fe3","#75AFA5","#607BBF","#F4324E", "#ffd800","#06E5B8","#2AFE79","#C48708","#FF0573", "#C7E41A", "#a6ff6b", "#F702A1","#4fbbff", "#B2CAA0","#7832E6","#0556CB","#00f2ff","#f40573","#e8ecff","#00d0ff","#ffa100","#08e4d5","#00ff26","#C6FBF7","#89ffdf","#f2c4ff","#96FF87"];
  var count  =0;
  
  cookie.addEventListener('click',function() {
    //Changes Score and Displays
    score++;
    var score_div = document.getElementsByClassName('score')[0];
    score_div.innerHTML = 'Score: ' + score;

    //Changes Background Color
    document.body.style.backgroundColor = colors[count];
   
    //Goes to Next Color in Array
    count++;
    if(count > 27)
    {
      count = 0;
    }

    //Checks if One of "Benchmark Scores" have been reached and changes image 
    if(score >= 50)
    {
      document.getElementsByClassName('cookie1')[0].src = "imgs/cookie.png";
    }
    else if(score >= 40)
    {
      document.getElementsByClassName('cookie1')[0].src = "imgs/oreo.png";
    }
    else if(score >= 30)
    {
      document.getElementsByClassName('cookie1')[0].src = "imgs/icecream.png";
    }
    else if(score >= 20)
    {
      document.getElementsByClassName('cookie1')[0].src = "imgs/frosted.png";
    }
    else if(score >= 10)
    { 
      document.getElementsByClassName('cookie1')[0].src = "imgs/m&m.png";
    } 

  })
}

init();