import { FC } from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "@/contacts";
//这是react-router-dom提供的一个组件，用来渲染子路由的
export default function Root() {
  const contacts = useLoaderData() as ContactType[];
  const renderContacts = () => {
    if (contacts.length === 0) {
      return <p>No contacts found</p>;
    }
    return (
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              <Link to={"/contacts/" + item.id}>
                {item.first || item.last ? (
                  <>
                    {item.first}
                    {item.last}
                  </>
                ) : (
                  <>No name</>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              {/* <a href={`/contacts/1`}>Your Name</a>
               */}
              <Link to="/contacts/1">Your Name</Link>
            </li>
            <li>
              {/* <a href={`/contacts/2`}>Your Friend</a> */}
              <Link to="/contacts/2">Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <nav>{renderContacts()}</nav>
    </>
  );
}
//当前路由组件需要用到的loader函数
export const loader = () => {
  const contacts = getContacts();
  return contacts;
};
//Link 可以使用to来指定跳转的路径
