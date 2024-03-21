import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Image from "../assets/gambar.svg";

const ProfilPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="container mx-auto -mt-40 lg:mt-32 px-6 h-[85rem]">
                <div className="bg-white rounded-lg h-[80rem] relative shadow-lg shadow-[#696969] lg:-mt-72 lg:h-[50rem] md:h-[75rem] xl:h-[50rem] 2xl:h-[50rem]">
                    <div className="absolute bg-[#FBA834] w-60 h-10 rounded-md text-center text-3xl font-kulim font-semibold translate-x-1/2 right-1/2 mt-5  2xl:w-[30rem] 2xl:h-14 2xl:text-5xl ">
                        Profil RT
                    </div>
                    <div className="lg:flex lg:-ml-24 xl:-ml-14 2xl:pt-8 2xl:-mb-10">
                        <div className="relative py-24">
                            <img
                                src={Image}
                                alt="Image-1"
                                className="-translate-x-1/2 left-1/2 ml-80 "
                            />
                        </div>
                        <p
                            className="w-[32rem] mx-auto md:ml-10 md:w-[40rem] text-justify -mt-14 text-lg lg:mt-24 lg:mr-10 xl:mr-20
                    "
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Laboriosam doloremque quidem magni eaque
                            excepturi odio veniam beatae quisquam recusandae
                            saepe voluptates, mollitia rem ducimus. Explicabo
                            quis eum optio inventore aspernatur est commodi,
                            voluptatem eius magnam, tenetur magni id, modi
                            quidem illo distinctio sapiente corrupti culpa
                            voluptatum accusamus autem neque quod?
                        </p>
                    </div>
                    <div className="lg:flex">
                        <div className="flex-col xl:ml-14 ">
                            <h1 className="text-2xl font-bold font-kulim ml-10 mt-6 mx-auto text-center lg:text-left">
                                Luas dan Batas Wilayah RT. 34
                            </h1>
                            <p className="ml-10 mt-2 text-lg font-kulim mx-auto text-justify">
                                {" "}
                                Luas Wilayah RT. 34: 56.000 Ha <br />
                                Batas Wilayah RT. 34 terdiri dari : <br />
                                Sebelah Utara : Desa Danau Usung Kec Murung{" "}
                                <br />
                                Sebelah Selatan : Desa Muara Jaan Kec Murung{" "}
                                <br />
                                Sebelah Barat : Desa Tahujan Kec Tanah Siang
                                Selatan <br />
                                Sebelah Timur : Desa Muara Laung Kec Laung Tuhup
                            </p>
                        </div>
                        <div className="flex-col xl:ml-32">
                            <h1 className="text-2xl font-bold font-kulim ml-10 mt-6 text-center lg:text-left">
                                Letak Geografis
                            </h1>
                            <p className="ml-10  mt-2 text-lg font-kulim">
                                Terletak antara 114 35’ 19”BT dan 0 39’ 54” LS{" "}
                                <br />
                                Ketinggian dari permukaan laut : 42 M <br />
                                Curah hujan rata-rat per Tahun : 3000 Mm <br />
                                Tipologi Desa : Daratan dan Perbukitan <br />
                                Temperatur Udara : Rata - rata 22 - 35 C <br />
                                Kelembaban Misbi : Rata - rata 85 %
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-center text-2xl font-bold font-kulim mt-10">
                            Jumlah Penduduk
                        </h1>
                        <div className="w-56 h-12 absolute bg-[#d9d9d9] translate-x-1/2 right-1/2">
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilPage;
