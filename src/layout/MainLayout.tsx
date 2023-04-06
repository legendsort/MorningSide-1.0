import React, { useState } from "react";
import { LoadingContext } from "../contexts/loadingContext";
import HeaderLayout from "./HeaderLayout";
import Main from "./Main";
import FooterLayout from "./FooterLayout";

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("");
  return (
    <LoadingContext.Provider
      value={{ isLoading, setLoading, loadingMessage, setLoadingMessage }}
    >
      <HeaderLayout />
      <Main>{children}</Main>
      <FooterLayout />
    </LoadingContext.Provider>
  );
};

export default MainLayout;
