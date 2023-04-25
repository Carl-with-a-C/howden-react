import Buttons from "./components/Buttons";
import SearchBar from "./components/SearchBar";
import Gateway from "./components/Gateway";
import BannerCarousel from "./components/BannerCarousel";
import BannerImage from "./components/BannerImage";
import Training from "./components/Training";
import MediaTextCTA from "./components/MediaTextCTA";

function App() {
  return (
    <div className="App">
      <Buttons />
      <SearchBar />
      <Gateway />
      <BannerCarousel />
      <BannerImage />
      <Training />
      <MediaTextCTA />
    </div>
  );
}

export default App;
