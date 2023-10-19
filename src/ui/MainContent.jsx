export default function MainContent() {
  return (
    <section className="h-calc">
      <div className="p-1 tablet:flex gap-8 justify-center tablet:mb-[-6.5rem]">
        <div className="">
          <picture className="">
            <source
              media="(min-width: 708px)"
              srcSet="/images/image-web-3-desktop.jpg"
            />
            <img
              src="/images/image-web-3-mobile.jpg"
              className="w-full h-[50%] object-cover"
              alt="Description of the image"
            />
          </picture>
          <div className="mt-4 phone:grid grid-cols-2 phone:gap-8 place-items-center">
            <h1 className="text-4xl font-[800] my-2">
              The Bright Future of Web 3.0?
            </h1>
            <div className="text-sm text-gray mb-1 ">
              <p className="mb-3">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="inline-block bg-Red py-2 px-4 my-2 text-sm uppercase hover:bg-darkBlue transition-all duration-300 text-offwhite font-medium tracking-wider">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-darkBlue text-offwhite h-[fit-content] p-4 laptop:pb-2">
          <h1 className="text-Orange text-2xl font-[700]">New</h1>
          <article className="my-2">
            <h3 className="text-[1rem] mb-2 font-bold hover:text-Orange transition-all duration-300">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-[0.7rem] font-semibold">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
          <hr />
          <article className="my-2">
            <h3 className="text-[1rem] mb-2 font-bold hover:text-Orange transition-all duration-300">
              The Downsides of AI Artistry
            </h3>
            <p className="text-[0.7rem] font-semibold">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <hr />
          <article className="mt-2">
            <h3 className="text-[1rem] mb-2 font-bold hover:text-Orange transition-all duration-300">
              Is VC Funding Drying Up?
            </h3>
            <p className="text-[0.7rem] font-semibold">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </div>

      </div>

      <div className="p-4 tablet:grid tablet:grid-cols-2 big:grid-cols-3 gap-2">
        <article className="flex gap-4 items-center mb-4">
          <img
            src="/images/image-top-laptops.jpg"
            className="w-[100px]"
            alt=""
          />
          <div>
            <span className="text-3xl font-bold text-darkBlue opacity-70">
              01
            </span>
            <h3 className="text-darkBlue text-[1.25rem] font-bold my-2 transition-all duration-300 hover:text-Red cursor-pointer">
              Reviving Retro Pcs
            </h3>
            <p className="text-darkGray font-semibold text-[0.825rem]">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>
        <article className="flex gap-4 items-center mb-4">
          <img src="/images/image-retro-pcs.jpg" className="w-[100px]" alt="" />
          <div>
            <span className="text-3xl font-bold text-darkBlue opacity-70">
              02
            </span>
            <h3 className="text-darkBlue text-[1.25rem] font-bold my-2 transition-all duration-300 hover:text-Red cursor-pointer">
              Top 10 Laptops of 2022
            </h3>
            <p className="text-darkGray font-semibold text-[0.825rem]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </article>
        <article className="flex gap-4 items-center">
          <img
            src="/images/image-gaming-growth.jpg"
            className="w-[100px]"
            alt=""
          />
          <div>
            <span className="text-3xl font-bold text-darkBlue opacity-70">
              03
            </span>
            <h3 className="text-darkBlue text-[1.25rem] font-bold my-2 transition-all duration-300 hover:text-Red cursor-pointer">
              The Growth of Gaming
            </h3>
            <p className="text-darkGray font-semibold text-[0.825rem]">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}