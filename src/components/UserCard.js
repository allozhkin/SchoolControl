import React from 'react';

const UserCard = ({ img, name }) => {
  return (
    <div className="user-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default UserCard;
