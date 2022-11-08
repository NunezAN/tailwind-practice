import "./App.css";
import Faq from "./components/Faq";
import NftPreview from "./components/NftPreview";
import QrCode from "./components/QrCode";
import Rating from "./components/Rating";
import StatsPreview from "./components/StatsPreview";
import ThreePreviewCard from "./components/ThreePreviewCard";

function App() {
  return (
    <div className="App bg-purple-600 w-full min-h-screen flex">
      {/* <StatsPreview/> */}
      {/* <ThreePreviewCard /> */}
      <Faq/>
    </div>
  );
}

export default App;
