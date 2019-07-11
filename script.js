let currentQuestionIndex = 0;
let score = 0;

function showQuestion (q) {
// console.log(q);
  if(currentQuestionIndex > 9) {
      displayScore();
  } else {
  $('.question').show();

  // let questionNumber = currentQuestionIndex+1;
  $('.questionNumber').text(currentQuestionIndex+1);

  $('.question-text').text(q.question);

  $($('input[name=choice]')[0]).val(q.choices[0]);
  $('.choiceOne-option').text(q.choices[0]);

  $($('input[name=choice]')[1]).val(q.choices[1]);
  $('.choiceTwo-option').text(q.choices[1]);

  $($('input[name=choice]')[2]).val(q.choices[2]);
  $('.choiceThree-option').text(q.choices[2]);

  $($('input[name=choice]')[3]).val(q.choices[3]);
  $('.choiceFour-option').text(q.choices[3]);

  $($('input[name=choice]')[0]).prop('checked', false);
  $($('input[name=choice]')[1]).prop('checked', false);
  $($('input[name=choice]')[2]).prop('checked', false);
  $($('input[name=choice]')[3]).prop('checked', false);

  }
}

// function displayScore(){
//     $(".question").hide();
//     $(".end-quiz").show();
//     $(".end-score").text("You scored: " +score + '/10');
//     if(score >= 8){
//         $('.comment').text("YOU ARE A CINEFILE!")
//     }

// }

function displayScore(){
    $(".question").hide();
    $(".end-quiz").show();
    $(".end-score").text("You scored: " +score + '/10');
    if(score >= 8){
        $('.comment').text("YOU ARE A CINEFILE!")
    } else if(score < 8){
        $('.comment').text("YOU FAILED THE MOVIE QUIZ")
    }
}


function checkAnswer(answer, index) {

  let question = dataStore[currentQuestionIndex];
  let correctAnswer = question.correctAnswer;

  $('.question').hide();
  $('.continue').show();

  if(answer == correctAnswer){ 
    score = score + 1;
    $('.usersScore').text(score);
    $('.continue-message').text('CORRECT ANSWER!');
    $('.correction').hide();
  } else {
    $('.continue-message').text('WRONG ANSWER!');
    $('.correction').show();
    $('.correction').text('The correct answer is: ' + correctAnswer);
   }

}


function startQuiz(){
  $('.start-button').on('click', function() {
    $('.start-quiz').hide();
    showQuestion(dataStore[currentQuestionIndex]);
  });

  $('.retake-button').click(function(){
      window.location.reload();
  })

  $('.applogo').click(function(){
      window.location.reload();
  })

  $('.nextButton').on('click', function(){
    $('.continue').hide();
    $('.question').show();
    currentQuestionIndex = currentQuestionIndex + 1;
    showQuestion(dataStore[currentQuestionIndex]);
  });


  $('form').on('submit', function(event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();    
    
    if((typeof answer) == 'undefined'){
        alert('Select answer!');
    } else {
        checkAnswer(answer, currentQuestionIndex);
    }
  });
  
}

$(startQuiz)//this envokes the jQuery actions upon loading the page.