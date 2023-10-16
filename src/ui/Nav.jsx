import { useRef } from "react";

function Nav() {

  const targetElementRef = useRef(null);

  function handleOpen() {
      if (targetElementRef.current) {
        targetElementRef.current.classList.remove("translate-x-[50rem]");
      }
  }

  function handleClose() {
     if (targetElementRef.current) {
       targetElementRef.current.classList.add("translate-x-[50rem]");
     }
  }

  return (
    <nav className="nav m-4 mt-0 pt-4 flex justify-between">
      <img src="/public/images/logo.svg" alt="" className="w-[2rem] h-[2rem]" />
      <ul ref={targetElementRef}
        className={`link fixed top-0 right-0 
       translate-x-[50rem] transition-all duration-300
        text-darkBlue ipad:text-gray w-[15rem] block h-screen pt-[7rem] text-lg font-normal bg-offwhite phone:shadow-[0] shadow-2xl phone:flex phone:justify-center phone:gap-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5rem"
          fill="#000"
          viewBox="0 0 384 512"
          className="absolute top-4 right-4 phone:hidden"
          onClick={handleClose}
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
        <li className="p-2 m-4 text-xl phone:m-0 font-bold text-darkGray transition-all duration-300 hover:text-Orange cursor-pointer phone:text-sm">
          Home
        </li>
        <li className="p-2 m-4 text-xl phone:m-0 font-bold text-darkGray transition-all duration-300 hover:text-Orange cursor-pointer phone:text-sm">
          New
        </li>
        <li className="p-2 m-4 text-xl phone:m-0 font-bold text-darkGray transition-all duration-300 hover:text-Orange cursor-pointer phone:text-sm">
          Popular
        </li>
        <li className="p-2 m-4 text-xl phone:m-0 font-bold text-darkGray transition-all duration-300 hover:text-Orange cursor-pointer phone:text-sm">
          Trending
        </li>
        <li className="p-2 m-4 text-xl phone:m-0 font-bold text-darkGray transition-all duration-300 hover:text-Orange cursor-pointer phone:text-sm">
          Categories
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.5rem"
        fill="#000"
        viewBox="0 0 448 512"
        className="phone:hidden"
        onClick={handleOpen}
      >
        <style>svg</style>
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </nav>
  );
}

export default Nav;
