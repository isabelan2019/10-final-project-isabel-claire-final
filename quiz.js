//form for trivia quiz
//credit:code from simplestepscode js quiz tutorial

//if checked

var quizContainer=document.getElementById('quiz');
var submitButton=document.getElementById('submit');
var resultsContainer=document.getElementById('results');

var myQuestions=[
  {
    question: "What year did the Grammy Awards begin?",
    answers: {
      a:" 1968",
      b:" 1959",
      c:" 1976",
      d:" 1955"
    },
    correctAnswer:"b"
  },
  {
    question: "Which of the following bands is the only band to receive a Grammy Legend Award?",
    answers:{
      a:" The Beatles",
      b:" The Bee Gees",
      c:" The Beach Boys",
      d:" The Rolling Stones"
    },
    correctAnswer:"b"
  },
  {
    question: "Who holds the record for most Grammys won?",
    answers: {
      a:" Stevie Wonder",
      b:" Beyonce",
      c:" Quincy Jones",
      d:" George Solti"
    },
    correctAnswer:"d"
  },
  {
    question: "Who is the youngest solo artist to win Album of the Year?",
    answers: {
      a:" Adele",
      b:" Alanis Morisette",
      c:" Taylor Swift",
      d:" Lauryn Hill"
    },
    correctAnswer:"c"
  },
  {
    question: "Which male holds the record for winning the most Grammys in one night?",
    answers: {
      a:" Eric Clapton",
      b:" Quincy Jones",
      c:" Michael Jackson",
      d:" Bruno Mars"
    },
    correctAnswer:"c"
  },
  {
    question: "_______ has won Record, Album, and Song of the Year all in one night on two separate occasions.",
    answers: {
      a:" Michael Jackson",
      b:" Paul Simon",
      c:" Bruno Marcs",
      d:" Adele"
    },
    correctAnswer:"d"
  },
  {
    question: "Who had the most amount of nominations at the 61st Annual Grammy Awards (in 2019)?",
    answers: {
      a:" Kendrick Lamar",
      b:" Childish Gambino",
      c:" Kanye West",
      d:" Kacey Musgraves"
    },
    correctAnswer:"a"
  },
  {
    question: "Which of the following won Record of the Year in 2015?",
    answers: {
      a:" Can't Feel My Face",
      b:" Blank Space",
      c:" Uptown Funk",
      d:" Thinking Out Loud"
    },
    correctAnswer:"c"
  },
  {
    question: "Who won Best New Artist in 2011?",
    answers: {
      a:" Justin Bieber",
      b:" Esperanza Spalding",
      c:" Drake",
      d:" Mumford & Sons"
    },
    correctAnswer:"b"
  },
  {
    question: "Who hosted the 60th Annual Grammy Awards in 2018?",
    answers: {
      a:" Jimmy Fallon",
      b:" Jimmy Kimmel",
      c:" Ellen DeGeneres",
      d:" James Corden"
    },
    correctAnswer:"d"
  }
];
function renderQuiz(questions,quizContainer,resultsContainer,submitButton){
  document.getElementById('results').className='';
  function renderQuestions(questions,quizContainer){
    var output=[];
    var answers;
    for (var i=0; i<questions.length;i++){
      answers=[];
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ':'
            + questions[i].answers[letter]
            + '</label>'
        );
      }
      output.push(
        '<div class="slide">'+
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
        +'</div>'
      );
    }
    quizContainer.innerHTML=output.join('');
  }

  function renderResults(questions,quizContainer,resultsContainer){
    var answerContainers=quizContainer.querySelectorAll('.answers');
    var userAnswer='';
    var numCorrect=0;
    for (var i=0;i<questions.length;i++){
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if (userAnswer===questions[i].correctAnswer){
        numCorrect++;
        answerContainers[i].style.color="green";
      }
      else{
        answerContainers[i].style.color="red";
      }
    }
    if(numCorrect>=5){
    resultsContainer.innerHTML="Congratulations! You got " + numCorrect+' questions out of ' + questions.length +" correct."+ " You're ready to take on this year's Grammy's." ;
  }
  else{
    resultsContainer.innerHTML="Oh no! You got " + numCorrect+' questions out of ' + questions.length +" correct."+ " Maybe you should tune into this year's Grammy's and brush up on your trivia.";
  }
  document.getElementById('results').className="finished";
  }
  renderQuestions(questions,quizContainer);
  submitButton.onclick=function(){
    renderResults(questions,quizContainer,resultsContainer);
  }
}
renderQuiz(myQuestions,quizContainer,resultsContainer,submitButton);

//transition from sitepoint
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");

var currentSlide=0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide===0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide===slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}
showSlide(0);

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
