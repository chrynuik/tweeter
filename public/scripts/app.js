/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants <script>alert('Vulnerable')</script>"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tweetData) {

    var tweetTime = Math.floor((Date.now() - tweetData.created_at) / (1000*60*60*24));
    var tweetText = escape(tweetData.content.text);
    console.log(tweetData);

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

  function renderTweets() {
    data.forEach(function(tweetData) {
      $('#tweets-container').append(createTweetElement(tweetData));
    })
  };

  function handleNewTweet(event){
    event.preventDefault();
    const $form = $(this);
    console.log($form.serialize());
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

  renderTweets(data);
});

