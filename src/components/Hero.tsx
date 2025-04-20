import Profile from "./Profile";
import Verse from "./Verse";
import Avatar from "..assets/Photo.png";

function Hero(){
    return(
        <div className="relative">
            <div className="absolute top-0 left-0 h-60 bg-[url('/src/assets/VerseBackgroundImage.png')]  bg-cover bg-no-repeat"></div>
            <div className="relative z-10">
            <Profile gretting="Good Evening" name="Dodik" avatar={Avatar}/>
            <Verse verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”" 
    surah="Al-A’raaf (7:25)" />
        </div>
        </div>
    );
}

export default Hero