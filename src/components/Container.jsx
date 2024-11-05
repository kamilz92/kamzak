import React from "react";

const Container = ({ children, id, className}) => {
  return (
    <section
      id={id}
      className={`bg-lightBackground dark:bg-darkBackground py-8 lg:py-16´ ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">{children}</div>
    </section>
  );
};

export default Container;
