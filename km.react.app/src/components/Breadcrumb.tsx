import React from "react";
import { BreadcrumbProps } from "../types/Book";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbList }) => {
  return (
    <div>
      {breadcrumbList.map((item, index) => {
        const isLastItem = index === breadcrumbList.length - 1;
        return (
          <span key={index}>
            <a href={item.breadcrumb.path}>{item.breadcrumb.name}</a>
            {!isLastItem && " > "}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
