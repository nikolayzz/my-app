import { Outlet } from "react-router-dom";
import SideBar from "../components/CheckList/SideBar/SideBar";
import Form from "../components/CheckList/Main/Form";

const CheckListLayout = () => {
  return (
    <div className="mt-3">
      <div className="flex">
        <SideBar />
        <Form />
      </div>
      <Outlet />
    </div>
  );
};

export default CheckListLayout;
