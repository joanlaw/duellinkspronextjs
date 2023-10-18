import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import { Card, Image, Input, Button, Avatar } from '@nextui-org/react';
import DuelistOptions from './DuelistOptions';
import AddDuelistsModal from './AddDuelistsModal';

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

  const fetchMembers = async () => {
    try {
      const response = await fetchMembersAPI(clanId, token);
      const membersData = response.data;
      const userIds = membersData.map(member => member._id);
      const usernamesResponse = await fetchUsernamesAPI(userIds);
      const updatedMembers = membersData.map((member) => ({
        ...member,
        username: usernamesResponse.data.find(u => u._id === member._id).username
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
      <AddDuelistsModal clanId={clanId} token={token} onDuelistsAdded={fetchMembers} />
      <ul className="mt-4 lg:mt-8">
        {members.length === 0 ? (
          <p>Aún no hay miembros en este clan.</p>
        ) : (
          members.map((member, index) => (
            <li key={member._id} className="flex items-center mb-2 lg:w-1/4 lg:mr-auto">
              <span className="mr-2">{index + 1}.</span>
              <div className="flex items-center w-1/2 lg:w-4/10">
                <Avatar 
                  src={member.avatar} 
                  alt={`${member.username}'s avatar`} 
                  size="sm"
                  className="mr-2"
                />
                {member.username}
              </div>
              <div className="w-1/2 lg:w-6/10 flex lg:ml-2">
                <DuelistOptions
                  index={index}
                  memberId={member._id}
                  clanId={clanId}
                  token={token}
                  onDuelistRemoved={() => {
                    const updatedMembers = members.filter((_, i) => i !== index);
                    setMembers(updatedMembers);
                  }}
                />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MembersList;
