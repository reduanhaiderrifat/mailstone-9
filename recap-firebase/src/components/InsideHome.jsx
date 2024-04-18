import { useContext } from "react";
import { HomeContext } from "./Home";

const InsideHome = () => {
  const homeData = useContext(HomeContext);
  return (
    <div>
      <h2>inside home</h2>
    </div>
  );
};

export default InsideHome;
