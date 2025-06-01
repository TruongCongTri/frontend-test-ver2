import React from "react";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import MiniNavBar from "@/components/layout/MiniNavBar";
export default function FavoriteTemplate({ children }) {
  return (
    <LayoutWrapper>
      <Breadcrumb />
      <div className="mt-4">
        <MiniNavBar />
        {children}
      </div>
    </LayoutWrapper>
  );
}
