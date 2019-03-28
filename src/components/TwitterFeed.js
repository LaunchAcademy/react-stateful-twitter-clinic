import React, {Component} from 'react';
import Tweet from './Tweet'
class TwitterFeed extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTweet: null
    }
    this.resetSelectedTweet = this.resetSelectedTweet.bind(this)
  }

  resetSelectedTweet(id){
    if (this.state.selectedTweet === id) {
      this.setState({selectedTweet:null})
    } else {
this.setState({selectedTweet:id})
    }
  }

  render() {
    let tweets = this.props.data.map(tweet => {
      let className
      if (tweet.id_str === this.state.selectedTweet) {
        className = "selected"
      } else {
        className = ""
      }
      let handleClick = () => {
        this.resetSelectedTweet(tweet.id_str)
      }

      return(
      <Tweet
        key={tweet.id_str}
        id={tweet.id_str}
        tweet={tweet}
        className={className}
        handleClick={handleClick}
      />
    )
    })
    return (
      <div>{tweets}</div>
    )
  }
}

export default TwitterFeed;
