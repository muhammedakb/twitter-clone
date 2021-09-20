import pp from "../../../images/pp.jpg";
import tw from "../../../images/tw.jpg";
import { Answer, ReTweet, Like, Share } from "../../../icons/icons";
import "./tweet.scss";
import { ITweet } from "../Tweets";

interface ITweetProps {
  tweet: ITweet;
}
const Tweet: React.FC<ITweetProps> = (props) => {
  const { tweet } = props;

  return (
    <main id="result">
      <section className="r-l">
        <img src={pp} alt="" />
      </section>
      <section className="r-r">
        <header className="rgl-15">
          <h3>{tweet.name}</h3>
          <p className="username">@{tweet.username}</p>
          <span></span>
          <p className="time">{tweet.time}</p>
        </header>
        <main className="rgl-15">{tweet.content}</main>
        {tweet.image ? (
          <div className="image">
            <img src={tw} alt="" />
          </div>
        ) : (
          <></>
        )}

        <footer>
          <div className="answer">
            <Answer />
            <span className="numbers rgl-13">{tweet.answer}</span>
          </div>
          <div className="retweet">
            <ReTweet />
            <span className="numbers rgl-13">{tweet.retweet}</span>
          </div>
          <div className="like">
            <Like />
            <span className="numbers rgl-13">{tweet.like}</span>
          </div>
          <div className="share">
            <Share />
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Tweet;
