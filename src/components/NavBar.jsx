import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-center p-4 gap-4 bg-teal-600 text-white">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/products"}>Products</Link>
    </div>
  );
}
