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
import Tweet from "./tweet/Tweet";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

const Tweets: React.FC = () => {
  const [tweet, setTweet] = useState<string[]>([]);
  const [active, setActive] = useState<boolean>(false);

  const handleChange = async (e: any) => {
    const len = e.target.value.length;
    // console.log(len);

    await setTweet(e.target.value);
    await (len > 0 ? setActive(true) : setActive(false));
  };

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
            <TextareaAutosize
              name="tweet"
              id="sendTweet"
              className="rgl-20"
              placeholder="What's happening?"
              maxLength={250}
              onChange={handleChange}
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
                <button className={`rgl-15 ${active ? "active" : ""}`}>
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </main>
  );
};

export default Tweets;
