import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// rfce === react functional c export
export default function Layout({}) {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
