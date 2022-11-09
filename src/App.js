import "./App.css";
import ApparelLanding from "./components/ApparelLanding";
import Faq from "./components/Faq";
import NewsHome from "./components/NewsHome";
import NftPreview from "./components/NftPreview";
import QrCode from "./components/QrCode";
import Rating from "./components/Rating";
import SignUp from "./components/SignUp";
import StatsPreview from "./components/StatsPreview";
import ThreePreviewCard from "./components/ThreePreviewCard";

function App() {
  return (
    <div className="App bg-white w-full min-h-screen flex flex-col" id="yep">
      {/* <StatsPreview/> */}
      {/* <ThreePreviewCard /> */}
      {/* <Faq/> */}
      {/* <ApparelLanding/>
      <SignUp /> */}
      <NewsHome />
    </div>
  );
}

export default App;
