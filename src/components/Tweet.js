import React from 'react'

const Tweet = props => {
  let text = props.text
  let name = props.user.name
  let screenName = props.user.screen_name
  let profileImageURL = props.user.profile_image_url
  let retweetCount = props.retweetCount
  let favoriteCount = props.favoriteCount
  let tweetMediaURL = ""
   if (props.entities.media) {
     tweetMediaURL = props.entities.media[0].media_url

   }

  let tweetDisplayURL = ""
  if (props.entities.media) {
    tweetDisplayURL = props.entities.media[0].display_url

  }
  if (tweetDisplayURL != "") {
    text = props.text.replace(tweetDisplayURL, "")
  }

  let favoritedFlag;
  if ( props.favorited) {
      favoritedFlag = "favorite"}


  let retweetedFlag;
  if (props.retweeted) {
    retweetedFlag = "retweeted"
  }

  let requested = props.requested
  let date = new Date(+props.timestampMs)
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
    <div className="tweet">
      <div className="profileImage">
        <img src={profileImageURL} className="profilePic" />
      </div>
      <p>{name} @ {screenName} * {month} {day} </p>
      <span className = "tweetContent">
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
