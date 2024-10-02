import Link from "next/link"

export default function Header() {
    return (
      <div className="header  justify-between items-center px-20 py-4 ">
        <Link href={"/"}>
          <div className="logo text-white text-2xl font-bold">
            Maryam Hussain
          </div>
        </Link>
        <div className="header-button  ">
          <Link href="/" className="text">
            Home
          </Link>
          <Link href="/about" className="text">
            About
          </Link>
          <Link href="/portfolio" className="text">
            Portfolio
          </Link>
          <Link href="/contact" className="text">
            Contact
          </Link>
        </div>
      </div>
    );
}