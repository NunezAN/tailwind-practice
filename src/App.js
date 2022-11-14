import "./App.css";
import ApparelLanding from "./components/ApparelLanding";
import CardDetailsForm from "./components/CardDetailsForm";
import Faq from "./components/Faq";
import NewsHome from "./components/NewsHome";
import NftPreview from "./components/NftPreview";
import QrCode from "./components/QrCode";
import Rating from "./components/Rating";
import SignUp from "./components/SignUp";
import StatsPreview from "./components/StatsPreview";
import ThreePreviewCard from "./components/ThreePreviewCard";
import NotificationsPage from "./components/NotificationsPage";
import Advice from "./components/Advice";

function App() {
  return (
    <div className="App bg-black w-full min-h-screen flex flex-col p-2" id="yep">
      {/* <StatsPreview/> */}
      {/* <ThreePreviewCard /> */}
      {/* <Faq/> */}
      {/* <ApparelLanding/>
      <SignUp /> */}
      {/* <NewsHome /> */}
      {/* <CardDetailsForm/> */}
      {/* <NotificationsPage/> */}
      <Advice/>
    </div>
  );
}

export default App;
