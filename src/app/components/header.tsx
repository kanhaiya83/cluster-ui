import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center self-stretch p-6 text-base shadow-sm backdrop-blur-sm bg-white bg-opacity-90 max-md:px-5">
      <Link
        href={"/"}
        className="flex gap-5 justify-between py-0.5 pl-1.5 w-full max-md:flex-wrap max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e429c22cc15df02a7e3af9c56d1dac74f9899fc8650251ab7901a1bab339e69d?"
          className="shrink-0 my-auto w-8 aspect-square"
        />
        <div className="flex flex-wrap gap-5 pl-3">
          <div className="flex flex-auto gap-5 justify-between my-auto whitespace-nowrap leading-[153.6%] text-zinc-500 max-md:flex-wrap">
            <div>Explore</div>
            {/* <div className="leading-[150%]">Pricing</div>
            <div className="leading-[155%]">Docs</div>
            <div className="leading-[151%]">Blog</div>
            <div>Newsletter</div>
            <div>Changelog</div> */}
          </div>
          <div className="flex gap-3">
            <div className="my-auto leading-[150%] text-zinc-500">Sign in</div>
            <div className="justify-center px-3 leading-10 text-white bg-black">
              Get started
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
