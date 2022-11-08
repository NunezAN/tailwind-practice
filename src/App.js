import "./App.css";
import ApparelLanding from "./components/ApparelLanding";
import Faq from "./components/Faq";
import NftPreview from "./components/NftPreview";
import QrCode from "./components/QrCode";
import Rating from "./components/Rating";
import SignUp from "./components/SignUp";
import StatsPreview from "./components/StatsPreview";
import ThreePreviewCard from "./components/ThreePreviewCard";

function App() {
  return (
    <div className="App bg-red-400 w-full min-h-screen flex">
      {/* <StatsPreview/> */}
      {/* <ThreePreviewCard /> */}
      {/* <Faq/> */}
      {/* <ApparelLanding/> */}
      <SignUp />
    </div>
  );
}

export default App;
