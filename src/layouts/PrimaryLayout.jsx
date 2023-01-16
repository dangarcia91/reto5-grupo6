import { Outlet } from "react-router-dom";
import Header from "../components/section/Header";
import Body from "../components/section/Body";
import Footer from "../components/section/Footer";


const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Body />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;