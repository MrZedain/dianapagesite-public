export default function CV() {
    return (
        <div className="flex flex-col px-6 sm:px-10 pt-12 sm:pt-0 max-w-5xl mx-auto">
            <h1 className="mb-8 text-3xl text-center font-medium text-[#bababa]">
                cv
            </h1>


            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">

                {/* Image */}
                <div className="flex flex-col items-center shrink-0">
                    <img
                        src="/dianacv.jpg"
                        className="w-50  border border-[#fc1eba]"
                        alt="Photo of Diana Page"
                    />
                    <h5 className="mt-2 text-xs text-gray-600 text-center">
                        (Photograph by  the late Elio Montanari)
                    </h5>
                </div>
                <div className="flex flex-col flex-1 space-y-5 text-gray-800">

                    {/* SECTION */}
                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">Education</h3>
                        <ul className="space-y-3">
                            <li>
                                Rhodes University, South Africa, 1992 <br />
                                <span className="text-sm text-[#fc1eba]">
                                    Master of Fine Art, with distinction
                                </span>
                            </li>
                            <li>
                                University of Natal, Pietermaritzburg, South Africa, 1986 <br />
                                <span className="text-sm text-[#fc1eba]">
                                    Bachelor of Fine Art & History of Art, with distinction
                                </span>
                            </li>
                            <li>
                                University of Cape Town, South Africa, 1988 <br />
                                <span className="text-sm text-[#fc1eba]">
                                    Higher Diploma of Education, PGS
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">
                            Solo Exhibitions
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><span className="text-[#fc1eba]">Par par page</span>, Ateliers Ouvertes, Cité Internationale des Arts, Paris, 2024</li>
                            <li><span className="text-[#fc1eba]">Artist’s residency</span>, Cité Internationale des Arts, Paris, 2024</li>
                            <li><span className="text-[#fc1eba]">Walking on a rim of light</span>, IS Art Gallery, Stellenbosch, 2023</li>
                            <li><span className="text-[#fc1eba]">Walking on a rim of light</span>, Oliewenhuis Art Museum, Bloemfontein, 2022</li>
                            <li><span className="text-[#fc1eba]">Shearwater</span>, Henry George Gallery, Johannesburg, 2019</li>
                            <li><span className="text-[#fc1eba]">Trans-Idyllic</span>, Buyukdere 35, Istanbul, 2017</li>
                            <li><span className="text-[#fc1eba]">Akis / Flow</span>, BAUART, Bahçeşehir University, Istanbul, 2015</li>
                            <li><span className="text-[#fc1eba]">Ships and Dreams</span>, Arnavutköy Art Gallery, Istanbul, 2010</li>
                            <li><span className="text-[#fc1eba]">Night Fishing</span>, 360 Istanbul, 2007</li>
                            <li><span className="text-[#fc1eba]">Unknown Cities</span>, Buchanan Square, Woodstock, 2006</li>
                            <li><span className="text-[#fc1eba]">Paintings & Drawings</span>, AVA, Cape Town, 2001</li>
                            <li><span className="text-[#fc1eba]">Diana Page: Paintings</span>, Chelsea Gallery, Cape Town, 2000</li>
                            <li><span className="text-[#fc1eba]">Feeling the Spaces</span>, Chelsea Gallery, Cape Town, 1996</li>
                            <li><span className="text-[#fc1eba]">Pilgrims</span>, Chelsea Gallery, Cape Town, 1995</li>
                            <li><span className="text-[#fc1eba]">Going Home</span>, Market Galleries, Johannesburg, 1993</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">
                            Group Exhibitions (selected)
                        </h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><span className="text-[#fc1eba]">Small pains, great songs</span>, PASAJ Istanbul, international touring, 2025</li>
                            <li><span className="text-[#fc1eba]">Women’s Day Exhibition</span>, Buyukdere 35, Istanbul, 2024</li>
                            <li><span className="text-[#fc1eba]">Gallery ONE962</span>, January Art Prize & Purple, online, 2024</li>
                            <li><span className="text-[#fc1eba]">The Other Art Fair</span>, Truman Brewery, London, 2023</li>
                            <li><span className="text-[#fc1eba]">Women in Art Fair</span>, Mall Galleries, London, 2023</li>
                            <li><span className="text-[#fc1eba]">Borderless Art Book Fair</span>, Arter, Istanbul, 2022–23</li>
                            <li><span className="text-[#fc1eba]">Imitation of Life</span>, Teresa Lizamore Gallery, Johannesburg, 2021</li>
                            <li><span className="text-[#fc1eba]">Jack Ginsberg Artist’s Book Collection</span>, WAM, Johannesburg, 2019</li>
                            <li><span className="text-[#fc1eba]">Between Colour and Line</span>, Sainte Pulcherie, Istanbul, 2012</li>
                            <li><span className="text-[#fc1eba]">Imprints</span>, Axis Gallery, New York, 2005</li>
                            <li><span className="text-[#fc1eba]">District Six Exhibition</span>, National Gallery, Cape Town, 1995</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">Residencies</h3>
                        <ul className="space-y-2">
                            <li>2018 — Cité Internationale des Arts, Paris</li>
                            <li>2012 — Bag Factory, Johannesburg</li>
                            <li>2008 — Platform Garanti, Istanbul</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">Awards</h3>
                        <ul className="space-y-2">
                            <li><span className="text-[#fc1eba]">Ampersand Fellowship</span>, New York, 2008</li>
                            <li><span className="text-[#fc1eba]">New Constitutional Court carpet commission</span>, 2003</li>
                            <li><span className="text-[#fc1eba]">CONVENCO Public Art Competition</span>, Runner-up, 2002</li>
                            <li><span className="text-[#fc1eba]">National Student Art Competition</span>, Silver Award, 1986</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">Projects</h3>
                        <ul className="space-y-2">
                            <li><span className="text-[#fc1eba]">Konuşma Zamanı</span>, exhibition & public billboard project, Istanbul, 2021</li>
                            <li><span className="text-[#fc1eba]">The Purple Cloak</span>, Irma Stern Art Museum, 2016</li>
                            <li><span className="text-[#fc1eba]">Founder</span>, Art Wonderers Worldwide, 2015–present</li>
                            <li><span className="text-[#fc1eba]">Pitch Blue</span>, performance, New York, 2008</li>
                            <li><span className="text-[#fc1eba]">Boudoir Biscuits</span>, founding member, Cape Town, 1994</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-4 text-xl font-medium underline">Collections</h3>

                        <ul className="space-y-1 text-sm sm:text-base text-[#fc1eba]">
                            <li>Jack Ginsberg Artists’ Book Collection (WAM, Johannesburg)</li>
                            <li>ABSA Bank</li>
                            <li>BP Southern Africa</li>
                            <li>Citibank</li>
                            <li>Grindrod</li>
                            <li>HSBC</li>
                            <li>University of Cape Town</li>
                            <li>Old Mutual</li>
                            <li>Nando’s England</li>
                            <li>Lady Graaff Collection</li>
                            <li>Prof. Semra Kahraman Collection</li>
                            <li>Private collections worldwide</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
