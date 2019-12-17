
//for the modal box (from W3 and image gallery assignment code)

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var pictures = document.getElementsByClassName("pic");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//
// When the user clicks on the button, open the modal
for (var i=0;i<pictures.length;i++){
  pictures[i].addEventListener('click',open);
}

span.addEventListener('click',close);

// function open(i){
//   var modalCollection = document.getElementsByClassName("modal");
//   console.log(modalCollection);
//   modalCollection[i].style.display="block";
// }
function open(){
  modal.style.display="block";
}
// When the user clicks on <span> (x), close the modal

function close() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//grab lyrics
//testing lyrics api
// var request = new XMLHttpRequest();
//
// request.open('GET', 'https://api.lyrics.ovh/v1/Billie Eilish/bad guy');
//
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };
//
// request.send();
//Access-Control-Allow-Origin: *;

// //testing ticketMaster

  //need to replace the attractionId or loop through
  var attractionId="K8vZ917oaP0";

  //testing by calling the function
  showEvents(attractionId);

  function showEvents(attractionId){
  var xhttp= new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
      var eventInfo = JSON.parse(this.responseText);
      console.log(eventInfo);
      renderEvents(eventInfo);
    }
    else if(this.readyState==4){
      console.log(this.responseText);
    }
  }
  xhttp.open("GET", "https://app.ticketmaster.com/discovery/v2/events?apikey=syjSxSCRp2dXGxmBOOcL7NvBs0LyiRhS&attractionId="+attractionId+"&locale=*&endDateTime=2020-01-26T22:34:00Z&countryCode=US",true);
  xhttp.send();
}

function renderEvents(eventInfo){
var events=eventInfo._embedded.events;
console.log(events);
var name;
var link;
for (var i=0;i<events.length;i++){
    //create new concert element
    var concert = document.createElement("div");
    concert.className="concert";
    //find concert name
    var name=events[i].name;
    var concertNameText=document.createTextNode(name+" ");
    var concertName=document.createElement("p");
    concertName.appendChild(concertNameText);
    concertName.className="concertName";
    //find concert time
    var time=events[i].dates.start.localDate;
    var concertTimeText=document.createTextNode(time+" ");
    var concertTime=document.createElement("p");
    concertTime.appendChild(concertTimeText);
    concertTime.className="concertTime";
    //find concert venue
    var venue=events[i]._embedded.venues[0].name;
    var concertVenueText=document.createTextNode("at " +venue+" ");
    var concertVenue=document.createElement("p");
    concertVenue.appendChild(concertVenueText);
    concertVenue.className="concertVenue";
    //find concert location
    var location=events[i]._embedded.venues[0].city.name;
    var concertLocationText=document.createTextNode("in "+location);
    var concertLocation=document.createElement("p");
    concertLocation.appendChild(concertLocationText);
    concertLocation.className="concertLocation";
    //append name, time, location, venue
    concert.appendChild(concertName);
    concert.appendChild(concertTime);
    concert.appendChild(concertVenue);
    concert.appendChild(concertLocation);
    //redirect to website
    var buyBtn=document.createElement("button");
    buyBtn.innerHTML="Buy Tickets";
    buyBtn.setAttribute("id","buy");
    var url = events[i].url;
    var popoutLink="window.location.href='"+url+";'";
    buyBtn.setAttribute("onclick",popoutLink);
    //attach to html
    document.getElementById('tmEvent').appendChild(concert);
    document.getElementById('tmEvent').appendChild(buyBtn);
  }
}


//
// var signIn = document.getElementById('spotifyL');
// signIn.addEventListener('click', signiN);
// function signiN() {
//   console.log('working');
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var todos = JSON.parse(this.responseText);
//     console.log(todos);
//   }
//   else if (this.readyState==4) {
//     console.log(this.responseText);
//   }
// };
// xhttp.open("GET", 'https://accounts.spotify.com/authorize');
// xhttp.setRequestHeader('client_id','ed2250f6a28a40f8b843a41d44cbe116');
// xhttp.setRequestHeader('response_type','code');
// xhttp.setRequestHeader('redirect_uri','https://wustlcse204.github.io/10-final-project-isabel-claire-final/nominees.html')
// xhttp.send();
// };


// var request = require('request');
// var albumURL = 'https://api.spotify.com/v1/albums/{2fYhqwDWXjbpjaIJPEfKFw}';
// var token = 'Bearer ';
// request({url:albumURL, headers:{'Authorization':token}}, function(err, res){
//   if (res){
//     var album = JSON.parse(res.body);
//     get(album);
//   }
//   else {
//     console.log('did not work');
//   }
// })
// function get(){
//   var works = document.getElementsByClassName('modal-content')[0];
//   var test = document.createElement('P');
//   test.innerHTML='it works';
//   works.appendChild(test);
// }

//
// var add = document.getElementById("add");
// add.addEventListener('click', addFunction);
// function addFunction() {
//
// var data = null;
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });
// xhr.open("PUT", "https://api.spotify.com/v1/me/tracks");
// xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
// xhr.send(data);
//
// }
//

/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

// curl -H "Authorization: Basic ZWQyMjUwZjZhMjhhNDBmOGI4NDNhNDFkNDRjYmUxMTY6N2M0MTY1NzM5MTdmNDY5MmFkMjNiZjJmNjFmZDAwNWY=" -d grant_type=authorization_code -d code=AQDW5D5El0bcJ51FwJVR8I4uTWDOIdDuFjbr5wv1N4PWOSPMPF37BMCMcm-Crzgi8Fyos6-bYSTP_xK85kY4l-80mSBEJWKz7Wbk4XGr0uNshApB5Yoz6ZT7gPLNmFyBe1B8UrvWBI_531uGdWBMiovzO2l5khG9yeVQ-6rWPhtyHjYeJ4SDZBWVAqXatoL8c5AVBMQVyB4c6BxyXSYpCYrjDP-UjauPCbduMsWN_EclDOaP2ktFWdg -d redirect_uri=https://wustlcse204.github.io/10-final-project-isabel-claire-final/ https://accounts.spotify.com/api/token
//ed2250f6a28a40f8b843a41d44cbe116:7c416573917f4692ad23bf2f61fd005f
//ZWQyMjUwZjZhMjhhNDBmOGI4NDNhNDFkNDRjYmUxMTY6N2M0MTY1NzM5MTdmNDY5MmFkMjNiZjJmNjFmZDAwNWYK
//^^encoded
 /* Load the HTTP library */
// var http = require("http");
 /* Create an HTTP server to handle responses */
 // http.createServer(function(request, response) {
 //   response.writeHead(200, {"Content-Type": "text/plain"});
 //   response.write("Hello World");
 //   response.end();
 // }).listen('https://accounts.spotify.com/authorize?client_id=ed2250f6a28a40f8b843a41d44cbe116&scopes=user-read-email&response_type=code&redirect_uri=https%3A%2F%2Fwustlcse204.github.io%2F10-final-project-isabel-claire-final%2F%0A');

//
//
// var authCode ='AQDW5D5El0bcJ51FwJVR8I4uTWDOIdDuFjbr5wv1N4PWOSPMPF37BMCMcm-Crzgi8Fyos6-bYSTP_xK85kY4l-80mSBEJWKz7Wbk4XGr0uNshApB5Yoz6ZT7gPLNmFyBe1B8UrvWBI_531uGdWBMiovzO2l5khG9yeVQ-6rWPhtyHjYeJ4SDZBWVAqXatoL8c5AVBMQVyB4c6BxyXSYpCYrjDP-UjauPCbduMsWN_EclDOaP2ktFWdg';
// var accessToken = 'BQBkI0Lu7Cn0CekJZX5_evqMVwrOgNo-nBCrppiTCFJ38_OL1_xe4C12-CzncPes9_HwWaV5K573awnGEyyNN76m0oX7KgK7FtyqNh6awJCzSopiTGq8NTrUMv_gLet1UUxG9Qch8du0o4FzeZPS';
// var client_id = 'ed2250f6a28a40f8b843a41d44cbe116'; // Your client id
// var client_secret = '7c416573917f4692ad23bf2f61fd005f'; // Your secret
// var idSecret ='ed2250f6a28a40f8b843a41d44cbe116:7c416573917f4692ad23bf2f61fd005f';
// // your application requests authorization
// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (idSecret.toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// var request;
// define(function (require) {
//     request = require('request');
// });
//
// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//
//     // use the access token to access the Spotify Web API
//     var token = 'BQBkI0Lu7Cn0CekJZX5_evqMVwrOgNo-nBCrppiTCFJ38_OL1_xe4C12-CzncPes9_HwWaV5K573awnGEyyNN76m0oX7KgK7FtyqNh6awJCzSopiTGq8NTrUMv_gLet1UUxG9Qch8du0o4FzeZPS';
//     var options = {
//       url: 'https://api.spotify.com/v1/users/jmperezperez',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });
//   }
// });
