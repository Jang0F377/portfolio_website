import HeaderComponent from "./components/HeaderComponent";
import AboutComponent from "./components/AboutComponent";
import FloatingNavComponent from "./components/FloatingNavComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ContactComponent from "./components/ContactComponent";


function App() {
  return (
    <div className="bg-main h-full bg-background-primary">
        <HeaderComponent/>
        <FloatingNavComponent/>
        <AboutComponent/>
        <ExperienceComponent/>
        <PortfolioComponent/>
        <ContactComponent/>
    </div>
  );
}

export default App;
