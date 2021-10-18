import { useState } from "react";
import Feed from "./components/Feed/feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Tweets from "./components/Tweets/Tweets";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const theme = useState<string>("#FC7D3F");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Sidebar />
        <Tweets />
        <Feed />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
