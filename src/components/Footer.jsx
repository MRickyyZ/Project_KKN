import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiChats } from "react-icons/pi";

const Footer = () => {
    return (
        <>
            <div className="h-[31rem] md:h-[33rem] lg:h-[36rem] xl:h-[26rem] 2xl:h-[31rem] bg-[#333A73] mt-10 flex flex-col">
                <div className="ml-6 mt-6 2xl:mt-20 ">
                    <div className="xl:flex">
                        <div className="xl:flex-row">
                            <h1 className="text-white font-semibold text-2xl font-kulim lg:ml-4 lg:mt-4  xl:mt-10 2xl:ml-20 2xl:text-4xl 2xl:-mt-2">
                                RUKUN TETANGGA 34
                            </h1>
                            <p className="mt-4 text-white text-xl font-kulim lg:ml-4 2xl:ml-20 2xl:text-2xl xl:w-[26rem]">
                                Website Rukun Tetangga 34 Kelurahan Karang
                                Joang, Kecamatan Balikpapan Utara
                            </p>
                            <div className="flex gap-6 -ml-6 lg:-ml-2">
                                <a
                                    href="https://www.instagram.com/itk_official/"
                                    target="_blank"
                                >
                                    <FaWhatsapp className="w-14 h-14 fill-white ml-6 mt-4 2xl:ml-[85px] " />
                                </a>
                                <a
                                    href="https://www.instagram.com/itk_official/"
                                    target="_blank"
                                >
                                    <FaInstagram className="w-14 h-14 fill-white mt-4 " />
                                </a>
                            </div>
                        </div>
                        <div className="flex-col xl:ml-20 xl:-mt-3 2xl:-mt-16">
                            <div className="flex lg:ml-4 2xl:ml-20 ">
                                <PiChats className="fill-white w-16 h-16 mt-10" />
                                <p className="mt-14 ml-4 text-white text-2xl font-semibold font-kulim 2xl:text-4xl">
                                    {" "}
                                    HUBUNGI KAMI
                                </p>
                            </div>
                            <p className="mt-4 text-white text-xl font-kulim lg:ml-4 2xl:ml-20 2xl:text-2xl w-96">
                                {" "}
                                Jl. Swadaya, Karang Joang, Kec. Balikpapan
                                Utara, Kota Balikpapan, Kalimantan Timur 76127
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-[35rem]  lg:max-w-[60rem] xl:max-w-[75rem] 2xl:max-w-[105rem] mt-8 md:mt-20 lg:mt-24 mx-auto">
                        <div className="w-full h-1 bg-white relative">
                            <div className="absolute w-3 h-3 rotate-45 bg-white -mt-1"></div>
                            <div className="absolute w-3 h-3 rotate-45 bg-white -mt-1 right-0"></div>
                        </div>
                        <p className="text-center text-white mt-2 md:mt-5 lg:text-xl 2xl:text-2 2xl:mt-8">
                            Hak Cipta @ KKN A5-2021 Institut Teknologi
                            Kalimantan
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
