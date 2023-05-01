import '../../lib/joy-jsx';

JOY.router.page("pager", () => {
    document.getElementsByTagName('body')[0].setAttribute("class", "dark:bg-jacarta-900 font-body text-jacarta-500 overflow-x-hidden")
    document.getElementsByTagName('body')[0].setAttribute("itemscope", "true")
    $("#year").text(new Date().getFullYear());
 })
JOY.css({
    ".st1,\n.st6": {
        fill: "#e4761b",
        stroke: "#e4761b",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    },
    ".st6": {
        fill: "#f6851b",
        stroke: "#f6851b"
    }
})
export default function Pager(params) {
    return (
        <div id="pager" class="section__">
            <header class="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <div class="flex items-center px-6 py-6 xl:px-24">
                    {/* <!-- Logo --> */}
                    <a href="" class="shrink-0">
                        <img src="/img/bresnow__logo_b.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                        <img src="/img/bresnow_logo.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                    </a>

                    {/* <!-- Search --> */}
                    <form action="search" class="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
                        <input
                            type="search"
                            class="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                            placeholder="Search"
                        />
                        <span class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-jacarta-500 h-4 w-4 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                />
                            </svg>
                        </span>
                    </form>

                    {/* <!-- Menu / Actions --> */}
                    <div
                        class="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent"
                    >
                        {/* <!-- Mobile Logo / Menu Close --> */}
                        <div
                            class="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden"
                        >
                            {/* <!-- Mobile Logo --> */}
                            <a href="index.html" class="shrink-0">
                                <img src="img/bresnow_logo_b.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                                <img src="img/bresnow_logo.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                            </a>

                            {/* <!-- Mobile Menu Close --> */}
                            <button
                                class="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                                aria-label="close mobile menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Mobile Search --> */}
                        <form action="search" class="relative mt-24 mb-8 w-full lg:hidden">
                            <input
                                type="search"
                                class="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                placeholder="Search"
                            />
                            <span class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-500 h-4 w-4 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                    />
                                </svg>
                            </span>
                        </form>

                        {/* <!-- Primary Nav --> */}
                        <nav class="navbar w-full">
                            <ul class="flex flex-col lg:flex-row">
                                <li class="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        class="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-1"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Home
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-1"
                                    >
                                        <li>
                                            <a
                                                href="index.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Home 1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-2.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Home 2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-3.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Home 3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        class="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-2"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Pages
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-2"
                                    >
                                        <li>
                                            <a
                                                href="item.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Item Details</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Explore Collections</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collection.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Collection</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="activity.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Activity</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="rankings.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Rankings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="user.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">User</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="edit-profile.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Edit Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="about.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">About</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="contact.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Contact</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="wallet.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Wallet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="login.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Login</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="404.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Page 404</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tos.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Terms of Service</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="js-nav-dropdown nav-item dropdown group relative">
                                    <a
                                        href="collections.html"
                                        class="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-3"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Explore
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-1"
                                    >
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="bg-light-base mr-3 rounded-xl p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="fill-jacarta-700 h-4 w-4"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">All NFTs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#E4FCF4] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#10B981]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Art</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#FDF7EE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#FEB240]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Collectibles</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#F2EEFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#8358FF]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Domain Names</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#FFEEFA] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#F35BC7]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Music</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#EAF2FE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#428AF8]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Photography</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#EBEDFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#737EF2]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Sports</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#F5FFED] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#8DD059]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Trading Cards</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#FFEEEE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#EF3D3D]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Utility</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="mr-3 rounded-xl bg-[#EEFCFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        class="h-4 w-4 fill-[#46C7E3]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path
                                                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Virtual Worlds</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        class="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                        id="navDropdown-4"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >Resources
                                        <i class="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        class="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-4"
                                    >
                                        <li>
                                            <a
                                                href="help-center.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Help Center</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="platform-status.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Platform Status</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="partners.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Partners</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="single-post.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Single Post</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="newsletter.html"
                                                class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                                            >
                                                <span class="font-display text-jacarta-700 text-sm dark:text-white">Newsletter</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="group">
                                    <a
                                        href="create.html"
                                        class="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                                    >Create</a
                                    >
                                </li>
                            </ul>
                        </nav>

                        {/* <!-- Mobile Connect Wallet / Socials --> */}
                        <div class="mt-10 w-full lg:hidden">
                            <a
                                href="#"
                                class="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                            >
                                Connect Wallet
                            </a>

                            <hr class="dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0" />

                            {/* <!-- Socials --> */}
                            <div class="flex items-center justify-center space-x-5">
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="discord"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path
                                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Actions --> */}
                        <div class="ml-8 hidden lg:flex xl:ml-12">
                            {/* <!-- Wallet --> */}
                            <a
                                href="#"
                                class="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                                aria-label="wallet"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"
                                    />
                                </svg>
                            </a>

                            {/* <!-- Profile --> */}
                            <div class="js-nav-dropdown group-dropdown relative">
                                <button
                                    class="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                                    id="profileDropdown"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    aria-label="profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        class="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    class="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
                                    aria-labelledby="profileDropdown"
                                >
                                    <button
                                        class="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white"
                                        data-tippy-content="Copy"
                                    >
                                        <span class="max-w-[10rem] overflow-hidden text-ellipsis"
                                        >0x7a86c0b064171007716bbd6af96676935799a63e</span
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="dark:fill-jacarta-300 fill-jacarta-500 ml-1 mb-px h-4 w-4"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                                            />
                                        </svg>
                                    </button>

                                    <div class="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
                                        <span class="dark:text-jacarta-200 text-sm font-medium tracking-tight">Balance</span>
                                        <div class="flex items-center">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                class="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                            <span class="text-green text-lg font-bold">10 ETH</span>
                                        </div>
                                    </div>
                                    <a
                                        href="user.html"
                                        class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                            ></path>
                                        </svg>
                                        <span class="font-display text-jacarta-700 mt-1 text-sm dark:text-white">My Profile</span>
                                    </a>
                                    <a
                                        href="edit-profile.html"
                                        class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                            />
                                        </svg>
                                        <span class="font-display text-jacarta-700 mt-1 text-sm dark:text-white">Edit Profile</span>
                                    </a>
                                    <a
                                        href="#"
                                        class="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"
                                            />
                                        </svg>
                                        <span class="font-display text-jacarta-700 mt-1 text-sm dark:text-white">Sign out</span>
                                    </a>
                                </div>
                            </div>

                            {/* <!-- Dark Mode --> */}
                            <a
                                href="#"
                                class="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent js-dark-mode-trigger ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu Actions --> */}
                    <div class="ml-auto flex lg:hidden">
                        {/* <!-- Profile --> */}
                        <a
                            href="edit-profile.html"
                            class="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            aria-label="profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                                />
                            </svg>
                        </a>

                        {/* <!-- Dark Mode --> */}
                        <a
                            href="#"
                            class="js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                                />
                            </svg>
                        </a>

                        {/* <!-- Mobile Menu Toggle --> */}
                        <button
                            class="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                            aria-label="open mobile menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section class="relative py-24">
                    <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="img/wallet/gradient_light.jpg" alt="gradient" class="h-full w-full" />
                    </picture>
                    <div class="container">
                        <h1 class="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">Activity</h1>

                        <div class="lg:flex">
                            <div class="mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10">
                                <a
                                    href="item.html"
                                    class="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/avatars/avatar_2.jpg" alt="avatar 2" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                                            Lazyone Panda
                                        </h3>
                                        <span class="dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm">sold for 1.515 ETH</span>
                                        <span class="text-jacarta-300 block text-xs">30 minutes 45 seconds ago</span>
                                    </div>

                                    <div class="dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_21_sm.jpg" alt="item 2" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                                            NFT Funny Cat
                                        </h3>
                                        <span class="dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm"
                                        >listed by 051_Hart .08095 ETH</span
                                        >
                                        <span class="text-jacarta-300 block text-xs">40 minutes 36 seconds ago</span>
                                    </div>

                                    <div class="dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_22_sm.jpg" alt="item 3" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                                            Prince Ape Planet
                                        </h3>
                                        <span class="dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm">tranferred from 027ab52</span>
                                        <span class="text-jacarta-300 block text-xs">1 hour 15 minutes ago</span>
                                    </div>

                                    <div class="dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_23_sm.jpg" alt="item 3" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                                            Origin Morish
                                        </h3>
                                        <span class="dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm">bid cancelled by 0397fd</span>
                                        <span class="text-jacarta-300 block text-xs">1 hour 55 minutes ago</span>
                                    </div>

                                    <div class="dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="item.html"
                                    class="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg"
                                >
                                    <figure class="mr-5 self-start">
                                        <img src="img/wallet/products/item_24_sm.jpg" alt="item 3" class="rounded-2lg" loading="lazy" />
                                    </figure>

                                    <div>
                                        <h3 class="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                                            Portrait Gallery#029
                                        </h3>
                                        <span class="dark:text-jacarta-200 text-jacarta-500 mb-3 block text-sm">liked by Trina_more</span>
                                        <span class="text-jacarta-300 block text-xs">2 hours 24 minutes ago</span>
                                    </div>

                                    <div class="dark:border-jacarta-600 border-jacarta-100 ml-auto rounded-full border p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path
                                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            <aside class="basis-4/12 lg:pl-5">
                                <form action="search" class="relative mb-12 block">
                                    <input
                                        type="search"
                                        class="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                        placeholder="Search"
                                    />
                                    <button
                                        type="submit"
                                        class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-500 h-4 w-4 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                            ></path>
                                        </svg>
                                    </button>
                                </form>

                                <h3 class="font-display text-jacarta-500 mb-4 font-semibold dark:text-white">Filters</h3>
                                <div class="flex flex-wrap">
                                    <button
                                        class="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Listing</span>
                                    </button>
                                    <button
                                        class="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Bids</span>
                                    </button>
                                    <button
                                        class="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Transfer</span>
                                    </button>
                                    <button
                                        class="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path
                                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Likes</span>
                                    </button>
                                    <button
                                        class="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            class="fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
                                            />
                                        </svg>
                                        <span class="text-2xs font-medium">Purchases</span>
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <div class="modal fade" id="walletModal" tabindex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
                <div class="modal-dialog max-w-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="walletModalLabel">Connect your wallet</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-700 h-6 w-6 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div class="modal-body p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 318.6 318.6"
                                xml:space="preserve"
                                class="mb-4 inline-block h-8 w-8"
                            >

                                <path
                                    fill="#e2761b"
                                    stroke="#e2761b"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M274.1 35.5l-99.5 73.9L193 65.8z"
                                />
                                <path
                                    class="st1"
                                    d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
                                />
                                <path
                                    class="st1"
                                    d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z"
                                />
                                <path
                                    d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z"
                                    fill="#d7c1b3"
                                    stroke="#d7c1b3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z"
                                    fill="#233447"
                                    stroke="#233447"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                                    fill="#cd6116"
                                    stroke="#cd6116"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z"
                                    fill="#e4751f"
                                    stroke="#e4751f"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    class="st6"
                                    d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                                />
                                <path
                                    fill="#c0ad9e"
                                    stroke="#c0ad9e"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                                />
                                <path
                                    fill="#161616"
                                    stroke="#161616"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                                />
                                <path
                                    d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                                    fill="#763d16"
                                    stroke="#763d16"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    class="st6"
                                    d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                                />
                            </svg>
                            <p class="text-center dark:text-white">
                                You don't have MetaMask in your browser, please download it from
                                <a href="https://metamask.io/" class="text-accent" target="_blank" rel="noreferrer noopener">MetaMask</a>
                            </p>
                        </div>

                        <div class="modal-footer">
                            <div class="flex items-center justify-center space-x-4">
                                <a
                                    href="https://metamask.io/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    class="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                                >
                                    Get Metamask
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="buyNowModal" tabindex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
                <div class="modal-dialog max-w-2xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="buyNowModalLabel">Complete checkout</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    class="fill-jacarta-700 h-6 w-6 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div class="modal-body p-6">
                            <div class="mb-2 flex items-center justify-between">
                                <span class="font-display text-jacarta-700 text-sm font-semibold dark:text-white">Item</span>
                                <span class="font-display text-jacarta-700 text-sm font-semibold dark:text-white">Subtotal</span>
                            </div>

                            <div class="dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4">
                                <figure class="mr-5 self-start">
                                    <img src="img/wallet/avatars/avatar_2.jpg" alt="avatar 2" class="rounded-2lg" loading="lazy" />
                                </figure>

                                <div>
                                    <a href="collection.html" class="text-accent text-sm">Elon Musk #709</a>
                                    <h3 class="font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white">
                                        Lazyone Panda
                                    </h3>
                                    <div class="flex flex-wrap items-center">
                                        <span class="dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm">Creator Earnings: 5%</span>
                                        <span
                                            data-tippy-content="The creator of this collection will receive 5% of the sale total from future sales of this item."
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                class="dark:fill-jacarta-300 fill-jacarta-700 h-4 w-4"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div class="ml-auto">
                                    <span class="mb-1 flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                class="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                        </span>
                                        <span class="dark:text-jacarta-100 text-sm font-medium tracking-tight">1.55 ETH</span>
                                    </span>
                                    <div class="dark:text-jacarta-300 text-right text-sm">$130.82</div>
                                </div>
                            </div>

                            <div
                                class="dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between border-b py-2.5"
                            >
                                <span class="font-display text-jacarta-700 font-semibold dark:text-white">Total</span>
                                <div class="ml-auto">
                                    <span class="flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xml:space="preserve"
                                                class="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                                <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path>
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                            </svg>
                                        </span>
                                        <span class="text-green font-medium tracking-tight">1.55 ETH</span>
                                    </span>
                                    <div class="dark:text-jacarta-300 text-right">$130.82</div>
                                </div>
                            </div>

                            <div class="mt-4 flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="buyNowTerms"
                                    class="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                                />
                                <label for="buyNowTerms" class="dark:text-jacarta-200 text-sm"
                                >By checking this box, I agree to Xhibiter's <a href="#" class="text-accent">Terms of Service</a></label
                                >
                            </div>
                        </div>

                        <div class="modal-footer">
                            <div class="flex items-center justify-center space-x-4">
                                <button
                                    type="button"
                                    class="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                                >
                                    Confirm Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer class="dark:bg-jacarta-900 page-footer bg-white">
                <div class="container">
                    <div class="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
                        <div class="col-span-3 md:col-span-4">
                            {/* <a href="index.html" class="mb-6 inline-block">
                                <img src="img/wallet/wallet/logo.png" class="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                                <img src="img/wallet/wallet/logo_white.png" class="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                            </a> */}
                            <p class="dark:text-jacarta-300 mb-12">
                                Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
                            </p>
                            <div class="flex space-x-5">
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="discord"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path
                                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" class="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        class="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
                            <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">Marketplace</h3>
                            <ul class="dark:text-jacarta-300 flex flex-col space-y-1">
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">All NFTs</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Art</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Music</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Domain Names</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Collectibles</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Virtual World</a></li>
                            </ul>
                        </div>

                        <div class="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">Company</h3>
                            <ul class="dark:text-jacarta-300 flex flex-col space-y-1">
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Explore</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">About</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Contact Us</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Our Blog</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">FAQ</a></li>
                            </ul>
                        </div>

                        <div class="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 class="font-display text-jacarta-700 mb-6 text-sm dark:text-white">My Account</h3>
                            <ul class="dark:text-jacarta-300 flex flex-col space-y-1">
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Authors</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Collection</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Author Profile</a></li>
                                <li><a href="#" class="hover:text-accent dark:hover:text-white">Create Item</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
                        <span class="dark:text-jacarta-400 text-sm"
                        >&copy;<span id="year"></span>
Designed By:
                            <a href="https://fltngmmth.com" class="hover:text-accent dark:hover:text-white">Bresnow</a></span>
                        <ul class="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
                            <li><a href="#" class="hover:text-accent dark:hover:text-white">Terms and conditions</a></li>
                            <li><a href="#" class="hover:text-accent dark:hover:text-white">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

            <script src="/js/app.bundle.js"></script>
        </div>
    )
};
