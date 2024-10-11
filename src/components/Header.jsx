import bgYellow from "../assets/Rectangle 2.png"
import headerImg from "../assets/Frame 2.png"
const Header = () => {
    return (
        <div className="relative font-Chewy bg-gradient-to-r h-[130vh] pr-10 pt-36 bg-white gap-4 rounded-t-3xl">
            <div className="bgImg absolute top-0 left-0 z-10">
                <img className="w-[100vw]" src={bgYellow} alt="" />
            </div>
            <img className="relative z-50 dogWithTitle  " src={headerImg} alt="" />
            <p className="z-20 w-[30%]  text-right absolute text-3xl top-[30vw] right-0 pr-28" >The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
            
        </div>
    );
};

export default Header;