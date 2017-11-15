/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){
  var tweetData = {
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
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  function createTweetElement(tweet) {

    // var $tweetImage = $('<img>').attr('src', );
    // var $tweetTitle = $('<h1>').text(tweetData.user.name);
    // var $tweetHeader = $('<header>').append($tweetImage).append($tweetTitle);
    // var $tweet = $("<article>").addClass("tweet").append($tweetHeader);

    //return $tweet;
    var tweetTime = Math.floor((Date.now() - tweetData.created_at) / (1000*60*60*24));
    return `<article class="tweet">
          <header>
            <img src="${tweetData.user.avatars.small}">
            <h1>${tweetData.user.name}</h1>
            <div class="tweet-handle">${tweetData.user.handle}</div>
          </header>
          <main>
            ${tweetData.content.text}
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


  console.log(createTweetElement(tweetData));

  // Test / driver code (temporary)
  // to see what it looks like
  $('#tweets-container').append(createTweetElement(tweetData)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});