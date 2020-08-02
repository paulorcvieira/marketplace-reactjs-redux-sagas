import styled from 'styled-components';

export const ListCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-size: 12px;
    font-weight: bold;
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

export const ListCardFooterActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 50px;
`;