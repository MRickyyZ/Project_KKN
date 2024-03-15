import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImgStruktur from "../assets/struktur.svg";

const StructurePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container mx-auto -mt-40 lg:mt-32 px-6 h-[55rem] ">
                <div className="bg-white rounded-lg h-[42rem] relative shadow-lg shadow-[#696969] lg:-mt-72 lg:h-[39rem] md:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] outline outline-1 ">
                    <div className="absolute bg-[#FBA834] w-80 h-10 rounded-md text-center text-3xl font-kulim font-semibold translate-x-1/2 right-1/2 mt-5  2xl:w-[30rem] 2xl:h-14 2xl:text-5xl">
                        Struktur Organisasi
                    </div>
                    <div className="w-[24rem] xl:w-[30rem] py-20 mx-auto ">
                        <img src={ImgStruktur} alt="Struktur Organisasi" />
                    </div>
                    <div className="text-justify mx-6 -mt-10 font-kulim text-base xl:text-lg">
                    <p className=" 2xl:hidden "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, architecto. Enim aliquam ab harum architecto rerum non eaque veniam natus, ut veritatis obcaecati sapiente ex deserunt quis inventore, qui vitae dolores aliquid ipsam error adipisci beatae cupiditate. Ratione, non vel dicta assumenda veniam nam delectus, nobis minima, tempore perferendis laborum?</p>
                    <p className="hidden 2xl:block ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aspernatur dolorum assumenda obcaecati vero tempora sit debitis quia voluptates eligendi, consequatur deserunt minus saepe placeat, totam minima cumque ex! Eligendi quasi incidunt quia iusto temporibus, asperiores earum, inventore vitae animi unde nemo? Quo aperiam fuga aliquam. Labore quidem quaerat molestiae veritatis minus cum placeat, nam eos consequuntur numquam molestias possimus est iure, dignissimos magnam vero, inventore hic commodi omnis totam?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StructurePage;
