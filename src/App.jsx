import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Notes from "./components/Notes/Notes";
import Users from "./components/Users/Users";
import Products from "./components/Products/Products";
// Imports for CheckList
import CheckList from "./components/CheckList/";
import CheckListLayout from "./layouts/CheckListLayout";
import Tasks from "./components/CheckList/Main/Tasks";
import Done from "./components/CheckList/Main/Done";
import Deleted from "./components/CheckList/Main/Deleted";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="max-w-5xl m-auto">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="checklist" element={<CheckListLayout />}>
                <Route path="/checklist" element={<CheckList />} />
                {/* <Route path="/checklist/tasks" element={<Tasks />} /> */}
                <Route path="/checklist/done" element={<Done />} />
                <Route path="/checklist/deleted" element={<Deleted />} />
              </Route>
              <Route path="notes" element={<Notes />} />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
