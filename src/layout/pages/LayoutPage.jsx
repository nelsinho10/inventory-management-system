import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="layout__main p-4 sm:ml-64">
        <div className="layout__content p-4 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}
