import "./App.css";
import ApparelLanding from "./components/ApparelLanding";
import Faq from "./components/Faq";
import NftPreview from "./components/NftPreview";
import QrCode from "./components/QrCode";
import Rating from "./components/Rating";
import StatsPreview from "./components/StatsPreview";
import ThreePreviewCard from "./components/ThreePreviewCard";

function App() {
  return (
    <div className="App bg-black w-full min-h-screen flex">
      {/* <StatsPreview/> */}
      {/* <ThreePreviewCard /> */}
      {/* <Faq/> */}
      <ApparelLanding/>
    </div>
  );
}

export default App;
