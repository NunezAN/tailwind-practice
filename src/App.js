import "./App.css";
import mobileImage from "./images/image-product-mobile.jpg";
import deskImage from "./images/image-product-desktop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App bg-[#f5eae4] w-full h-screen flex ">
      <div className="flex flex-col h-[90%] md:h-[35%] md:w-[60%] md:flex-row md:m-auto my-auto mx-4 bg-white rounded-2xl overflow-hidden max-w-3xl">
        <picture className="md:w-[50%] md:h-full h-[40%]">
          <source media="(min-width: 768px)" srcset={deskImage} />
          <img
            className="md:w-full md:h-full h-full"
            src={mobileImage}
            alt=""
          />
        </picture>
        <div className="md:w-[50%] h-[60%] md:h-full flex flex-col p-6 text-left justify-between">
          <h4 className="text-xl text-gray-500 tracking-widest uppercase">
            Perfume
          </h4>
          <h1 className="text-4xl font-bold">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-lg text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p>
            <span className="text-4xl font-bold text-green-800 mr-4">
              $149.99
            </span>
            <span className="line-through text-sm text-gray-500 align-[6px]">
              $169.99
            </span>
          </p>
          <button className="bg-green-800 hover:bg-slate-500 text-white font-bold p-3 rounded-xl">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="pl-2">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
