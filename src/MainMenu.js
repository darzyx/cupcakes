import { useState } from "react";
import { Menu } from "semantic-ui-react";

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleMenuItemClick = (selectedItem) => {
    setActiveItem(selectedItem);
  };

  console.log({ activeItem });

  return (
    <Menu>
      <Menu.Item
        name="home"
        onClick={() => handleMenuItemClick("home")}
        active={activeItem === "home"}
      >
        Home
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="bakery"
          onClick={() => handleMenuItemClick("bakery")}
          active={activeItem === "bakery"}
        >
          Bakery
        </Menu.Item>
        <Menu.Item
          name="play"
          onClick={() => handleMenuItemClick("play")}
          active={activeItem === "play"}
        >
          Play
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MainMenu;
