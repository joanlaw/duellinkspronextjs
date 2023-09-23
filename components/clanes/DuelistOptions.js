import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { EditDocumentIcon } from '../nextuiicons/EditDocumentIcon';
import axios from 'axios'; // No olvides importar axios

const DuelistOptions = ({ index, memberId, clanId, token, editIndex, setEditIndex, setEditDuelist, onDuelistRemoved }) => {
  
    const handleDeleteDuelist = async () => {
        try {
          await axios.delete(`https://api.duellinks.pro/clans/${clanId}/members`, {
            data: { memberId }, // Nota: axios.delete usa "data" para enviar el cuerpo de la solicitud
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if(onDuelistRemoved) onDuelistRemoved(index); // Notificar al componente padre para que pueda actualizar la lista
        } catch (error) {
          console.error('Error removing duelist:', error);
        }
      };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="ghost"  className="ml-auto">Opciones</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Opciones del Duelista">
        <DropdownItem
          onClick={() => {
            setEditIndex(index);
            setEditDuelist(username);
          }}
        >
          Editar
        </DropdownItem>
        <DropdownItem
      onClick={handleDeleteDuelist}
      className="text-danger"
      color="danger"
    >
      Eliminar
    </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DuelistOptions;
