import BrandLogo from "../../public/images/brand_logo.png";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white px-14 h-[60px] flex justify-between items-center shadow-md">
      <div>
        <img src={BrandLogo} alt="Nike Logo" className="w-16" />
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <a className="uppercase font-bold text-gray-800 hover:text-indigo-500 transition" href="#">menu</a>
          </li>
          <li>
            <a className="uppercase font-bold text-gray-800 hover:text-indigo-500 transition" href="#">location</a>
          </li>
          <li>
            <a className="uppercase font-bold text-gray-800 hover:text-indigo-500 transition" href="#">about</a>
          </li>
          <li>
            <a className="uppercase font-bold text-gray-800 hover:text-indigo-500 transition" href="#">contact</a>
          </li>
        </ul>
      </nav>

      <div>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition">
          Log in
        </button>
      </div>
    </header>
  )
}