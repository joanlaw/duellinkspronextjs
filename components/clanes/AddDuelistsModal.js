import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from '@nextui-org/react';

export default function AddDuelistsModal({ clanId, token, onDuelistsAdded }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [duelists, setDuelists] = useState(['']); 
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
        setSuccess(false);  // Reset success state when modal is opened
    }
  }, [isOpen]);


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
        setSuccess(true);  // Set success to true on successful operation
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
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Éxito!</strong>
            <span className="block sm:inline"> Los duelists han sido añadidos exitosamente.</span>
        </div>
      )}
    </>
  );
}
