import Agenda from "../agenda/Agenda";
import Follow from "../who-to-follow/Follow";
import "./feed.scss";
import ThemeContext from "../../../context/ThemeContext";
import { useContext, useState } from "react";

function Feed() {
  const [theme] = useContext(ThemeContext);
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <main id="feed">
      <div id="input">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Twitter"
          className="rgl-15"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ borderColor: focus ? theme : null }}
        />
      </div>

      <Agenda theme={theme} />
      <Follow theme={theme} />
      <footer id="copy">
        <p>
          Terms of Service Privacy Policy Cookie Policy <br></br> Ads info More
          &copy; 2021 Twitter, Inc.
        </p>
      </footer>
    </main>
  );
}

export default Feed;
