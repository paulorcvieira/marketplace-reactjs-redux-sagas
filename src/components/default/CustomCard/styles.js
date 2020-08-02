import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 20px;

  .new-list-container {
    width: 80%;
  }

  .new-list-container > a > div {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .list-container {
    width: 220px;
  }

  .list-container > a > div {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .list-item {
    min-width: 220px;
    max-width: 220px;
    margin: 20px;
  }

  .list-item > a > div {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .card {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  .card-action-area {
    flex: 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .new-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 184px;
  }

  .new-item > svg {
    padding: 10px;
    background: #e4e4e4;
    border-radius: 50%;

    -webkit-box-shadow: -1px 1px 5px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: -1px 1px 5px 1px rgba(0,0,0,0.3);
    box-shadow: -1px 1px 5px 1px rgba(0,0,0,0.3);
  }

  .card-actions-footer {
    height: 50px;
  }

  .card-img {
    object-fit: cover;
  }

  .closed-list {
    border-left: 5px solid #00cec9;
  }

  .opened-list {
    border-left: 5px solid #e84393;
  }

`;

export const Title = styled.div`
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  margin: 15px 0;
  color: ${(props) => props.color || '#000000'};
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
`;