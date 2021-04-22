import PropTypes from 'prop-types';
import defaultImage from '../Image/default.png';
import style from './Friend.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
    <div className={style.item}>
        <span>{isOnline ? <span className={style.statusTrue}></span> : <span className={style.statusFalse}></span>}</span>
                <img className={style.avatar} src={avatar} alt={`Аватар пользователя ${name}`} width="48"/>
                <p className={style.name}>{name}</p>
            </div>
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