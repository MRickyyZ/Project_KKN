import imageHeroSection from "../assets/imageHeroSection.svg";
import imageHeroSection2 from "../assets/imageHeroSection2.svg";

const HeroSection = () => {
    return (
        <main>
            <div className="flex relative justify-center mx-auto">
                <img
                    src={imageHeroSection}
                    className="w-full py-28 -mt-4 hidden lg:block max-w-full brightness-50"
                    alt="HeroSection"
                />
                <img
                    src={imageHeroSection2}
                    className="w-full block lg:hidden object-cover max-w-full brightness-50"
                    alt="HeroSection"
                />
                <div className="absolute bottom-0 text-justify text-white py-20 left-0 ml-6 mb-10 md:mb-20 md:ml-14 lg:mb-40 xl:mb-56">
                    <p className="font-bold w-auto text-3xl lg:text-3xl xl:text-3xl ">
                        Selamat Datang di Website{" "}
                    </p>
                    <p className="text-lg w-[30rem] lg:text-xl lg:w-[33rem] font-normal">
                        Website adalah sebuah sistem informasi yang menyediakan
                        sebuah informasi mengenai RT 34 Kelurahan Karang Joang
                        berbasis Web.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
