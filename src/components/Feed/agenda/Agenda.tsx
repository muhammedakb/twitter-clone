import covid19 from "../../../images/covid19.jpg";
import trump from "../../../images/trump.jpg";
import sport from "../../../images/sport.jpg";
import React from "react";

const trends = [
  {
    title: "COVID 19",
    time: "Last night",
    content:
      "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
    trending: "covid19",
    image: covid19,
  },
  {
    title: "US news",
    time: "4h ago",
    content:
      "Parler may go offline following suspensions by Amazon, Apple and Google",
    trending: "trump",
    image: trump,
  },
  {
    title: "India",
    time: "1h ago",
    content:
      "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
    trending: "sport",
    image: sport,
  },
];

function Agenda() {
  return (
    <section id="agenda">
      <header>
        <h3 className="rgl-20">What's happening</h3>
      </header>
      <article>
        {trends.map((trend, index) => (
          <React.Fragment key={index}>
            <div className="tls">
              <div className="tlst">
                <span>{trend.title}</span>
                <span></span>
                <span>{trend.time}</span>
              </div>
              <div className="tlsm">
                <p>{trend.content}</p>
              </div>
              <div className="tlsb">
                Trending with <span>{`#${trend.trending}`}</span>
              </div>
            </div>
            <div className="trs">
              <img src={trend.image} alt="" />
            </div>
          </React.Fragment>
        ))}
      </article>
      <footer>
        <p>Show more</p>
      </footer>
    </section>
  );
}

export default Agenda;
