import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLevelFeedback }) => {
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

FeedbackOptions.protoType = {
    onAddFeedback: PropTypes.func,
  };
  