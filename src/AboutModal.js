import { Modal, Button } from "semantic-ui-react";

const AboutModal = ({
  displayModal,
  onOpenDisplayModal,
  onCloseDisplayModal,
}) => {
  return (
    <Modal
      onOpen={onOpenDisplayModal}
      onClose={onCloseDisplayModal}
      open={displayModal}
      closeIcon
    >
      <Modal.Header>About</Modal.Header>
      <Modal.Content>
        kjasd fklajshdfal kjfhakl sjdfha aksjdf lakjsdfh
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onCloseDisplayModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AboutModal;
