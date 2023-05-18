import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total();
  const positiveValue = positivePercentage();

  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <li className={css.item}>
            <p>
              Good: <span className={css.value}>{good}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Neutral: <span className={css.value}>{neutral}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Bad: <span className={css.value}>{bad}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Total: <span className={css.value}>{totalFeedback}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Positive feedback:{' '}
              <span className={css.value}>{positiveValue}%</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;