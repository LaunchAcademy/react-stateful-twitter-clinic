import React from 'react'

const Tweet = props => {
  let text = props.tweet.text
  let name = props.tweet.user.name
  let screenName = props.tweet.user.screen_name
  let profileImageURL = props.tweet.user.profile_image_url
  let retweetCount = props.tweet.retweetCount
  let favoriteCount = props.tweet.favoriteCount
  let tweetMediaURL = ""
   if (props.tweet.entities.media) {
     tweetMediaURL = props.tweet.entities.media[0].media_url

   }

  let tweetDisplayURL = ""
  if (props.tweet.entities.media) {
    tweetDisplayURL = props.tweet.entities.media[0].display_url

  }
  if (tweetDisplayURL != "") {
    text = props.tweet.text.replace(tweetDisplayURL, "")
  }

  let favoritedFlag;
  if ( props.tweet.favorited) {
      favoritedFlag = "favorite"}


  let retweetedFlag;
  if (props.tweet.retweeted) {
    retweetedFlag = "retweeted"
  }

  let requested = props.tweet.requested
  let date = new Date(+props.tweet.timestampMs)
  let month = date.toLocaleString("en-us", {month: "short"})
  let day = date.getDate()

  let functionAlertReply = (event) => {
    event.preventDefault();
    alert("Reply");
  }

  let functionAlertRetweet = (event) => {
    event.preventDefault();
    alert("Retweet");
  }

  let functionAlertLike = (event) => {
    event.preventDefault();
    alert("Like");
  }

  let functionAlertMore = (event) => {
    event.preventDefault();
    alert("Favorite");

  }

  return(
    <div onClick={props.handleClick} className={`tweet ${props.className}`}>
      <div className="profileImage">
        <img src={profileImageURL} className="profilePic" />
      </div>
      <p>{name} @ {screenName} * {month} {day} </p>
      <span className = "tweetContent selected">
        {text}
      </span>

        <img src={tweetMediaURL} className="mediaPic"/>

      <div>
        <i className="fa fa-reply" onClick={functionAlertReply}></i>
        <i className="fa  fa-retweet" id={retweetedFlag} onClick={functionAlertRetweet}>{retweetCount}</i>
        <i className="fa fa-heart-o" id ={favoritedFlag} onClick={functionAlertLike}>{favoriteCount}</i>
        {/*fa-heart for filled in heart  */}
        <i className="fa fa-ellipsis-h" onClick={functionAlertMore}></i>

      </div>
    </div>
  )
}



export default Tweet;
