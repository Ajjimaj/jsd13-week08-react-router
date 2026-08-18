import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="font-bold text-3xl p-5 text-center">Welcome to Our App</h1>
      <Link
        to="/about"
        className="w-35 items-center m-2 px-6 py-2 text-center border rounded-md text-teal-700 bg-teal-500 border-teal-800 hover:bg-teal-950 hover:text-white transition font-medium"
      >
        Go to About
      </Link>
      <Link
        to="/contact"
        className="m-2 text-center underline text-teal-500 hover:text-teal-800"
      >
        Go to Contact
      </Link>
    </div>
  );
}
