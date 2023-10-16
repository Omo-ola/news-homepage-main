export default function MainContent() {
  return (
    <section>
      <div className="p-2 tablet:flex gap-8">
        <div className="">
          <picture className="">
            <source
              media="(min-width: 708px)"
              srcSet="/public/images/image-web-3-desktop.jpg"
            />
            <img
              src="/public/images/image-web-3-mobile.jpg"
              className="w-full"
              alt="Description of the image"
            />
          </picture>
          <div className="mt-4 phone:grid grid-cols-2 phone:gap-8 place-items-center">
            <h1 className="text-4xl font-[800] my-3 ">
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

        <div className=" bg-darkBlue text-offwhite p-4 laptop:pb-0">
          <h1 className="text-Orange text-2xl font-[700]">New</h1>
          <article className="my-4">
            <h3 className="text-lg mb-4 font-bold hover:text-Orange transition-all duration-300">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-sm font-semibold">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
          <hr />
          <article className="my-4">
            <h3 className="text-lg mb-4 font-bold hover:text-Orange transition-all duration-300">
              The Downsides of AI Artistry
            </h3>
            <p className="text-sm font-semibold">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <hr />
          <article className="mt-4">
            <h3 className="text-lg mb-2 font-bold hover:text-Orange transition-all duration-300">
              Is VC Funding Drying Up?
            </h3>
            <p className="text-sm font-semibold">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </div>
      </div>

      <div className="p-4 tablet:grid tablet:grid-cols-2 big:grid-cols-3 gap-2">
        <article className="flex gap-4 items-center mb-4">
          <img
            src="/public/images/image-top-laptops.jpg"
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
          <img
            src="/public/images/image-retro-pcs.jpg"
            className="w-[100px]"
            alt=""
          />
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
            src="/public/images/image-gaming-growth.jpg"
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

//  <div className="flex flex-col ipad:grid grid-rows-3 grid-cols-3 gap-2 h-calc p-4">
//       <div className="bg-Red row-start-1 row-end-3 col-start-1 col-end-3">
//         <div className="flex flex-col">
//           <div className="">
//             <img
//               src="/public/images/image-web-3-desktop.jpg"
//               className="hidden phone:block w-[100%] h-[50%]"
//               alt=""
//             />
//             <img
//               src="/public/images/image-web-3-mobile.jpg"
//               className="phone:hidden"
//               alt=""
//             />
//           </div>

//           <article>
//             <div className="">
//               <h1 className="text-5xl font-bold ">
//                 The Bright Future of Web 3.0?
//               </h1>
//             </div>

//             <div className="text-lg text-gray mb-1 ">
//               <p className="w-[20rem]">
//                 We dive into the next evolution of the web that claims to put
//                 the power of the platforms back into the hands of the people.
//                 But is it really fulfilling its promise?
//               </p>
//               <button className="inline-block bg-Red py-2 px-4 my-2 text-sm uppercase text-offwhite font-medium tracking-wider">
//                 Read more
//               </button>
//             </div>
//           </article>
//         </div>
//       </div>

//       <div className="bg-darkBlue text-offwhite p-4 col-start-3 col-end-auto row-start-1 row-end-[-2] flex flex-col justify-between gap-y-1">
//         <h1 className="text-Orange text-3xl font-semibold">New</h1>
//         <div>
//           <h3 className="text-xl my-2">Hydrogen VS Electric Cars</h3>
//           <p className="text-sm tablet:text-sm big:text-[1rem]">
//             Will hydrogen-fueled cars ever catch up to EVs?
//           </p>
//         </div>
//         <hr className="" />
//         <div>
//           <h3 className="text-xl my-2">The Downsides of AI Artistry</h3>

//           <p className="text-sm tablet:text-sm big:text-[1rem]">
//             What are the possible adverse effects of on-demand AI image
//             generation?
//           </p>
//         </div>
//         <hr className="" />
//         <div>
//           <h3 className="text-xl my-2">Is VC Funding Drying Up?</h3>

//           <p className="text-sm tablet:text-sm big:text-[1rem]">
//             Private funding by VC firms is down 50% YOY. We take a look at what
//             that means.
//           </p>
//         </div>
//       </div>

//       <div className="bg-green-200 p-4 row-start-3 row-end-auto col-start-1 col-end-[-1]">
//         Content for the second row, third column
//       </div>
//     </div>
