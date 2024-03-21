import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const LapakPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container mx-auto -mt-40 lg:mt-32 px-6 h-[55rem]">
                <div className="bg-white rounded-lg h-[18rem] relative shadow-lg shadow-[#696969] lg:-mt-72 lg:h-[18rem] md:h-[18rem] xl:h-[18rem] 2xl:h-[16rem] outline outline-1 font" >
                    <div className="absolute bg-[#FBA834] w-80 h-10 xl:h-12 xl:mt-8 rounded-md text-center text-3xl font-kulim font-semibold translate-x-1/2 right-1/2 top-0 mt-5 2xl:w-[30rem] 2xl:h-14 2xl:text-5xl xl:text-4xl">
                        Lapak Kost
                    </div> 
                    <p className="text-justify w-[32rem]  py-24 mx-auto md:w-[40rem] md:text-lg lg:w-[55rem] lg:text-xl xl:py-32 xl:w-[70rem] 2xl:w-[85rem]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptates temporibus aperiam nostrum sunt rerum quos impedit dolor recusandae, distinctio provident illum vel quis. Porro minima architecto assumenda veritatis aliquam mollitia ducimus, magnam laboriosam nostrum similique odit, dignissimos, obcaecati consectetur voluptates. Maxime assumenda, eaque excepturi doloribus perspiciatis voluptates adipisci omnis.</p>
                </div>
            </div>
        </>
    );
};

export default LapakPage;
