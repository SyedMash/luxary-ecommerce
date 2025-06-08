import Image from "next/image";

const Navbar = () => {
  return (
    <header className="">
      <nav className="fixed top-0 left-0 z-50 w-full bg-black p-2 text-white md:p-4">
        <div className="flex items-center justify-between">
          <button className="p-2">Menu</button>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Image
              src={"/backgrounds/logo.svg"}
              alt="logo"
              width={180}
              height={30}
              className="w-32 md:w-44"
            />
          </div>

          <div className="flex">Icons</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
