import React, { useState } from 'react';
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from '@nextui-org/react';

export default function AddDuelistsModal({ clanId, token, onDuelistsAdded }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [duelists, setDuelists] = useState(['']); 

  const addDuelistInput = () => {
    setDuelists([...duelists, '']); 
  };

  const handleAddDuelists = async () => {
    try {
      await axios.post(`https://api.duellinks.pro/clans/${clanId}/members`, {
        memberIds: duelists.filter(duelist => duelist.trim() !== ''), 
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDuelists(['']); 
      onClose(); 
      if (onDuelistsAdded) onDuelistsAdded(); 
    } catch (error) {
      console.error('Error adding duelists:', error);
    }
  };

  return (
    <>
      <Button color="primary" onClick={onOpen}>
        Añadir Duelistas
      </Button>
      
      <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Añadir Duelistas</ModalHeader>
          <ModalBody>
            {duelists.map((duelist, index) => (
              <Input
                key={index}
                label={`Duelista ${index + 1}`}
                placeholder="Ingresa ID de duelista"
                variant="bordered"
                value={duelist}
                onChange={(e) => {
                  const updatedDuelists = [...duelists];
                  updatedDuelists[index] = e.target.value;
                  setDuelists(updatedDuelists);
                }}
              />
            ))}
            <Button
              color="primary"
              variant="contained"
              onClick={addDuelistInput}
              style={{ marginTop: '1rem' }}
            >
              +
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="outlined" onClick={onClose}>
              Cerrar
            </Button>
            <Button color="primary" variant="contained" onClick={handleAddDuelists}>
              Añadir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
