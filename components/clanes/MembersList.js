import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import { Card, Image, Modal, Input, Button, Avatar } from '@nextui-org/react';
import DuelistOptions from './DuelistOptions'; // Importa el componente DuelistOptions
import AddDuelistsModal from './AddDuelistsModal'; // Importa el componente AddDuelistsModal


const fetchMembersAPI = async (clanId, token) => {
  return axios.get(`https://api.duellinks.pro/clans/${clanId}/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const fetchUsernamesAPI = async (userIds) => {
  const idsString = userIds.join(',');
  return axios.get(`https://api.duellinks.pro/users?ids=${idsString}`);
};

const MembersList = ({ clanId, clan }) => {
  const { token } = useContext(UserContext);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newDuelist, setNewDuelist] = useState("");
  const [editDuelist, setEditDuelist] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddDuelist = () => {
    if (newDuelist) {
      setMembers([...members, { username: newDuelist }]);
      setShowAddModal(false);
      setNewDuelist("");
    }
  };

  const handleEditDuelist = (index) => {
    if (editDuelist && index !== -1) {
      const updatedMembers = [...members];
      updatedMembers[index].username = editDuelist;
      setMembers(updatedMembers);
      setEditIndex(-1);
      setEditDuelist("");
    }
  };
  
  const handleDeleteDuelist = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetchMembersAPI(clanId, token);
        const membersData = response.data;

        const userIds = membersData.map(member => member._id);
        const usernamesResponse = await fetchUsernamesAPI(userIds);
        
        const updatedMembers = membersData.map((member, index) => ({
          ...member,
          username: usernamesResponse.data[index].username
        }));

        setMembers(updatedMembers);
      } catch (err) {
        setError('Error al obtener miembros');
        console.error('Error al obtener miembros:', err);
      }
    };

    fetchData();
  }, [clanId, token]);

  const fetchMembers = async () => {
    setError(null);
    try {
      const response = await fetchMembersAPI(clanId, token);
      const membersData = response.data;
      const userIds = membersData.map(member => member._id);
      const usernamesResponse = await fetchUsernamesAPI(userIds);
      const updatedMembers = membersData.map((member, index) => ({
        ...member,
        username: usernamesResponse.data[index].username
      }));
      setMembers(updatedMembers);
    } catch (err) {
      setError('Error al obtener miembros');
      console.error('Error al obtener miembros:', err);
    }
  };
  useEffect(() => {
    fetchMembers();
  }, [clanId, token]);
  

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col items-center mb-8">
        {clan ? (
          <>
            <Image src={clan.logoUrl} alt={clan.name} width={100} height={100} className="mb-4"/>
            <h1 className="text-5xl lg:text-5xl font-extrabold">{clan.name}</h1>
          </>
        ) : (
          <p>Cargando información del clan...</p>
        )}
      </div>

      <h2 className="text-3xl lg:text-3xl font-extrabold mb-4 lg:mb-8">Miembros del Clan</h2>
    {error && <div className="w-full lg:w-1/4 bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}

    {/* Reemplaza el botón "Añadir Duelista" con AddDuelistsModal */}
    <AddDuelistsModal clanId={clanId} token={token} onDuelistsAdded={fetchMembers} />



    <ul className="mt-4 lg:mt-8">
  {members.length === 0 ? (
    <p>Aún no hay miembros en este clan.</p>
  ) : (
    members.map((member, index) => (
      <li key={index} className="flex items-center mb-2 lg:w-1/4 lg:mr-auto">
        <span className="mr-2">{index + 1}.</span>
        <div className="flex items-center w-1/2 lg:w-4/10">
          <Avatar 
            src={member.avatar} 
            alt={`${member.username}'s avatar`} 
            size="sm" // Puedes ajustar el tamaño según tus necesidades 
            className="mr-2"  // Añadir un pequeño margen a la derecha del avatar
          />
          {member.username}
        </div>
        <div className="w-1/2 lg:w-6/10 flex lg:ml-2">
          {editIndex === index ? (
            <>
              <Input
                value={editDuelist}
                onChange={(e) => setEditDuelist(e.target.value)}
              />
              <Button
                color="primary"
                variant="solid"
                onClick={() => handleEditDuelist(index)}
                className="ml-2"
              >
                Guardar
              </Button>
            </>
          ) : (
            <DuelistOptions
              index={index}
              memberId={member._id}
              clanId={clanId}
              token={token}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
              setEditDuelist={setEditDuelist}
              onDuelistRemoved={(index) => {
                const updatedMembers = [...members];
                updatedMembers.splice(index, 1);
                setMembers(updatedMembers);
              }}
            />
          )}
        </div>
      </li>
    ))
  )}
</ul>










    <Modal
      visible={showAddModal}
      onClose={() => setShowAddModal(false)}
      title="Agregar Duelista"
    >
      <Input
        label="Nombre del Duelista"
        value={newDuelist}
        onChange={(e) => setNewDuelist(e.target.value)}
      />
      <Button
        color="primary"
        variant="solid"
        onClick={handleAddDuelist}
        className="mt-4"
      >
        Agregar
      </Button>
    </Modal>
  </div>
  );
};

export default MembersList;
