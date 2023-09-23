import React, { useState } from 'react';
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure } from '@nextui-org/react';

export default function AddDuelistsModal({ clanId, token, onDuelistsAdded }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [duelists, setDuelists] = useState(['']); // Estado inicial con un campo de entrada vacío

  // Función para agregar un nuevo campo de entrada
  const addDuelistInput = () => {
    setDuelists([...duelists, '']); // Añade un nuevo campo de entrada vacío
  };

  // Función para manejar el envío de IDs de duelistas
  const handleAddDuelists = async () => {
    try {
      await axios.post(`https://api.duellinks.pro/clans/${clanId}/members`, {
        memberIds: duelists.filter(duelist => duelist.trim() !== ''), // Envía los memberIds como un array
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDuelists(['']); // Reinicia los campos de entrada después del envío exitoso
      onClose(); // Cierra el modal después del envío exitoso
      if (onDuelistsAdded) onDuelistsAdded(); // Llama a la función onDuelistsAdded si se pasa como prop
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
