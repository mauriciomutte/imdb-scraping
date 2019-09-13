import styled from 'styled-components';

export const Title = styled.div`
  margin: 2em 0 3em;

  h1 {
    font-weight: 700;
    font-size: 38px;
    margin: 2px;
  }

  span {
    color: #fff5;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Serie = styled.li`
  align-items: center;
  background-color: #0004;
  border-radius: 10px;
  display: flex;
  margin: 10px auto;
  max-width: 700px;
  padding: 15px;
  width: 95%;

  * {
    margin-right: 8px;
  }
`;

export const Ranking = styled.span`
  font-weight: 700;
`;

export const Image = styled.div`
  img {
    height: auto;
    max-width: 70px;
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  text-align: left;
  padding-right: 10px;
`;

export const Rating = styled.span`
  font-weight: 700;
  margin-left: auto;
`;
