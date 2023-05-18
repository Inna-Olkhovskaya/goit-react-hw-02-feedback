import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p
    style={{
      fontWeight: 600,
      color: "coral",
    }}
  >
    {' '}
    {message}
  </p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
