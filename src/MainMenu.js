import { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

import AboutModal from "./AboutModal.js";

const MainMenu = () => {
  // MENU ITEMS
  const [activeItem, setActiveItem] = useState("");
  const handleMenuItemClick = (selectedItem) => {
    setActiveItem(selectedItem);
  };

  // ABOUT MODAL
  const [displayModal, setDisplayModal] = useState(false);
  const handleOpenDisplayModal = () => {
    setDisplayModal(true);
  };
  const handleCloseDisplayModal = () => {
    setDisplayModal(false);
  };

  console.log({ activeItem });

  return (
    <div>
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
            onClick={() => {
              handleMenuItemClick("about");
              handleOpenDisplayModal();
            }}
            active={activeItem === "about"}
          >
            <Icon name="info circle" /> About
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <AboutModal
        displayModal={displayModal}
        onOpenDisplayModal={handleOpenDisplayModal}
        onCloseDisplayModal={handleCloseDisplayModal}
      />
    </div>
  );
};

export default MainMenu;
