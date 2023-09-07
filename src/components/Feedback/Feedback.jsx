import PropTypes from 'prop-types';

export const Feedback = ({ options, onLevelFeedback }) => {
  //console.log('option', options);
  //console.log('onLevelFeedback', onLevelFeedback)
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLevelFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

Feedback.protoType = {
    onAddFeedback: PropTypes.func,
  };
  