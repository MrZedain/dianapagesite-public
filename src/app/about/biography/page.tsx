export default function Biography() {
  return (
    <div className="flex flex-col px-6 sm:px-10 pt-12 sm:pt-0 max-w-5xl mx-auto">
      <h1 className="mb-8 text-3xl text-center font-medium text-[#bababa]">
        biography
      </h1>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
        {/* Image */}
        <div className="flex flex-col items-center shrink-0">
          <img
            src="/dianabio2.jpg"
            className="w-50 border-2 border-[#a31679]"
            alt="Photo of Diana Page"
          />
          <h5 className="mt-2 text-xs text-gray-600 text-center sm:text-left">
            (Photograph by Monica Fritz)
          </h5>
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 space-y-5 text-gray-800 leading-relaxed">
          <p>
            <span className="text-[#fc1eba]">Diana Page</span> is a South African artist based in Istanbul, Turkey.
          </p>

          <p>
            Throughout her career, <span className="text-[#fc1eba]">Diana Page</span> has exhibited her work extensively
            and has participated in significant events and collaborations. A
            proud moment was her involvement in a collaborative community
            project, designing carpets for the Judges' Chambers of South
            Africa's New Constitutional Court. In 2008 she directed the second
            in a trilogy of city-based rooftop performances titled{" "}
            <i className="text-[#fc1eba]">Pitch Blue</i> in Brooklyn, NYC.
          </p>

          <p>
            Diana's work has been showcased in various prestigious venues. In
            2024 she was selected for <a className="text-[#fc1eba] underline" target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://womeninartfair.com/wp-content/uploads/2023/10/WIAF-catalogue-c.pdf&ved=2ahUKEwizpJ6az_uRAxVb_7sIHV1HEt0QFnoECDMQAQ&usg=AOvVaw1GyVTgcol6XInBiSc0WUxU">Women in Art Fair</a> held at the Mall
            Galleries, London. The recent touring exhibition{" "}
            <a className="text-[#fc1eba] underline" target="_blank" href="https://www.art.co.za/exhibitions/walking-on-a-rim-of-light-by-diana-page">Walking on a Rim of Light</a> brought together her artistic
            trajectory, spanning South Africa and Turkey, interweaving drawing,
            performance, and painting. Notably, the tour featured a museum show
            at Oliewenhuis in Bloemfontein.
          </p>

          <p>
            Another noteworthy exhibition, <a className="text-[#fc1eba] underline" target="_blank" href="https://yabangee.com/trans-idyllic-diana-page/">Trans-Idyllic</a>, curated by
            Lewis Johnson in Istanbul, drew connections between Diana's work and
            post-modern painters such as Sigmar Polke. Furthermore,{" "}
            <i>Akıs Flow</i>, curated by Jochen Proehl at BAUART, presented the
            flow of <span className="text-[#fc1eba]">Diana's</span> work through a digital presentation of her
            sketchbooks alongside her paintings.
          </p>

          <p>
            These accomplishments and exhibitions have solidified <span className="text-[#fc1eba]">Diana Page's</span>
            reputation as an artist who continually explores new artistic
            territories, diverse creative mediums, and inspires others through
            her evocative works.
          </p>
        </div>
      </div>
    </div>
  );
}
