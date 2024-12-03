import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";

//createBrowserRouter是一个函数，返回一个路由配置对象
//RouterProvider是一个组件，接受一个router配置对象作为参数

//router是路由的配置对象
const router = createBrowserRouter([{ path: "/", element: <Root /> }]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
//BrowserRouter 还是 hashRouter
//不需要兼容就使用 BrowserRouter
