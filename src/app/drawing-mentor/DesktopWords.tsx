'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export function DesktopWords() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = ["risk", "play", "enjoy"];
  const numWords = words.length;
    
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pinkHeight = 60;
  const containerHeight = numWords * pinkHeight;
  const pinkTop = scrollProgress * (containerHeight - pinkHeight);

  return (
    <div className="flex flex-col">
      {/* Left: sticky words */}
      {/* <div className="flex flex-col justify-center w-60 px-10 py-10 sticky top-0 h-screen">
        <div className="flex flex-col gap-5 h-full">
          {words.map((word, idx) => {
            const start = idx * pinkHeight;
            const end = start + pinkHeight;

            const topClip = Math.max(0, (pinkTop - start) / pinkHeight) * 100;
            const bottomClip = Math.max(
              0,
              (end - pinkTop - pinkHeight) / pinkHeight
            ) * 100;

            return (
              <h1
                key={word}
                className="text-5xl relative"
                style={{ lineHeight: 1.4 }}
              >
                <span className="text-gray-800 relative z-10">{word}</span>
                <span
                  className="absolute top-0 left-0 text-[#fc1eba] overflow-hidden z-20"
                  style={{ clipPath: `inset(${topClip}% 0 ${bottomClip}% 0)` }}
                >
                  {word}
                </span>
              </h1>
            );
          })}
        </div>
      </div> */}
      <div className="flex items-center justify-around">
        <h1>risk</h1>
        <h1 className="text-pink-500">play</h1>
        <h1>enjoy</h1>
      </div>

      {/* Right: scrollable content */}
      <div className="flex-1 px-6">
        <div className="space-y-6 pb-48 pt-10">
          <div className="upperText">
            <p>
              Do you have a dream to write a book, start a painting, make a coat, design a garden? Are you wanting to think about your life and the world in a new way?
              Or are you already on a creative path but just need to check-in for a bit of extra support now and then?
            </p>

            <h3>8 week Art Wonderers Course 2025</h3>
          </div>

          <img className="image1 w-full rounded" src="/flippingthrough.jpg" alt="Flipping through course" />

          <div className="lowerText">
            <h3>Join the art wonderers' 8 week drawing course</h3>
            <p>
              The Art Wonderers will help you determine how you like to make stuff, and also help you find new ways to develop your own creativity. <br />
              <b>Everyone is creative</b>, discover what kind of creative person you are:<br />
              Scattershot creativity vs routine?<br />
              Structured vs organic?<br />
              Methodical or intuitive?<br />
              Haptic or visually minded?<br />
              <b>Risk and fail often</b>. The Art Wonderers course is NOT about achieving perfect likenesses. Fast forward failure as a way of learning.<br />
              <b>Use the grid to get you off the grid!</b> Rediscover that child-like joy of making stuff with your hands again.<br />
              <b>Play.</b> Lose yourself in the joy of your own process. Learn how to make compositions that sing!<br />
              <b>Enjoy creative community.</b> Share your process and chat and collaborate with fellow creatives from across the world.<br />
              <b>Explore and discover</b> how <b>other artists</b> have seen the world and made art, as a way of enlarging and enlivening your own.
            </p>

            <p>
              <Link href="/contact" className="text-[#d11cb9] underline">
                Message
              </Link>{" "}
              <strong>for current course details</strong>
            </p>

            <h3 className='notBold'><u>THE STORY</u></h3>
            <p>
              "In 2016, I leapt into the web, pretty much blind! and launched Drawing with the Wondering Artist as an online Drawing course, which soon established itself as a community of 'Art Wonderers'.<br />
              The Art Wonderers tuned in each week from across the globe to share their art making process, meeting every weekend on Skype to chat about art, life, and pretty much everything else going on in their neck of the woods!<br />
              In 2025, the Art Wonderers has evolved into a way of life, as more and more people discover the joy of making stuff in their pyjamas."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
