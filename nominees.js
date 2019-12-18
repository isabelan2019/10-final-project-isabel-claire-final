
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
var attractionIds=[ "K8vZ9172Qo7" ,  "K8vZ917bKi0"  ,  'K8vZ9174Za7' ,  'K8vZ917G1D7' ,
'K8vZ9174WI7' ,  'K8vZ917G4W0' ,  "K8vZ9173ea7" ,  'K8vZ9172ZIV'  ,  'K8vZ9174Za7'  ,
'K8vZ917Go7V'  ,  'K8vZ9174WI7'  ,  'K8vZ917popf'  ,  'K8vZ9173ea7'  ,  'K8vZ9172ZIV'  ,
'K8vZ9178ha7'  ,   "K8vZ9175Tr0"  ,  "K8vZ9172Qo7"  ,  "K8vZ9174Za7"  ,  "K8vZ917G4W0"  ,
"K8vZ9174WI7" ,  "K8vZ9174tq7"  ,   "K8vZ917bKi0"  ,  "K8vZ9173ea7"  ,  "K8vZ917KjPf"  ,
"K8vZ9174Za7"  ,  "K8vZ91792N0"  ,  'K8vZ917bKi0'  ,  'K8vZ9173ea7'  ,  'K8vZ9174027'  ,
'K8vZ917pJy7'  ,  'K8vZ917oV9f'  ,  'K8vZ917oaP0' ];
var indexToId=0;
function open(){
  modal.style.display="block";
  indexToId=this.getAttribute("data-index");
  showEvents(indexToId);
}


// When the user clicks on <span> (x), close the modal
function close() {
  modal.style.display = "none";
  document.getElementById('tmEvent').innerHTML =" ";

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
//testing by calling the function
//showEvents(attractionId);

function showEvents(indexToId){

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
  xhttp.open("GET", "https://app.ticketmaster.com/discovery/v2/events?apikey=syjSxSCRp2dXGxmBOOcL7NvBs0LyiRhS&attractionId="+attractionIds[indexToId]+"&locale=*&endDateTime=2020-01-26T22:34:00Z",true);
  xhttp.send();
}

function renderEvents(eventInfo){
  if (eventInfo._embedded!=undefined){
    var events=eventInfo._embedded.events;
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
      buyBtn.setAttribute("onclick", popoutLink);
      //attach to html
      document.getElementById('tmEvent').appendChild(concert);
      document.getElementById('tmEvent').appendChild(buyBtn);
    }
  }
  else {
    var noConcerts = document.createElement('p');
    var nothingText = document.createTextNode("No concerts coming up! Check back in a few months.");
    noConcerts.appendChild(nothingText);
    document.getElementById('tmEvent').appendChild(noConcerts);
  }
}
