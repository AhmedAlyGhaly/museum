import React from "react";
import { Outlet } from "react-router-dom";
import {Footer} from "./Footer";
import { MainAppBar } from "./MainAppBar";

type MainLayoutProps = {};

export const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' , justifyContent: 'space-between' }}>
      <MainAppBar />
      <div style={{ flex: 1, overflowY: 'auto'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
