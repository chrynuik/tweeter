/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tweetData) {

    var tweetTime = Math.floor((Date.now() - tweetData.created_at) / (1000*60*60*24));
    var tweetText = escape(tweetData.content.text);
    // console.log(tweetData);

    return `<article class="tweet">
          <header>
            <img src="${tweetData.user.avatars.small}">
            <h1>${tweetData.user.name}</h1>
            <div class="tweet-handle">${tweetData.user.handle}</div>
          </header>
          <main>
            ${tweetText}
          </main>
          <footer>
            <div class="time">
              ${tweetTime} days ago
            </div>
            <div class="icons">
              <a href="#" class="flag"><i class="fa fa-flag" aria-hidden="true"></i></a>
              <a href="#" class="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></a>
              <a href="#" class="love"><i class="fa fa-heart" aria-hidden="true"></i></a>
            </div>
          </footer>
        </article>`
  }

  function renderTweets(data) {
    data.forEach(function(tweetData) {
      $('#tweets-container').append(createTweetElement(tweetData));
    })
  };

  function handleNewTweet(event){
    event.preventDefault();
    const $form = $(this);
    // console.log($form.serialize());
   // $.ajax ({
   //  type: 'POST',
   //  url: '/',
   //  data: $form.serialize
   // })

   //.done(renderTweets(data));
    // .done(() => {
    //   const type = $form.find('input[name="text"]').val();
    //   $('#tweets-container').prepend(createTweetElement($form))
    // })
    // console.log(createTweetElement(tweetData));
  }

  const $form = $('#new-tweet');

  $form.on('submit', handleNewTweet);

  function loadTweets() {
    $.getJSON('/tweets')
      .done ((tweets) => {
        console.log(tweets);
      })
      .done ((tweets) => {
        renderTweets(tweets);
      })
  }

  loadTweets();
});

