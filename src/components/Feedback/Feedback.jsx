import PropTypes from 'prop-types';
import { FeedbackBtn } from './Feedback.styled';

export const Feedback = ({ options, onLevelFeedback }) => {
  //console.log('option', options);
  //console.log('onLevelFeedback', onLevelFeedback)
  return (
    <FeedbackBtn>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLevelFeedback(option)}
        >
          {option}
        </button>
      ))}
    </FeedbackBtn>
  );
};

Feedback.protoType = {
    onAddFeedback: PropTypes.func,
  };
  