import React from 'react';
import 'userCard.module.scss';

interface UserCardProps {
  imgUrl: string;
  name: string;
  altText: string;
}

const UserCard: React.FC<UserCardProps> = ({ imgUrl, name, altText }) => {
  return (
    <div className="user-card">
      <img className="user-card_photo" src={imgUrl} alt={altText} />
      <h2 className="user-card_name">{name}</h2>
    </div>
  );
};

export default UserCard;
