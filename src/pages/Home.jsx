import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-3xl p-5 text-center">Welcome to Our App</h1>
      <button type="button" className="">
        <Link to={"/about"}>Go to About</Link>
      </button>
      <Link to={"/contact"}>Go to Contact</Link>
    </div>
  );
}
