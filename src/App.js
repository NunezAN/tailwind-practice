import "./App.css";
import NftPreview from "./components/NftPreview";
import QrCode from "./components/QrCode";
import Rating from "./components/Rating";
import StatsPreview from "./components/StatsPreview";
import ThreePreviewCard from "./components/ThreePreviewCard";

function App() {
  return (
    <div className="App bg-white w-full min-h-screen flex">
      {/* <StatsPreview/> */}
      <ThreePreviewCard />
    </div>
  );
}

export default App;
