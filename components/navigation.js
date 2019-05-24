import Link from "next/link";
import CartCount from "../components/cartCount.js";

function BuntingNav() {
  return (
    <nav className="nav-bar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/explore"><a>Explore</a></Link>
      <Link href="/cart"><a className="fixed-right-nav"><CartCount /></a></Link>
    </nav>
  )
}

export default BuntingNav;
