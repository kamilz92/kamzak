import React from "react";

const Heading = ({ children, heading: Heading, size = 2 }) => {
  return (
    <Heading
      className="text-primaryLight dark:text-primaryDark font-bold my-8 relative z-10 after:absolute after:bottom-0 after:left-0 after:w-[100px] after:h-1 after:bg-primaryLight dark:after:bg-primaryDark"
      style={{
        fontSize: `${size}rem`,
      }}
    >
      {children}
    </Heading>
  );
};

export default Heading;
