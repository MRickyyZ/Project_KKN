import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MoreButton from "../components/MoreButton";
import imgKost from "../assets/imgKost.svg";

function Dashboard() {
    return (
        <main className="h-[160rem] bg-[#D9D9D9]">
            <Navbar />
            <HeroSection />
            <div className="container mx-auto -mt-40 lg:mt-32 px-6">
                <div className="bg-white rounded-lg h-[33rem] relative shadow-lg lg:flex lg:flex-row lg:-mt-72 lg:h-[27rem]">
                    <div className="relative lg:ml-10">
                        <div className="absolute w-28 h-36  left-1/2 transform -translate-x-1/2 top-6 bg-[#D9D9D9] lg:ml-28 lg:w-64 lg:h-[17rem]"></div>
                        <h1 className="lg:mt-36 lg:absolute py-44 font-medium text-lg text-center lg:w-40 lg:ml-8">
                            Ketua RT 34
                        </h1>
                    </div>
                    <div className="px-8 lg:*:ml-64 lg:w-1/2">
                        <p className="font-semibold text-lg -mt-36 lg:mt-4 xl:text-2xl xl:w-96">
                            Assalamualaikum WR. WB <br /> Salam Sejahtera untuk
                            kita semua
                        </p>
                        <p className="text-justify font-light mt-1 lg:w-[38rem] 2xl:text-lg 2xl:w-[60rem] 2xl:mt-3 xl:text-lg xl:w-[50rem] xl:mt-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequuntur placeat magnam laboriosam natus,
                            voluptatem officiis ut odio veniam, qui dolorem nam
                            nihil! Ipsam at veritatis reiciendis aliquid neque
                            alias dolores quae. Esse dolore ad quasi nisi, iure
                            eligendi nihil modi consectetur, explicabo cumque
                            perferendis voluptatem, nostrum ipsa architecto
                            nesciunt? Temporibus iste laudantium a eos saepe
                            maiores et laboriosam eaque non.
                            <p className="hidden lg:block">
                                {" "}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit blanditiis vitae,
                                provident officiis ducimus aliquam consequuntur
                                ullam nobis autem nam tempore, ut, quas ipsum
                                laudantium! Repellat labore consequuntur eos
                                unde animi dignissimos ullam deserunt doloremque
                                soluta illum eveniet, earum vero reprehenderit
                                blanditiis beatae adipisci placeat. Enim in
                                reiciendis nulla laudantium.
                            </p>
                        </p>
                        <p
                            className="font-semibold mt-3 2xl:text-lg 2xl:w-[60rem]
xl:text-lg xl:w-[50rem]"
                        >
                            Wassalamualaikum WR. WB
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg h-[14rem] shadow-lg relative lg:flex lg:h-72 mt-20 z-50 lg:z-0 lg:mt-16 lg:flex-col lg:w-[58rem] xl:w-[69rem]">
                    <h1 className="text-[#FBA834] text-5xl font-kulim tracking-widest font-semibold ml-6 py-5 xl:ml-16">
                        {" "}
                        Visi
                    </h1>
                    <p className="mx-6 text-justify lg:w-96 lg:h-40 xl:ml-16">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A, repellat dolorem ad architecto facere
                        praesentium reiciendis reprehenderit eveniet, delectus
                        velit expedita, fugiat atque mollitia illo repellendus!
                        Consequuntur rem corporis reiciendis architecto optio,
                        possimus eligendi recusandae?
                    </p>
                </div>
                <div className="bg-[#FBA834] rounded-b-lg h-[15rem] relative shadow-md -mt-1 lg:flex lg:flex-col lg:-mt-[19rem] z-0 lg:h-64 lg:left-[29rem] lg:rounded-lg lg:w-[31.9rem] 2xl:w-[51rem] 2xl:left-[42rem] xl:w-[39.2rem]  xl:left-[38rem]">
                    <h1 className="text-white text-5xl font-kulim tracking-widest font-semibold ml-6 py-5 2xl:ml-16 xl:ml-12">
                        Misi
                    </h1>
                    <ol className="list-decimal ml-10 text-white lg:ml-8 2xl:text-xl 2xl:ml-20 xl:text-lg xl:ml-16">
                        <li>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, et.
                        </li>
                        <li>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, et.
                        </li>
                        <li>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, et.
                        </li>
                        <li>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, et.
                        </li>
                        <li>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, et.
                        </li>
                    </ol>
                </div>

                <div className=" lg:px-[22.8rem] mt-6 px-48 xl:px-[32rem] 2xl:px-[42rem]">
                    <MoreButton />
                </div>

                <div className="flex flex-row xl:ml-10 2xl:ml-36 ">
                    <div className=" contents content-start ">
                        <img
                            className="h-[18rem] mt-16 md:h-[23rem] lg:h-[24rem] xl:h-[25rem] 2xl:h-[32rem]"
                            src={imgKost}
                            alt="Gambar Kost"
                        />
                    </div>
                    <div className="">
                        <h1 className="font-bold font-kulim text-4xl xl:text-6xl mt-14 ml-6 md:ml-12 lg:ml-14 xl:ml-[6rem]">
                            Lapak Kost
                        </h1>
                        <p className="w-[18rem] text-justify ml-6 mt-3 font-kulim text-md md:ml-12 md:w-[22rem] lg:w-[36rem] lg:text-xl lg:ml-14 xl:w-[41rem]  xl:ml-[6rem] xl:mt-10">
                            Website ini menyediakan layanan “Lapak Kost” yaitu
                            sebuah layanan yang memberikan sebuah informasi yang
                            valid dan terpecaya mengenai kost-kostan sekitar RT
                            34 Kelurahan Karang Joang. Tidak hanya kepada
                            pengguna, website ini juga berguna untuk masyarakat
                            RT 34 khususnya pengurus RT.
                        </p>
                    </div>
                </div>
                <div className="px-[17rem] -mt-8 md:px-[23rem] md:-mt-24 lg:px-[24rem] lg:-mt-32 xl:px-[30rem] xl:-mt-20 2xl:px-[42.2rem] 2xl:-mt-[13rem] ">
                    <MoreButton />
                </div>
                <div className="w-40 h-10 bg-[#FBA834] rounded-tr-3xl relative mt-10 md:mt-28 lg:mt-40 lg:w-44 lg:h-14 xl:mt-36 2xl:mt-64 ">
                    <p className="absolute text-white text-3xl font-kulim font-semibold translate-x-1/2 right-1/2 tracking-widest bottom-1/2 translate-y-1/2 ">
                        Berita
                    </p>
                    <div className="absolute w-[35rem] h-1 mt-8 bg-[#FBA834] md:w-[45rem] lg:w-[60rem] lg:mt-11 xl:w-[77rem] 2xl:w-[92.5rem]"></div>
                    <div className="right w-4 h-4 transform rotate-45 ml-[34.5rem] -bottom-[2px] absolute bg-[#FBA834] md:ml-[44.5rem] lg:ml-[59.5rem] lg:top-[38px] xl:ml-[76.5rem] 2xl:ml-[92rem]"></div>
                </div>
                <div className="w-[35rem] h-72 bg-white -mt-2 rounded-xl shadow-xl shadow-[#969696] flex md:w-[45rem] lg:w-[60rem] xl:h-80 xl:w-[77rem] 2xl:w-[92.5rem] gap-2 2xl:gap-10 ">
                    <div className="w-[14rem] h-44  z-50 bg-slate-300 mt-10 ml-4 rounded-xl relative outline outline-1 outline-black lg:w-[18.5rem] xl:w-[24rem] xl:h-56 xl:ml-6 2xl:w-[28rem] 2xl:ml-8">
                        <div className="w-[10rem] h-16 rounded-br-xl rounded-bl-xl bottom-0 absolute  bg-white md:w-[13.37rem] lg:w-[18.35rem]  xl:w-[23.8rem] 2xl:w-[27.15rem]"></div>
                    </div>
                    <div className="w-[14rem] h-44  z-50 bg-slate-300 mt-10 ml-4 rounded-xl relative outline outline-1 outline-black lg:w-[18.5rem] xl:w-[24rem] xl:h-56 2xl:w-[28rem] ">
                        <div className="w-[10rem] h-16 rounded-br-xl rounded-bl-xl bottom-0 absolute  bg-white md:w-[13.3rem] lg:w-[18.3rem]  xl:w-[23.8rem] 2xl:w-[27.2rem]"></div>
                    </div>
                    <div className="w-[14rem] h-44 z-50 bg-slate-300 mt-10 ml-4 mr-4 rounded-xl relative outline outline-1 outline-black lg:w-[18.5rem] xl:w-[24rem] xl:h-56 2xl:w-[27.8rem] 2xl:mr-8">
                        <div className="w-[10rem] h-16 rounded-br-xl rounded-bl-xl bottom-0 absolute  bg-white md:w-[13.3rem] lg:w-[18.3rem]  xl:w-[23.8rem] 2xl:w-[27rem]"></div>
                    </div>
                </div>
                <div className="px-48 -mt-5 md:px-64 lg:px-[375px] xl:px-[31rem] 2xl:px-[39rem]">
                    <MoreButton />
                </div>
            </div>
        </main>
    );
}

export default Dashboard;
