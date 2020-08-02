import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;

  p {
    font-size: 12px;
    font-weight: bolder;
    color: #757575;

    .currency {
      font-size: 14px;
    }

    .price {
      font-size: 14px;
      color: #e84393;
    }
  }
`;
