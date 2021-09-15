import pp from "../../images/pp.jpg";
import tw from "../../images/tw.jpg";
import { Answer, ReTweet, Like, Share } from "../../icons/icons";
import "./tweet.scss";

const Tweet: React.FC = () => {
  return (
    <main id="result">
      <section className="r-l">
        <img src={pp} alt="" />
      </section>
      <section className="r-r">
        <header className="rgl-15">
          <h3>Devon Lane</h3>
          <p className="username">@marcelosalomao</p>
          <span> - </span>
          <p className="time">23s</p>
        </header>
        <main className="rgl-15">Is this big enough for you?</main>
        <div className="image">
          <img src={tw} alt="" />
        </div>
        <footer>
          <div className="answer">
            <Answer />
            <span>497</span>
          </div>
          <div className="retweet">
            <ReTweet />
            <span>12,3 K</span>
          </div>
          <div className="like">
            <Like />
            <span>62,3 K</span>
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
