import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root";
import ErrorPage from "@/error-page";
import Contact from "./components/contact";
//createBrowserRouter是一个函数，返回一个路由配置对象
//RouterProvider是一个组件，接受一个router配置对象作为参数

import { loader as RootLoader } from "./components/root";

//router是路由的配置对象
const router = createBrowserRouter([
  // 路由配置
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
    children: [
      { path: "contacts/:id", element: <Contact /> },
      //children可以成为一个子路由
    ],
  },
]);
//:id 是一个参数的名字但是以后访问要按照这个名称来

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
//BrowserRouter 还是 hashRouter
//不需要兼容就使用 BrowserRouter
