import Link from "next/link";

export default function Statement() {
  return (
    <div className="flex flex-col px-6 sm:px-10 pt-12 sm:pt-0 max-w-5xl mx-auto">
      <h1 className="mb-10 text-3xl text-center font-medium text-[#bababa]">
        statement
      </h1>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
        {/* Image */}
        <div className="flex flex-col items-start shrink-0">
          <img
            src="/collections/rewilding/Summer-Garden-Studio.jpg"
            className="w-60"
            alt="Photo of Diana Page"
          />
          <h5 className="mt-2 text-xs text-gray-600 sm:text-left">
            Piece: Summer Garden Studio <br/>
            Collection: <Link href={'/gallery/rewilding'} className="underline text-[#fc1eba]">rewilding</Link>
          </h5>
        </div>

        <div className="flex flex-col flex-1 space-y-5 text-gray-800">
          <p>
            Drawing is fundamental to me, a way of being in the world.
          </p>

          <p>
            I am interested in cities as sites of human energy in flux. My paintings
            embrace both the mundane and the poetic aspects of the city, within the
            confines of the built environment and then sometimes into wilder places
            of water, forest and land. Sometimes the paintings are paeans to the
            city’s resilient beauty.
          </p>

          <p>
            The paintings become arenas in which the way that I work echoes the city
            itself: the unpredictability, the search for order out of chaos, that
            comes to express itself either in highly layered paintings, jazzy in
            their embrace of evolving abstract form; or the paintings happen just
            like drawings representing a gathering of energy, gestural and fluid,
            often leaving space and empty, unworked areas or raw canvas allowing
            breath and a sense of freedom to prevail amidst the swathes of colour
            and mark making.
          </p>
        </div>
      </div>
    </div>
  );
}
