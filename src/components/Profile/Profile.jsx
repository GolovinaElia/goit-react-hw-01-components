import PropTypes from 'prop-types';
import defaultImage from '../default.png';
import style from './Profile.module.css';
const Profile = ({ avatar, name, tag, location, stats }) => (
    <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={style.avatar}
            />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultImage,
}
Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(
    PropTypes.number.isRequired 
    )
};
export default Profile;