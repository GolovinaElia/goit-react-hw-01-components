import PropTypes from 'prop-types';
import defaultImage from '../default.png';
const FriendListItem = ({ isOnline, avatar, name }) => (
    <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
    </li>
);
FriendListItem.defaultProps = {
    avatar: defaultImage,
}
FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default FriendListItem;