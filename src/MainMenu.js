import { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

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
        <Icon name="home" /> Home
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="bakery"
          onClick={() => handleMenuItemClick("bakery")}
          active={activeItem === "bakery"}
        >
          <Icon name="food" /> Bakery
        </Menu.Item>
        <Menu.Item
          name="play"
          onClick={() => handleMenuItemClick("play")}
          active={activeItem === "play"}
        >
          <Icon name="game" /> Play
        </Menu.Item>
        <Menu.Item
          name="about"
          onClick={() => handleMenuItemClick("about")}
          active={activeItem === "about"}
        >
          <Icon name="info circle" /> About
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MainMenu;
