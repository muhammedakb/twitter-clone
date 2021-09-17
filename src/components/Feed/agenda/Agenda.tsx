import covid19 from "../../../images/covid19.jpg";
import trump from "../../../images/trump.jpg";
import sport from "../../../images/sport.jpg";
import "./agenda.scss";

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
          <div id="trends" key={index}>
            <div className="tls">
              <div className="tlst">
                <span className="rgl-14">{trend.title}</span>
                <span className="dot"></span>
                <span className="rgl-14">{trend.time}</span>
              </div>
              <div className="tlsm">
                <p className="rgl-15">{trend.content}</p>
              </div>
              <div className="tlsb rgl-14">
                Trending with <span>{`#${trend.trending}`}</span>
              </div>
            </div>
            <div className="trs">
              <img src={trend.image} alt={trend.title} />
            </div>
          </div>
        ))}
      </article>
      <footer>
        <p className="rgl-15">Show more</p>
      </footer>
    </section>
  );
}

export default Agenda;
