var urls = [
  'https://media.giphy.com/media/aLxbovz7HMGEo/giphy.gif',
  'https://media.giphy.com/media/Wk1rllg1L8as/giphy.gif',
  'https://media.giphy.com/media/ePw2IQqEFV7eU/giphy.gif',
  'https://media.giphy.com/media/10v5aHuvJTP4ZO/giphy.gif',
  'https://media.giphy.com/media/SxXKRsI6QG3nO/giphy.gif',
  'https://media.giphy.com/media/9sTq642uasr8A/giphy.gif',
  'https://media.giphy.com/media/jYuztlPSK8Fdm/giphy.gif',
  'https://j.gifs.com/XDpXpk.gif',
  'https://j.gifs.com/qxLpoR.gif',
  'https://j.gifs.com/W6oKjg.gif',
  'https://raw.githubusercontent.com/whodotcom/logos/master/backg.png',
]

function goToQuestion(number) {
  if (number === 1) {
    $('#start').hide();
  } else {
    $('#question' + (number - 1)).hide();
  }

  $('body').css('background-image', 'url(' + urls[number - 1] + ')')

  $('#question' + number).show()

  $('#rightAnswer' + number).click(function() {
    goToQuestion(number + 1);
  });
  $('#wrongAnswer' + number + '1').click(function() {
    goToWrong(number)
  });
  $('#wrongAnswer' + number + '2').click(function() {
    goToWrong(number)
  });
};

function goToWrong(number) {
  $('#question' + number).hide();
  $('#wrong').show();
  $("<p>You scored " + (number - 1) + ".</p>").insertAfter("#wrongtext");

};

function goToStart() {
  $('#wrong').hide();
  $('#start').show();
}

$('document').ready(function() {
  $('#beginQuizbutton').click(function() {
    goToQuestion(1);
  });
});
