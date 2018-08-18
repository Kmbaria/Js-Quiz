  function calculateScore(){

  var correctAnswers = ['a','b','a'];
  var score = 0;
  var point = 10;
  var answer = [];

  for(var n = 0; n < correctAnswers.length; n++){
      if(correctAnswers[n] == jQuery("input[name='question"+(n+1)+"']:checked").val()){
        score = score + point;
        console.log('question'+(n+1)+': correct');
      }else{
        score = score + 0;
        console.log('question'+(n+1)+': wrong');
      }
    }

    console.log('your score is: '+score);

    //lets display the score in the div element
    jQuery('.result').html('Your Score: '+score);

    //show element since we've hid it in css
    jQuery('.result').show();

    // hide element after 5 sec
    jQuery('.result').slideUp(5000);
  }
