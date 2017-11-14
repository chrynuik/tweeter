$(document).ready(function (){
  $('.new-tweet').find('textarea').on('keyup', this, function(){
    var maxLength = 140;
    var length = $(this).val().length;
    var count = maxLength - length;
    var counter = $(this).nextAll('.counter');
    counter.text(count);
    if (count < 0) {
     counter.addClass('invalid-count');
    } else {
      counter.removeClass('invalid-count');
    }
  });
});