import React from 'react';
import styles from './userCard.module.scss';
import Icon from '../Icon/Icon';

interface UserCardProps {
  photo?: string;
  name: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, photo }) => {
  return (
    <div className={styles.userCard}>
      {!photo ? (
        <Icon
          id="iconUser"
          width={24}
          height={24}
          className={styles.userCard__icon}
        />
      ) : (
        <img src={photo} alt="user" className={styles.userCard__photo} />
      )}
      <h2 className={styles.userCard__name}>{name}</h2>
    </div>
  );
};

export default UserCard;
