import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(({ id, isOnline, avatar, name }) => (
            <li key={id}className="item">
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="" width="48" />
                <p className="name">{name}</p>
            </li>
        ))}
    </ul>
);

FriendListItem.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired, 
    })).isRequired,
};

export default FriendList;