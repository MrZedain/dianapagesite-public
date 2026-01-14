"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faVimeo } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from '/logo.svg';

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    type NavItem = { label?: string; href: string };
    type NavGroup = { title: string; items: NavItem[] };

    const NAV_GROUPS: NavGroup[] = [
        {
            title: "paintings",
            items: [
                { label: "unknown cities", href: "/gallery/unknown-cities" },
                { label: "rewilding", href: "/gallery/rewilding" },
                { label: "dwellers", href: "/gallery/dwellers" },
                { label: "the shipping log", href: "/gallery/the-shipping-log" },
            ],
        },
        { title: "drawing", items: [{ href: "/gallery/drawing" }] },
        {
            title: "books",
            items: [
                { label: "page by page", href: "/books/page-by-page" },
                { label: "ode to a lighter world", href: "/books/ode-to-a-lighter-world" },
            ],
        },
        { title: "drawing mentor", items: [{ href: "/drawing-mentor" }] },
        { title: "performance", items: [{ href: "/gallery/performance" }] },
        { title: "press", items: [{ href: "/press" }] },
        {
            title: "about",
            items: [
                { label: "biography", href: "/about/biography" },
                { label: "cv", href: "/about/cv" },
                { label: "statement", href: "/about/statement" },
            ],
        },
        { title: "contact", items: [{ href: "/contact" }] },
    ];

    const isGroupActive = (group: NavGroup) => {
        return group.items.some(item =>
            pathname === item.href || pathname.startsWith(item.href + "/")
        );
    };



    const handleDropdownClick = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    const closeDropdowns = () => {
        setOpenDropdown(null);
    };

    return (
        <>
            {/* Overlay to close dropdowns when clicking outside */}
            {openDropdown && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={closeDropdowns}
                />
            )}

            {/* MOBILE HEADER */}
            <div className="sm:hidden">
                <div className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-4 bg-white">
                    <Link href="/">
                        <h1 className={isHome ? "text-black text-xl" : "text-[#fc1eba] text-xl"}>
                            DIANA PAGE
                        </h1>
                    </Link>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                <div
                    className={`fixed top-12 left-0 right-0 bottom-0 z-40 bg-white transform transition-transform duration-700 ease-in-out overflow-y-auto ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div className="p-6 flex flex-col gap-6">
                        {NAV_GROUPS.map((group) => (
                            <div key={group.title} className="border-b border-gray-200 pb-4">
                                {group.items.length > 1 ? (
                                    <details className="group">
                                        <summary className="text-lg font-medium cursor-pointer list-none flex items-center justify-between">
                                            {group.title}
                                            <span className="transition group-open:rotate-180">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="mt-3 ml-4 flex flex-col gap-2">
                                            {group.items.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="text-gray-600 hover:text-black text-sm"
                                                >
                                                    {item.label || group.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <Link
                                        href={group.items[0].href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium block cursor-pointer"
                                    >
                                        {group.items[0].label || group.title}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="flex items-center justify-center gap-4 mt-4">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/dianapage15/"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="text-black text-xl" />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/dianapage.studio/"
                            >
                                <FontAwesomeIcon icon={faFacebook} className="text-black text-xl" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://vimeo.com/361478589">
                                <FontAwesomeIcon icon={faVimeo} className="text-black text-xl" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://substack.com/@dianapage">
                                <Icon icon="simple-icons:substack" className="text-black text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-30 top-20"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </div>

            {/* DESKTOP HEADER */}
            <div
                className={`hidden bg-[#ffffff85] text-black top-0 w-full h-60 ${isHome ? "sm:fixed" : ""
                    } sm:flex flex-col items-center justify-around z-20`}
            >
                <div className="max-w-6xl mx-auto flex justify-center gap-7 px-3 pt-3 relative z-40">
                    {NAV_GROUPS.map((group) => {
                        const active = isGroupActive(group);
                        return (
                            <div key={group.title} className="relative group">
                                {group.items.length > 1 ? (
                                    <>
                                        <button
                                            onClick={() => handleDropdownClick(group.title)}
                                            className={`
                                            relative rounded text-xs md:text-base cursor-pointer
                                            before:absolute before:left-0 before:bottom-0 before:h-0.5  
                                            before:bg-black before:transition-all before:duration-500
                                           ${active || openDropdown === group.title
                                                    ? "before:w-full"
                                                    : "before:w-0 group-hover:before:w-full"
                                                }
                                            `}
                                        >
                                            {group.title}
                                        </button>

                                        <div
                                            className={`
                                            absolute z-10 left-0 w-fit text-nowrap bg-[#ffffffd9] rounded shadow-lg
                                            transition-all duration-500 ease-out
                                            ${openDropdown === group.title
                                                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                                                    : 'opacity-0 -translate-y-1 pointer-events-none'}
                                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                        `}
                                        >
                                            <div className="flex flex-col">
                                                {group.items.map((item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={item.href}
                                                        onClick={closeDropdowns}
                                                        className="px-1 py-1 rounded hover:bg-[#ffffff65] text-xs"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={group.items[0].href}
                                        className={`
              relative rounded text-xs md:text-base cursor-pointer inline-block
              before:absolute before:left-0 before:bottom-0 before:h-0.5  
              before:bg-black before:transition-all before:duration-500
              ${active ? "before:w-full" : "before:w-0 group-hover:before:w-full"}
            `}
                                    >
                                        {group.items[0].label || group.title}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="flex flex-col gap-5">
                    <Link href="/">
                        <svg
                            viewBox="0 0 240 80"
                            fill="currentColor"
                            className={`w-75 h-25 ${isHome ? 'text-black' : 'text-[#fc1eba]'}`}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2_23)">
                                <path d="M180.136 26.3668C180.136 27.4766 180.136 28.5181 180.136 29.6394C179.099 29.6394 178.112 29.6547 177.127 29.6232C176.976 29.6183 176.787 29.4241 176.69 29.2734C175.263 27.0543 173.848 24.8281 172.432 22.6029C170.784 20.0157 169.14 17.427 167.491 14.8407C165.613 11.8932 163.731 8.94739 161.849 6.00201C161.746 5.84065 161.624 5.69001 161.396 5.37552C161.396 13.5679 161.396 21.5555 161.396 29.5922C160.293 29.5922 159.244 29.5922 158.152 29.5922C158.152 19.7591 158.152 9.92951 158.152 0.0338138C159.19 0.0338138 160.203 0.0066107 161.212 0.056738C161.414 0.0667784 161.656 0.33893 161.786 0.544856C165.722 6.80541 169.647 13.0726 173.572 19.3393C174.573 20.9371 175.57 22.5369 176.714 24.0993C176.714 16.099 176.714 8.09874 176.714 0.0659477C177.876 0.0659477 178.956 0.0659477 180.136 0.0659477C180.136 8.81285 180.136 17.5557 180.136 26.3668Z" fill="currentColor" />
                                <path d="M11.8216 28.9219C10.0016 29.3841 8.21458 29.6663 6.3787 29.6467C4.2721 29.6243 2.16504 29.6415 0 29.6415C0 19.791 0 9.96215 0 0.0330323C0.224559 0.0330323 0.473744 0.0330323 0.722929 0.0330323C3.13804 0.0330318 5.55725 -0.053044 7.96733 0.0527024C11.823 0.221877 15.3004 1.35761 17.9047 4.26499C19.3545 5.88351 20.1821 7.81347 20.6963 9.88373C21.21 11.9525 21.2205 14.0567 21.0895 16.1436C20.8927 19.2814 20.0608 22.2763 18.0601 24.8396C16.4912 26.8495 14.3743 28.1607 11.8216 28.9219ZM3.21026 22.0688C3.21026 23.7632 3.21026 25.4575 3.21026 27.3075C5.14458 27.17 6.99015 27.1754 8.78171 26.8795C11.5005 26.4304 13.7208 25.0715 15.2758 22.8449C16.926 20.4822 17.4836 17.7781 17.5232 15.0101C17.548 13.2772 17.3513 11.5027 16.9544 9.81166C16.3093 7.06266 14.6404 4.97392 11.9521 3.68177C10.7036 3.08171 9.42169 2.65168 8.02784 2.62095C6.43851 2.58591 4.84771 2.61284 3.21026 2.61284C3.21026 9.02947 3.21026 15.4809 3.21026 22.0688Z" fill="currentColor" />
                                <path d="M135.758 53.628C137.02 52.0962 138.537 50.9558 140.344 50.1783C142.62 49.1993 145.001 48.907 147.455 49.2894C148.547 49.4595 149.702 49.5776 150.681 50.0199C151.883 50.5631 152.941 51.4081 154.034 52.1596C154.16 52.2464 154.219 52.6495 154.123 52.7699C153.563 53.4754 152.947 54.1404 152.334 54.8373C150.84 53.4777 149.334 52.4412 147.44 52.0818C143.976 51.4245 140.925 52.3415 138.633 55.1858C136.976 57.2422 136.196 59.5961 135.922 62.1643C135.541 65.7266 136.039 69.1415 137.666 72.3588C138.688 74.3818 140.213 76.0018 142.467 76.8393C143.001 77.038 143.578 77.2164 144.143 77.2411C146.467 77.3428 148.776 77.2315 151.041 76.6377C151.553 76.5034 151.732 76.2891 151.728 75.7635C151.7 72.581 151.714 69.3982 151.714 66.2155C151.714 65.9692 151.714 65.7229 151.714 65.4335C152.858 65.4335 153.955 65.4335 155.124 65.4335C155.124 65.651 155.124 65.849 155.124 66.0469C155.124 69.9343 155.119 73.8217 155.132 77.7091C155.134 78.1437 155.038 78.3439 154.553 78.52C152.538 79.2517 150.475 79.7423 148.325 79.8479C146.725 79.9264 145.113 80.0729 143.525 79.957C141.41 79.8026 139.482 79.0399 137.795 77.7532C135.19 75.7663 133.845 73.0454 132.972 70.077C132.305 67.8128 132.067 65.467 132.27 63.13C132.561 59.7782 133.435 56.5802 135.638 53.8479C135.68 53.7965 135.695 53.7256 135.758 53.628Z" fill="currentColor" />
                                <path d="M95.1131 74.7166C95.6712 76.3275 96.2008 77.8906 96.7537 79.5225C95.509 79.5225 94.3214 79.5225 93.056 79.5225C92.2966 77.178 91.5244 74.7841 90.7449 72.3925C90.4751 71.5648 90.2098 70.7343 89.8906 69.924C89.8171 69.7374 89.5314 69.5036 89.3415 69.5021C86.1695 69.476 82.9969 69.4993 79.8249 69.4686C79.2642 69.4632 79.2198 69.8241 79.1184 70.1351C78.0957 73.2723 77.0919 76.4152 76.0815 79.5604C74.9677 79.5604 73.905 79.5604 72.7317 79.5604C76.2509 69.6831 79.7597 59.8349 83.2682 49.9875C84.3814 49.9875 85.4441 49.9875 86.5697 49.9875C89.4053 58.207 92.2449 66.4379 95.1131 74.7166ZM80.6734 65.348C80.4854 65.9354 80.2974 66.5227 80.1045 67.1253C83.0576 67.1253 85.9586 67.1253 89.0696 67.1253C87.6258 62.7004 86.2122 58.3681 84.7986 54.0358C84.7054 54.0424 84.6121 54.049 84.5189 54.0556C83.2565 57.7879 81.9941 61.5203 80.6734 65.348Z" fill="currentColor" />
                                <path d="M222.24 11.9545C223.686 7.95695 225.103 4.00715 226.523 0.0507261C227.616 0.0507261 228.679 0.0507261 229.818 0.0507261C233.2 9.86266 236.589 19.6954 240 29.593C238.738 29.593 237.548 29.593 236.303 29.593C235.301 26.5022 234.279 23.3891 233.293 20.2655C233.124 19.7321 232.901 19.5205 232.281 19.5281C229.275 19.5647 226.268 19.5591 223.262 19.5308C222.74 19.5259 222.516 19.6975 222.372 20.1491C221.631 22.466 220.868 24.776 220.116 27.0896C219.842 27.9333 219.579 28.7805 219.312 29.6255C218.194 29.6255 217.131 29.6255 215.966 29.6255C216.468 28.2391 216.967 26.8891 217.447 25.5326C219.039 21.0238 220.624 16.5126 222.24 11.9545ZM230.804 12.4566C229.876 9.66861 228.948 6.88064 228.019 4.09267C227.935 4.1042 227.85 4.11572 227.765 4.12725C226.289 8.47271 224.813 12.8182 223.328 17.1899C226.351 17.1899 229.302 17.1899 232.301 17.1899C232.256 17.0203 232.227 16.8939 232.188 16.7706C231.745 15.3656 231.3 13.9611 230.804 12.4566Z" fill="currentColor" />
                                <path d="M100.831 22.1296C102.066 18.6459 103.297 15.2171 104.522 11.7866C105.918 7.87649 107.31 3.96481 108.705 0.0505458C109.809 0.0505458 110.872 0.0505458 112.008 0.0505458C115.391 9.86344 118.782 19.6956 122.194 29.592C120.936 29.592 119.745 29.592 118.488 29.592C117.584 26.7814 116.636 23.9487 115.769 21.0934C115.304 19.5621 115.366 19.5446 113.695 19.5446C110.949 19.5446 108.202 19.5599 105.456 19.5312C104.938 19.5257 104.707 19.6911 104.564 20.1468C103.848 22.4248 103.113 24.6972 102.378 26.9695C102.091 27.8562 101.786 28.7376 101.488 29.6252C100.387 29.6252 99.3241 29.6252 98.1643 29.6252C99.0583 27.124 99.9412 24.6539 100.831 22.1296ZM111.994 17.2251C112.812 17.2251 113.631 17.2251 114.532 17.2251C113.057 12.7202 111.614 8.31389 110.171 3.90762C110.124 3.90663 110.077 3.90565 110.03 3.90467C108.53 8.32458 107.029 12.7445 105.508 17.2251C107.689 17.2251 109.771 17.2251 111.994 17.2251Z" fill="currentColor" />
                                <path d="M19.9785 53.2464C19.9785 52.1369 19.9785 51.0955 19.9785 50.0058C20.2568 49.9929 20.4854 49.9733 20.7141 49.9731C23.6971 49.9711 26.6851 49.8686 29.6619 49.9993C32.9759 50.1447 35.8385 51.2849 37.3615 54.3595C37.8269 55.2992 37.9252 56.4101 38.1651 57.4483C38.5145 58.9609 38.0547 60.3565 37.4662 61.7355C36.9263 63.0004 36.037 64.0244 34.9286 64.8191C32.881 66.287 30.5292 66.9739 27.9694 67.0334C26.421 67.0694 24.874 67.1636 23.2738 67.234C23.2738 71.3044 23.2738 75.3877 23.2738 79.5255C22.1747 79.5255 21.1251 79.5255 19.9785 79.5255C19.9785 70.7976 19.9785 62.0561 19.9785 53.2464ZM25.1658 64.7078C26.4488 64.6168 27.7427 64.5973 29.0122 64.4184C31.0664 64.1289 32.7451 63.1648 33.9071 61.4855C34.6881 60.3568 34.8245 59.0691 34.7616 57.7434C34.6264 54.8961 33.3507 53.296 30.6723 52.7895C28.2817 52.3374 25.7776 52.4387 23.2904 52.2939C23.2904 56.5513 23.2904 60.6045 23.2904 64.7078C23.897 64.7078 24.4607 64.7078 25.1658 64.7078Z" fill="currentColor" />
                                <path d="M202.163 52.5642C200.013 52.5642 197.934 52.5642 195.812 52.5642C195.812 55.9413 195.812 59.2678 195.812 62.6453C199.286 62.6453 202.734 62.6453 206.233 62.6453C206.233 63.4748 206.233 64.255 206.233 65.0875C202.782 65.0875 199.334 65.0875 195.828 65.0875C195.828 69.0556 195.828 72.9732 195.828 76.9657C200.36 76.9657 204.915 76.9657 209.511 76.9657C209.511 77.8489 209.511 78.6585 209.511 79.5244C203.887 79.5244 198.244 79.5244 192.55 79.5244C192.55 69.7139 192.55 59.8846 192.55 50.0135C198.006 50.0135 203.46 50.0135 208.949 50.0135C208.949 50.846 208.949 51.6555 208.949 52.5642C206.711 52.5642 204.473 52.5642 202.163 52.5642Z" fill="currentColor" />
                                <path d="M62.3281 27.1854C62.3281 28.0222 62.3281 28.7908 62.3281 29.6001C61.2266 29.6001 60.1776 29.6001 59.094 29.6001C59.094 19.7626 59.094 9.95135 59.094 0.0865469C60.1347 0.0865469 61.1841 0.0865469 62.3281 0.0865469C62.3281 9.09 62.3281 18.1036 62.3281 27.1854Z" fill="currentColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_23">
                                    <rect width="240" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>


                    <div className="flex items-center justify-center gap-2 h-1/10 w-full">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/dianapage15/"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-black text-sm" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/dianapage.studio/"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="text-black text-sm" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://vimeo.com/361478589">
                            <FontAwesomeIcon icon={faVimeo} className="text-black text-sm" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://substack.com/@dianapage">
                            <Icon icon="simple-icons:substack" className="text-black text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}