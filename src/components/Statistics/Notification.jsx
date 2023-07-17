import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Notification = ({ message }) => {
  return <span>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
