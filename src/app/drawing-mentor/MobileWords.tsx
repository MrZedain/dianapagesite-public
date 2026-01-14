'use client'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function MobileWords() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLDivElement[]>([]);

  const words = ["risk", "play", "enjoy"];

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setScrollProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const wordHeights = wordRefs.current.map(el => el?.offsetHeight || 0);
  const totalHeight = wordHeights.reduce((a, b) => a + b, 0);

  let cumulativeTop = 0;

  return (
    <div className="flex h-screen">
      {/* LEFT WORD RAIL */}
      <div className="w-10 flex flex-col items-center justify-around relative">
        {words.map((word, idx) => {
          const height = wordHeights[idx] || 1;
          const start = cumulativeTop;
          const end = start + height;

          const pinkTop = scrollProgress * (totalHeight - height);

          const topClip = Math.max(0, (pinkTop - start) / height) * 100;
          const bottomClip = Math.max(0, (end - pinkTop - height) / height) * 100;

          cumulativeTop += height;

          return (
            <div
              key={word}
              ref={el => {
                if (el) wordRefs.current[idx] = el;
              }}
              className="relative flex flex-col items-center"
            >
              {/* Base letters */}
              <div className="flex flex-col items-center text-gray-800 text-3xl font-medium leading-none">
                {word.split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>

              {/* Pink overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center text-[#fc1eba] text-3xl font-medium leading-none overflow-hidden pointer-events-none"
                style={{
                  clipPath: `inset(${topClip}% 0 ${bottomClip}% 0)`
                }}
              >
                {word.split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto px-3 py-10 space-y-6"
      >
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

          <h3 className="notBold"><u>THE STORY</u></h3>
          <p>
            "In 2016, I leapt into the web, pretty much blind! and launched Drawing with the Wondering Artist as an online Drawing course, which soon established itself as a community of 'Art Wonderers'.<br />
            The Art Wonderers tuned in each week from across the globe to share their art making process, meeting every weekend on Skype to chat about art, life, and pretty much everything else going on in their neck of the woods!<br />
            In 2025, the Art Wonderers has evolved into a way of life, as more and more people discover the joy of making stuff in their pyjamas."
          </p>
        </div>
      </div>
    </div>
  );
}
