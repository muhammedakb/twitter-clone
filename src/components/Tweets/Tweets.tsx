import {
  PopularTweets,
  Image,
  Gif,
  Survey,
  Emoji,
  Plan,
} from "../../icons/icons";
import "./tweets.scss";
import pp from "../../images/pp.jpg";
import Tweet from "./Tweet";

const Tweets: React.FC = () => {
  return (
    <main id="tweets-view">
      <header id="home">
        <div className="h-top">
          <h2 className="rgl-19">Home</h2>
          <PopularTweets />
        </div>
        <div className="send-tweet">
          <div className="stl">
            <img src={pp} alt="" />
          </div>
          <div className="str">
            <textarea
              name="tweet"
              id="sendTweet"
              className="rgl-20"
              placeholder="What's happening?"
              maxLength={250}
            />
            <div className="strb">
              <div className="strbl">
                <Image />
                <Gif />
                <Survey />
                <Emoji />
                <Plan />
              </div>
              <div className="strbr">
                <button className="rgl-15">Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* component or inline ? */}
      <Tweet />
    </main>
  );
};

export default Tweets;
