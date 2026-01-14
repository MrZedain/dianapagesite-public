
const OdeToALighterWorld = () => {
    return (
        <div className="flex flex-col px-10 pt-12 sm:pt-0">

            <h1 className='mb-3 text-3xl text-center font-medium text-[#bababa]'>ode to a lighter world</h1>

            <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10 lg:mt-5">

                {/*(left) Images lg screens and up */}
                <div className="hidden lg:flex gap-10 flex-1 p-3">
                    {/* 1st col */}
                    <div className="flex flex-col h-full justify-center gap-7">
                        <img src="/books/ode-to-a-lighter-world/1.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                        <img src="/books/ode-to-a-lighter-world/2.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                        <img src="/books/ode-to-a-lighter-world/3.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                    </div>

                    {/* 2nd col */}
                    <div className="flex flex-col h-full justify-center gap-7">
                        <img src="/books/ode-to-a-lighter-world/4.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                        <img src="/books/ode-to-a-lighter-world/5.jpg" className="lg:w-72 md:w-64 w-60" alt="" />
                    </div>

                </div>

                {/*(left) Images md and sm screens */}
                <div className="flex flex-col lg:hidden gap-5 flex-1">
                    {/* 1st row */}
                    <div className="flex gap-5">
                        <img src="/books/ode-to-a-lighter-world/1.jpg" className="w-1/2" alt="" />
                        <img src="/books/ode-to-a-lighter-world/2.jpg" className="w-1/2" alt="" />
                    </div>

                    {/* 2rd row */}
                    <div className="flex gap-5">

                        <img src="/books/ode-to-a-lighter-world/3.jpg" className="w-1/2" alt="" />
                        <img src="/books/ode-to-a-lighter-world/4.jpg" className="w-1/2" alt="" />
                    </div>

                    {/* 3th row */}
                    <div className="flex">
                        <img src="/books/ode-to-a-lighter-world/5.jpg" className="w-full" alt="" />
                    </div>

                </div>

                <div className="flex flex-col text-left lg:w-1/3 pb-5 lg:pb-0">
                  <h1 className="text-2xl text-center lg:text-left tracking-wide leading-snug text-[#bababa] mb-6">
                        ORIGINAL ARTIST BOOK
                    </h1>

        
                        <p className=" text-gray-700 text-sm mt-2">
                        A series of 9 palm sized original Artist's Books created for “Small pains, great songs” a
                        travelling Artist's Book Collection, curated by <b>Seçil Yaylalı</b> hosted by <a className="text-[rgb(209,28,185)]" href="https://en.pasaj.org/" target="_blank" rel="noopener noreferrer">PASAJ Istanbul</a> in
                        collaboration with Barin Binding Studio and Turan Coşkun
                    </p>

                    <p className=" text-gray-600 text-sm font-semibold text-center lg:text-left">
                        (Photographs taken by <b>Monica Fritz</b>)
                    </p>

                </div>
            </div>

        </div>
    )

};

export default OdeToALighterWorld;
