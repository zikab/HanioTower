$(document).ready(function(){
  setColor('#00','blue');
  setColor('#10','pink');
  setColor('#20','green');
  $("#1").hover(function(){
    $(this).css("background-color", "#FFEE7F");
    zero();
    setColor('#22','blue');
    setColor('#10','pink');
    setColor('#20','green');
    }, function(){
    $(this).css("background-color", "#ABF7FF");
  });
  $("#2").hover(function(){
    zero();
    $(this).css("background-color", "#FFEE7F");
    setColor('#22','blue');
    setColor('#21','pink');
    setColor('#20','green');
    }, function(){
    $(this).css("background-color", "#ABF7FF");
  });
  $("#3").hover(function(){
    zero();
    $(this).css("background-color", "#FFEE7F");
    setColor('#11','blue');
    setColor('#21','pink');
    setColor('#20','green');

    }, function(){
    $(this).css("background-color", "#ABF7FF");
  });

  $("#4").hover(function(){
    zero();
    $(this).css("background-color", "#FFEE7F");
    setColor('#11','blue');
    setColor('#21','pink');
    setColor('#22','green');
  }, function(){
    $(this).css("background-color", "#ABF7FF");
  });
  $("#5").hover(function(){
    zero();
    $(this).css("background-color", "#FFEE7F");
    setColor('#20','blue');
    setColor('#21','pink');
    setColor('#22','green');
    }, function(){
    $(this).css("background-color", "#ABF7FF");
  });
  $("#6").hover(function(){
    zero();
    $(this).css("background-color", "#FFEE7F");
    setColor('#20','blue');
    setColor('#12','pink');
    setColor('#22','green');
    }, function(){
    $(this).css("background-color", "#ABF7FF");
  });
  $("#7").hover(function(){
    zero();
    $(this).css("background-color", "#FFEE7F");
    setColor('#02','blue');
    setColor('#12','pink');
    setColor('#22','green');
    }, function(){
    $(this).css("background-color", "#ABF7FF");
  });    
});

function setColor(location,color){
  console.log(location+" "+color);
  if(color.toUpperCase()=="BLUE"){
    $(location).html('<div style="background: url(disk1.png); background-repeat: no-repeat; background-size: 100% 100%; height: 50px "></div>');
  }else if(color.toUpperCase()=="PINK"){
    $(location).html('<div style="background: url(disk2.png); background-repeat: no-repeat; background-size: 100% 100%; height: 50px"></div>');
  }else if(color.toUpperCase()=="GREEN"){
    $(location).html('<div style="background: url(disk3.png); background-repeat: no-repeat; background-size: 100% 100%; height: 50px"></div>');
  }
}

function zero(){
  $('#00').html('<div></div>');
  $('#01').html('<div></div>');
  $('#02').html('<div></div>');
  $('#10').html('<div></div>');
  $('#11').html('<div></div>');
  $('#12').html('<div></div>');
  $('#20').html('<div></div>');
  $('#21').html('<div></div>');
  $('#22').html('<div></div>');
}