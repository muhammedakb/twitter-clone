import React from "react";
import pp from "../../../images/pp.jpg";
import "./follow.scss";

const whoToFollow = [
  {
    image: pp,
    name: "Bessie Cooper",
    username: "alessandroveronezi",
  },
  {
    image: pp,
    name: "Jenny Wilson",
    username: "alessandroveronezi",
  },
];

function Follow() {
  return (
    <section id="whotofollow">
      <header>
        <h3 className="rgl-20">Who to follow</h3>
      </header>
      <article>
        {whoToFollow.map((follow, index) => (
          <div id="follow-result" key={index}>
            <div className="f-left">
              <img src={follow.image} alt="pp" />
            </div>
            <div className="f-mid">
              <p className="segoe-base rgl-14">{follow.name}</p>
              <p className="rgl-14">@{follow.username}</p>
            </div>
            <div className="f-right">
              <button>Follow</button>
            </div>
          </div>
        ))}
      </article>
      <footer>
        <p>Show more</p>
      </footer>
    </section>
  );
}

export default Follow;
