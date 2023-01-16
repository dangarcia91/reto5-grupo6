import { Outlet } from "react-router-dom";
import Header from "../components/section/Header";
import Body from "../components/section/Body";


const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Body />
      </main>
    </>
  );
};

export default PrimaryLayout;