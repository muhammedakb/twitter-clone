import { createContext } from "react";

const ThemeContext = createContext<any>(["", () => {}]);

export default ThemeContext;
