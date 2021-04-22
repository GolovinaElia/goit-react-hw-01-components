import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './Friend.module.css'; 

const FriendList = ({ friends }) => (
    <ul className={style.friendList}>
        {friends.map(({ id, isOnline, avatar, name }) => (
            <li key={id}>
                <FriendListItem
                isOnline = {isOnline}
                avatar = {avatar} 
                name = {name}
            />
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired, 
    })).isRequired,
};

export default FriendList;