
const PageByPage = () => {
        return (
             <div className="flex flex-col px-10 pt-12 sm:pt-0">

                <h1 className='mb-3 text-3xl text-center font-medium text-[#bababa]'>page by page</h1>

                <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10 lg:mt-5">

                    {/*(left) Images lg screens and up */}
                    <div className="hidden lg:flex gap-5 flex-1">
                        {/* 1st col */}
                        <div className="flex flex-col h-full justify-center gap-7">
                            <img src="/books/page-by-page/1.jpg" className="lg:w-80 md:w-72 w-64" alt="" />
                            <img src="/books/page-by-page/2.jpg" className="lg:w-80 md:w-72 w-64" alt="" />
                            <img src="/books/page-by-page/3.jpg" className="lg:w-80 md:w-72 w-64" alt="" />
                        </div>

                        {/* 2nd col */}
                        <div className="flex flex-col h-full justify-center gap-7">
                            <img src="/books/page-by-page/4.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                            <img src="/books/page-by-page/5.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                        </div>

                        {/* 3rd col */}
                        <div className="flex flex-col h-full justify-center gap-7">
                            <img src="/books/page-by-page/6.jpg" className="lg:w-64 md:w-60 w-56" alt="" />
                            <img src="/books/page-by-page/7.jpg" className="lg:w-64 md:w-60 w-56" alt="" />
                        </div>

                    </div>

                    {/*(left) Images md and sm screens */}
                    <div className="flex flex-col lg:hidden gap-5 flex-1">
                        {/* 1st row */}
                        <div className="flex gap-5">
                            <img src="/books/page-by-page/1.jpg" className="w-1/2" alt="" />
                            <img src="/books/page-by-page/4.jpg" className="w-1/2" alt="" />
                        </div>

                        {/* 2nd row */}
                        <div className="flex">
                            <img src="/books/page-by-page/6.jpg" className="w-full" alt="" />
                        </div>

                        {/* 3rd row */}
                        <div className="flex gap-5">

                            <img src="/books/page-by-page/2.jpg" className="w-1/2" alt="" />
                            <img src="/books/page-by-page/3.jpg" className="w-1/2" alt="" />
                        </div>

                        {/* 4th row */}
                        <div className="flex">
                            <img src="/books/page-by-page/7.jpg" className="w-full" alt="" />
                        </div>

                        {/* 5nth row */}
                        <div className="flex justify-center">
                            <img src="/books/page-by-page/5.jpg" className="w-1/2" alt="" />
                        </div>

                    </div>

                    <div className="flex flex-col text-left lg:w-1/3">
                        <h1 className="text-2xl text-center lg:text-left tracking-wide leading-snug text-[#bababa] mb-6">
                            LIMITED EDITION HANDBOUND BOOK
                        </h1>
                        <p className=" text-gray-700 text-sm font-bold">
                            A limited edition reproduction of the sketchbooks of Diana Page, designed and hand bound by Lucy Stuart-Clark.
                        </p>

                        <p className=" text-gray-700 text-sm mt-2">
                            "Drawing is <span className="text-[#fc1eba]">fundamental</span> to me, a way of being in the world. The first edition of 21 books originate from a sketchbook kept during ten days in a government quarantine facility, and also include sketches of South African fynbos, Istanbul, ancient Turkish sites. Also present are the ‘Delivery Bag Goddeses’ made for the walls of my quarantine room."
                        </p>

                        <p className=" text-gray-700 text-sm mt-2">
                            Page by Page <br />
                            EDITION: Limited edition 21 copies numbered and signed. <br />
                            FORMAT: Every copy of Page by Page has an original drawing by Page inset on the cover. <br />
                            SIZE: 24 x 190 x 195 cm <br />
                            PAGES/books: 74 pages <br />
                            GATEFOLDS: 3 sets of horizontal gatefolds and 2 sets of vertical gatefolds <br />
                            PRINTING: Digitally printed by Wetink Fine Art Printing (Pretoria, South Africa) with archival ink <br />
                            PAPER: Munken Polar 170 gsm <br />
                            BINDING: hand-bound by Lucy Stuart-Clark <br />
                            PRICE: On request <br />
                        </p>
                    </div>
                </div>

            </div>
        );
    }
    export default PageByPage;