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
import ReactTooltip from "react-tooltip";
import { BiWorld } from "react-icons/bi";

export interface ITweet {
  name: string;
  username: string;
  time: string | number;
  content: string | undefined;
  image?: HTMLImageElement | String | File;
  answer?: number;
  retweet?: number;
  like?: number;
}

const Tweets: React.FC = () => {
  const [result, setResult] = useState<string>();
  const [none, setNone] = useState<boolean>(true);
  const [tweet, setTweet] = useState<ITweet>({
    name: "",
    username: "",
    time: "",
    content: "",
    image: "",
    answer: 0,
    retweet: 0,
    like: 0,
  });
  const [active, setActive] = useState<boolean>(false);

  const handleChange = async (e: any) => {
    const len = e.target.value.length;
    const val = e.target.value;
    setTweet({ ...tweet });
    await setResult(val);
    await (len > 0 ? setActive(true) : setActive(false));
  };

  const sendTweet = async () => {
    await setTweet({
      name: "Muhammed Akbulut",
      username: "muhammedakb",
      time: "23s",
      content: result,
      image: "",
      answer: 0,
      retweet: 0,
      like: 0,
    });
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
              onKeyUp={handleChange}
              onFocus={() => setNone(false)}
            />
            <p className={`who-answer rgl-13 ${none ? "none" : ""}`}>
              <BiWorld /> <span>Anyone can answer</span>
            </p>
            <div className="strb">
              <div className="strbl">
                <div data-tip="Media">
                  <Image />
                </div>
                <div data-tip="GIF">
                  <Gif />
                </div>
                <div data-tip="Survey">
                  <Survey />
                </div>
                <div data-tip="Emoji">
                  <Emoji />
                </div>
                <div data-tip="Plan">
                  <Plan />
                </div>

                <ReactTooltip
                  place="bottom"
                  type="info"
                  textColor="#fff"
                  effect="float"
                />
              </div>
              <div className="strbr">
                <button
                  className={`rgl-15 ${active ? "active" : ""}`}
                  onClick={sendTweet}
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {tweet.content ? <Tweet tweet={tweet} /> : null}
    </main>
  );
};

export default Tweets;
