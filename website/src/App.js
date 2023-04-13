import './App.css';
import Coverpage from './Pages/Coverpage';
import gtag from './Components/gtag';
import ReactGA from "react-ga";


function App() {
ReactGA.initialize("G-GNK4HP7LE8");
ReactGA.pageview("/");
ReactGA.pageview("/about");
ReactGA.pageview("/portfolio");
ReactGA.pageview("/resume");
ReactGA.pageview("/contact");
ReactGA.pageview("/experience");

  return (
    <>
    <Coverpage />
    </>
  );
}
export default App;
