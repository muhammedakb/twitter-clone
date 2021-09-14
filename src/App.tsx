import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Tweets from "./components/Tweets/Tweets";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Tweets />
      <Feed />
    </div>
  );
}

export default App;
