//countdown timer
var finalDate=new Date("Jan 26, 2020 17:00:00").getTime();
var x = setInterval(function(){
  var todayDate=new Date().getTime();
  var difference =finalDate - todayDate;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hrs "
  + minutes + " Min " + seconds + " Secs ";
}, 1000);
