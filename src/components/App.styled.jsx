import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  background-color: #e7ecf2;
  & > ul,
  li,
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  & > ul,
  ol,
  li {
    list-style: none;
  }
`;

// export const Container = styled.div`
//   //height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 40px;
//   color: #010101;
//   max-width: 1400px;
//   padding: 20px 20px;
//   margin: 0 auto;
//   gap: 30px;
// `;
