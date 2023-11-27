"use client";

import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [sideBarToggle, setSideBarToggle] = React.useState(false);
  return (
    <div>
      <div>
        {/* <Button>
          <Menu />
        </Button> */}
        Hello
      </div>
    </div>
  );
};

export default Header;
