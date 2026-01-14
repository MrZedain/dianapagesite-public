import Link from "next/link";

export default function DrawingMentor() {
  return (
    <div className="flex flex-col px-6 sm:px-10 pt-12 sm:pt-0 max-w-5xl mx-auto">

      {/* Page title */}
      <h1 className="mb-3 text-3xl text-center font-medium text-[#bababa]">drawing mentor</h1>

      {/* Art Wonderers title */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-semibold text-[#fc1eba] mb-2">Art Wonderers</h1>
        <div className="flex items-center text-2xl gap-2">
          <span>risk</span>
          <span className="text-[#fc1eba] font-bold">play</span>
          <span>enjoy</span>
        </div>
      </div>

      {/* Course content */}
      <div className="space-y-10">

        {/* Intro / upper text */}
        <div className="upperText space-y-4">
          <p className="text-lg leading-relaxed">
            Do you have a dream to write a book, start a painting, make a coat, or design a garden? Are you wanting to think about your life and the world in a new way?
            Or are you already on a creative path but just need to check in for a bit of extra support now and then?
          </p>
          <h3 className="text-2xl font-semibold">8 week <span className="text-[#fc1eba]">Art Wonderers</span> Course 2026</h3>
        </div>

        {/* Image with text wrap on desktop */}
        <div className="sm:float-right sm:ml-8 sm:mb-6 sm:w-1/2 w-full">
          <img 
            className="w-full rounded-lg shadow-lg" 
            src="/DianaView.jpg" 
            alt="Diana drawing outdoors" 
          />
        </div>

        {/* Lower text */}
        <div className="lowerText space-y-6">
          <p className="text-lg leading-relaxed">
            The <span className="text-[#fc1eba]">Art Wonderers</span> will help you determine how you like to make stuff, and also help you find new ways to develop your own <span className="text-[#fc1eba]">creativity</span>.
          </p>

          <ul className="list-inside space-y-1 text-lg leading-relaxed">
            <li><b className="text-[#fc1eba]">Everyone is creative:</b> discover what kind of creative person you are — scattershot creativity vs routine, structured vs organic, methodical or intuitive, haptic or visually minded.</li>
            <li><b className="text-[#fc1eba]">Risk and fail often:</b> the Art Wonderers course is NOT about achieving perfect likenesses. Fast forward failure as a way of learning.</li>
            <li><b className="text-[#fc1eba]">Use the grid to get you off the grid:</b> rediscover that child-like joy of making stuff with your hands again.</li>
            <li><b className="text-[#fc1eba]">Play:</b> lose yourself in the joy of your own process. Learn how to make compositions that sing!</li>
            <li><b className="text-[#fc1eba]">Enjoy creative community:</b> share your process and collaborate with fellow creatives from across the world.</li>
            <li><b className="text-[#fc1eba]">Explore and discover:</b> see how other artists have experienced the world and made art, enlarging and enlivening your own creativity.</li>
          </ul>

          <div className="clear-right"></div>

          <p className="text-lg leading-relaxed">
            <Link href="/contact" className="text-[#fc1eba] underline font-bold">
              Message
            </Link>{" "}
            <strong>for current course details</strong>
          </p>

          <h3 className="text-xl font-semibold notBold"><u>THE STORY</u></h3>
          <p className="text-lg leading-relaxed">
            In 2016, I leapt into the web, pretty much blind, and launched Drawing with the Wondering Artist as an online Drawing course, which soon established itself as a community of '<span className="text-[#fc1eba]">Art Wonderers</span>'.<br />
            The <span className="text-[#fc1eba]">Art Wonderers</span> tuned in each week from across the globe to share their art making process, meeting every weekend on Skype to chat about art, life, and pretty much everything else going on in their neck of the woods!<br />
            In 2025, the <span className="text-[#fc1eba]">Art Wonderers</span> has evolved into a way of life, as more and more people discover the joy of making stuff in their pyjamas.
          </p>
        </div>
      </div>
    </div>
  );
}