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
  }

  .react-tabs__tab {
    text-align: center;
    border-bottom: 1px solid #929292;
    padding: 15px 0;
    font-weight: 600;
    color: #929292;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }

  .react-tabs__tab--selected {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;

export default TabsWrapper;
