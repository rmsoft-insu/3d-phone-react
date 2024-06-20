import { appleImg, bagImg, searchImg } from "../utils";

export const Navbar = () => {
  return (
    <>
      <header className="flex w-full px-5 py-5 sm:px-10">
        <nav>
          <img src={appleImg} alt="Apple" width={14} height={18} />
          <div>
            {["Phones", "Macbooks", "Tablets"].map((nav) => (
              <div key={nav}>{nav}</div>
            ))}
          </div>

          <div>
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div>
        </nav>
      </header>
    </>
  );
};
