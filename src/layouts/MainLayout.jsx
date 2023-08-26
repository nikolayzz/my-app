import { Outlet } from "react-router-dom";
import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
