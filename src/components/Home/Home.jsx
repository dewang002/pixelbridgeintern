import cover from "../../assets/cover.png";
import Header from "../Header";
import word from "../../assets/word.png"
import wordBlack from "../../assets/wordBlack.png"
import PhotoSlider from "../PhotoSlider";
import Vision from "../Vision";
import Fourdog from "../Fourdog";
import Tocken from "../Tocken";
import Merch from "../Merch";
import Game from "../Game";
import GamePrv from "../GamePrv";

export default function Home() {
  return (
    <div>
      <div
        className="h-screen z-0 fixed top-0 left-0 w-full"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-between pb-32 pt-4 h-screen">
           <div className="flex flex-col items-center ">
            <img className="w-[90%] relative z-10 " src={word} alt="welcome to alabama world" />
            <img className="w-[90%] -translate-y-[5.4vw] translate-x-[0.9vw]" src={wordBlack} alt="welcome to alabama world" />
           </div>

          <div className="bg-[#181C27] w-full font-Chewy">
            <h4 className="text-[#FFFFFF] text-center p-4 text-3xl">
              WHERE THE{" "}
              <span className="text-[#FDE047]">
                LEGENDARY CENTRAL ASIAN SHEPHERD DOG
              </span>{" "}
              MEETS A NEW-AGE ADVENTURE.
              <span className="text-[#FDE047]">JOIN US</span> IN CELEBRATING THE{" "}
              <span className="text-[#FDE047]">STRENGTH, LOYALTY,</span> AND{" "}
              <span className="text-[#FDE047]">HERITAGE</span> OF THE ALABAY
              BREED.
            </h4>
          </div>

        </div>
      </div>
      <div className="min-h-screen z-10 absolute flex flex-col px-10 top-[85vh] w-full overflow-hidden">
        <Header />
        <PhotoSlider /> 
        <Vision />
        <Fourdog />
        <Tocken />
        <Merch />
        <Game />
        <GamePrv />
      </div>
    </div>
  );
}
