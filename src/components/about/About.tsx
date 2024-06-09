function About() {
  return (
    <main className="about-page-container flex flex-col overflow-y-hidden h-full w-full text-pewter-900 p-3 space-y-6">
      <div className="about-page-header">
        <h2 className="text-4xl font-serif text-pewter-900">About Patate</h2>
        <p className="page-description text-sm">
          The world&rsquo;s fluffiest potato
        </p>
      </div>
      <div className="about-page-content flex flex-col lg:flex-row w-full  p-9 place-content-center max-md:space-y-6 overflow-y-scroll">
        <div className="about-page-content-left flex w-full lg:w-1/2 items-center px-3">
          <p>
            Welcome to my whimsical world: I&rsquo;m Patate, the fluffiest
            feline with golden eyes and an attitude that screams &quot;I’m
            judging you&quot;. But underneath it all, I&rsquo;m really just a
            soft ball of sugary sweetness. I live with my two favorite humans,
            who I have carefully trained to serve my every need.
            <br />
            On this blog, you&rsquo;ll find tales of my daily escapades, from
            epic (yet brief) adventures beyond the front yard to my latest and
            greatest naps in the most unexpected places. I share my favorite
            things – like the perfect sunbeam spot or the art of mastering the
            meow – along with my top tips and tricks for living your best cat
            life.
            <br />
            Think of me as your furry guru, guiding you through the intricacies
            of feline finesse. Whether it’s the cunning art of begging for
            treats or the secret to a purrfect paw lick, I’ve got you covered.
            <br />
            So, sit back, relax, and let me take you on a journey through the
            eyes of a truly pampered and somewhat sassy cat. Welcome to my
            kingdom!
          </p>
        </div>
        <div className="homepage-content-right flex h-full p-3 md:w-2/4 place-content-center items-center">
          <img
            src="/judgement.jpg"
            alt="Fluffy cat with judgmental golden eyes"
            className="rounded-2xl  saturate-50 w-[60%]"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
