import { styled } from 'styled-components';

export const FeedbackBtn = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonStyle = styled.button`
  //background: 'lightgreen';
  //color: 'black';
  //border: '1px solid green';
  border-radius: 4px;
  width: 75px;
  height: 30px;
  text-transform: capitalize;
  
  &.good {
   border: '1px solid #ca8080';
    }
  &.good:hover {
   background-color: #24b81f;
   color: white;
   cursor: pointer;
  }

  &.neutral {
   border: '1px solid #ca8080';
    }
  &.neutral:hover {
   background-color: #dfca0f;
   color: white;
   cursor: pointer;
  }

  &.bad {
   border: '1px solid #ca8080';
   //border: '1px solid red'
  }
  &.bad:hover {
   background-color: #ec5252;
   color: white;
   cursor: pointer;
  }

`;
