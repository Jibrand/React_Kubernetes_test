import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import Cookies from "js-cookie";
import { Dashboard } from "./API";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Userlogo from '/public/logo.jpg';
import { FaHeart } from "react-icons/fa";
import { LuArrowBigRightDash } from "react-icons/lu";

const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);
    const [borderColor, setBorderColor] = useState("");
    const [backdropBlur, setBackdropBlur] = useState(false);
    const [isVerified, setIsVerified] = useState(true)
    const [name, setName] = useState('')
    const dropdownRef = useRef(null); // Ref for the dropdown
    const pathUrl = useLocation();
    const navigate = useNavigate()

    const [pic, setpic] = useState('')

    const pic1 = Cookies.get('pic');



    useEffect(() => {
        const id = Cookies.get('id')
        const name = Cookies.get('name')
        setpic(pic1);

        if (!id) { setIsVerified(false) }
        if (name) { setName(name) }

    }, [])



    const menuData = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "About us", path: "https://www.cloudsecuritybootcamp.com" },
        { id: 2.1, title: "Training", path: "/training" },
        { id: 2.2, title: "Advanced Quests", path: "/pricing", isPaid: true },
    ];

    // Sticky menu
    const handleStickyMenu = () => {
        if (window.scrollY >= 10) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu);
        return () => window.removeEventListener("scroll", handleStickyMenu);
    }, []);

    // Scroll to top when the path changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathUrl]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownToggler(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const logOut = () => {
        Cookies.set("id", "", { path: '/', sameSite: 'Lax', secure: false })
        Cookies.set("token", "", { path: '/', sameSite: 'Lax', secure: false })
        Cookies.set("auth", "false", { path: '/', sameSite: 'Lax', secure: false })
        setIsVerified(false)
        navigate('/')
        toast.success('You have successfully logged out!')
    }

    const sendtoDshboard = () => {
        const id = Cookies.get("id")

        window.location.href = `${Dashboard}/${id}`
    }

    return (
        <header
            className={`fixed left-0 top-0  w-full py-7 ${stickyMenu
                ? `bg-white !py-4 shadow transition duration-100 dark:bg-black picboxh`
                : ""
                } ${backdropBlur ? "backdrop-blur-md bg-opacity-60" : ""}`}
        >
            <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
                <div className="flex w-full items-center justify-between xl:w-1/4">
                    <a href="/">
                        <img
                            src="/images/logo/logo.png"
                            alt="logo"
                            className="hidden  dark:block h-14 w-14"
                        />
                        <img
                            src="/images/logo/logo.png"
                            alt="logo"
                            className=" dark:hidden h-14 w-14"
                        />
                    </a>

                    {/* Hamburger Toggle BTN */}
                    <button
                        aria-label="hamburger Toggler"
                        className="block xl:hidden"
                        onClick={() => setNavigationOpen(!navigationOpen)}
                    >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                            <span className="absolute right-0 block h-full w-full">
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                                        }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                                        }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                                        }`}
                                ></span>
                            </span>
                            <span className="du-block absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                                        }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                                        }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* Hamburger Toggle BTN */}
                </div>

                {/* Nav Menu and Action Buttons Start */}
                <div
                    className={`invisible h-0 w-full items-center justify-end xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
                        "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
                        }`}
                >
                    <nav className="ml-auto">
                        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                            {menuData.map((menuItem, key) => (
                                <li key={key} className={menuItem.submenu && "group relative"}>
                                    {menuItem.submenu ? (
                                        // Dropdown button logic here
                                        <></>
                                    ) : (
                                        <Link
                                            to={`${menuItem.path}`}
                                            className={`relative ${pathUrl.pathname === menuItem.path
                                                ? "text-pink-500 hover:text-pink-500"
                                                : "hover:text-pink-500"
                                                }`}
                                        >
                                            {menuItem.title}
                                            {menuItem.isPaid && (
                                                <span
                                                    className="absolute -top-2 right-0 px-2 py-0.5 text-xs bg-pink-500 text-white rounded-full"
                                                    style={{
                                                        transform: "translate(50%, -50%)",
                                                        fontSize: "10px",
                                                    }}
                                                >
                                                    Paid
                                                </span>
                                            )}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <div className="mt-7 ml-10 flex items-center gap-6 xl:mt-0">
                        {isVerified ?

                            <div className="relative  " ref={dropdownRef}>

                                <div className="">
                                    <button
                                        onClick={sendtoDshboard} // Pass the title
                                        className="inline-flex picboxc items-center px-2 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 transition-colors"
                                    >
                                   View Profile     <LuArrowBigRightDash  className="ml-2" size={22} /> 
                                    </button>
                                </div>

                                {dropdownToggler && (
                                    <div className="absolute px-[px] cursor-pointer  right-0 mt-2 w-48 bg-gray-900 border border-gray-500 rounded-lg shadow-lg ">
                                        <ul className="py-2">
                                            <li>
                                                <p onClick={sendtoDshboard} className="block px-4 py-2 text-gray-400 hover:bg-gray-700 rounded-lg">Profile</p>
                                            </li>

                                            <li>
                                                <p onClick={logOut} className="block px-4 py-2 text-gray-400 hover:bg-gray-700 bg-pink-800 rounded-lg ">Logout</p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            :
                            <>
                                <Link to="/login" className="text-regular font-medium text-waterloo hover:text-pink-500">Login</Link>
                                <Link to="/register" className="flex items-center justify-center rounded-full bg-pink-500 px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-pink-700"> Register 🔥 </Link>
                            </>}

                    </div>
                </div>
            </div>
            <Toaster />
        </header>
    );
};

export default Header;
