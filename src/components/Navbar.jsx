import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { useLocation, Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
    const location = useLocation();
    const isTransparent =
        location.pathname === "/regis" || location.pathname === "/login";

    const [isActive, setIsActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleHamburger = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToHome = () => {
        const element = document.getElementById("Home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToAbout = () => {
        const element = document.getElementById("About");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToContact = () => {
        const element = document.getElementById("Contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`sticky top-0 left-0 py-5 text-white w-full flex items-center
        ${
            isActive || scrollPosition > 0
                ? " backdrop-filter backdrop-blur-[3px] shadow-gray-600 shadow-sm"
                : "blur-5px"
        }
        ${isTransparent ? "bg-[#333A73] " : "bg-[#333A73] "} `}
            style={{ zIndex: isActive ? 100 : 100 }}
        >
            <div className="xl:ml-16 xl:px-16 mx-auto navbar">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <Link to="/landing#home">
                            <img src={Logo} alt="Logo" className="w-36 -ml-2" />
                        </Link>
                    </div>
                    <div className="flex items-center lg:px-44 ">
                        <button
                            id="hamburger"
                            name="hamburger"
                            type="button"
                            className="block fixed left-4 lg:hidden "
                            onClick={toggleHamburger}
                        >
                            <span
                                className={`w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-out ${
                                    isActive ? "origin-top-left rotate-45" : ""
                                }`}
                            ></span>
                            <span
                                className={`w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-out ${
                                    isActive ? "scale-0" : ""
                                }`}
                            ></span>
                            <span
                                className={`w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-out ${
                                    isActive
                                        ? "origin-bottom-left -rotate-45"
                                        : ""
                                }`}
                            ></span>
                        </button>
                        <nav
                            id="navMenu"
                            className={`${
                                isActive
                                    ? "block fixed py-6 bg-[#333A73] shadow-xl rounded-bl-3xl rounded-tr-3xl max-w-[250px] w-full left-1 top-20 bg-opacity-90   backdrop-filter backdrop-blur-[3px] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                                    : "hidden sm:hidden md:hidden lg:block "
                            }`}
                        >
                            <ul className="block lg:flex lg:-ml-40">
                                <li className="group">
                                    <Link
                                        onClick={scrollToHome}
                                        to="/landing#Home"
                                        className="text-xl 2xl:ml-64 xl:ml-28 font-poppins font-medium text-white py-2 mx-8 inline-flex   hover:border-blue-500 hover:border-b-2"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link
                                        to="/detail"
                                        className="text-xl font-poppins font-medium text-white py-2 mx-8 inline-flex hover:border-blue-500 hover:border-b-2"
                                    >
                                        Profil
                                    </Link>
                                    <SlArrowDown className="w-[12px] ml-[90px] -mt-6 text-white" />
                                </li>
                                <li className="group">
                                    <div className="relative">
                                        <Link
                                            onClick={scrollToAbout}
                                            to="/landing#About"
                                            className="text-xl font-poppins font-medium text-white py-2 mx-8 inline-flex hover:border-blue-500 hover:border-b-2"
                                        >
                                            Lapak Kost
                                        </Link>
                                    </div>
                                </li>
                                <li className="group">
                                    <Link
                                        onClick={scrollToContact}
                                        to="/landing#Contact"
                                        className="text-xl font-poppins font-medium text-white py-2 mx-8 inline-flex hover:border-blue-500 hover:border-b-2"
                                    >
                                        Berita
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link
                                        onClick={scrollToContact}
                                        to="/landing#Contact"
                                        className="text-xl font-poppins font-medium text-white py-2 mx-8 inline-flex hover:border-blue-500 hover:border-b-2"
                                    >
                                        Peta
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
