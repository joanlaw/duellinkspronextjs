import React from 'react';
import {Avatar} from "@nextui-org/react";

const UserPanel = ({ username, avatar, puntos }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      <Avatar
        src={avatar}
        alt={username}
        size="lg"
        className="mx-auto mb-4"
      />
      <h3 className="text-center text-lg mb-2">
        {username}
      </h3>
      <p className="text-center text-sm">
        Puntos: {puntos}
      </p>
    </div>
  );
};

export default UserPanel;
