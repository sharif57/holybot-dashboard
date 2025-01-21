import { ConfigProvider } from "antd";
import { mainTheme } from "../../utils/antTheme";

const ThemeProvider = ({ children }) => {
  return <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
