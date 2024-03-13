import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const LocationPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container mx-auto -mt-40 lg:mt-32 px-6 h-[55rem]">
                <div className="bg-white rounded-lg h-[31rem] relative shadow-lg shadow-[#696969] lg:-mt-72 lg:h-[27rem] 2xl:h-[50rem] outline outline-1 ">
                    <div className="absolute bg-[#FBA834] w-40 h-10 rounded-md text-center text-3xl font-kulim font-semibold translate-x-1/2 right-1/2 mt-5  2xl:w-52 2xl:h-14 2xl:text-5xl">
                        Peta
                    </div>
                    <div className=" absolute translate-x-1/2 right-1/2 mt-24 2xl:mt-36">
                        <iframe
                            className="w-[34rem] h-[24rem] 2xl:w-[75rem] 2xl:h-[35rem]"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d670.2754753930587!2d116.86923028531228!3d-1.1431227482390727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1710367146609!5m2!1sen!2sid"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationPage;
