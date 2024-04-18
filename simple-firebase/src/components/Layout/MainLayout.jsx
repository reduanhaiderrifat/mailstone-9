import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MAinLAyout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MAinLAyout;
