import "./mainapp.scss";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />

      <div className="content-wrapper">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
          <Route path="*" exact element={<p>Not Found</p>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default MainApp;
