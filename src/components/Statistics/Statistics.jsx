import PropTypes from 'prop-types';
import style from './Statistics.module.css';
const Statistics = ({ title, stats }) => {
const BgColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
    <section className={style.statistics}>
        {title && <h2 className={style.title}>Upload stats</h2>}
        <ul className={style.statList}>
            {stats.map(({ id, label, percentage }) => (
                <li key={id} style={{backgroundColor: `#${BgColor}`}}>
                    <span className={style.label}>{label}</span>
                    <span className={style.percentage}>{percentage}</span>
                </li>
            ))
            }
        </ul>
    </section>
);
}

Statistics.defaultProps = {
    title: '',
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired 
    })).isRequired,
};

export default Statistics;