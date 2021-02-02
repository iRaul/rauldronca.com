import styled from 'styled-components';

const TabsWrapper = styled.div`
  .react-tabs__tab-list {
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 650px;
    margin: 0 auto 80px;
    padding: 0 15px;
    gap: 10px;
  }

  .react-tabs__tab {
    text-align: center;
    padding: 15px 0;
    font-weight: 600;
    color: #929292;
    cursor: pointer;
    background-color: #131212;
    border-radius: 4px;

    &:hover {
      color: #fff;
      background-color: #252525;
    }
  }

  .react-tabs__tab--selected {
    color: #fff;
    background-color: #252525;
  }
`;

export default TabsWrapper;
