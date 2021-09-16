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
    </main>
  );
}

export default Feed;
