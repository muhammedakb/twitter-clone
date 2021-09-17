import Agenda from "../agenda/Agenda";
import Follow from "../who-to-follow/Follow";
import "./feed.scss";

function Feed() {
  return (
    <main id="feed">
      <div id="input">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Twitter"
          className="rgl-15"
        />
      </div>

      <Agenda />
      <Follow />
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
