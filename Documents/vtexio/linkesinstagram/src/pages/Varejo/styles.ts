import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 700px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  span {
    margin-top: 20px;
  }
  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    clear: both;
    margin-bottom: 12px;
    justify-content: center;
    align-items: center;
  }
  ul {
    margin-top: 40px;
    list-style: none;
    margin-bottom: 16px;
    padding: 0;
    position: relative;
  }
  li {
    display: flex;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-color: #ffffff;
    background-color: transparent;
    color: #ffffff;
    margin-bottom: 10px;
    border-radius: 8px;
    align-items: center;
  }
  svg{
    margin-left: 20px;
    position: fixed;
  }
  a {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    white-space: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-height: 56px;
    padding: 15px 20px;
    width: 100%;
    position: relative;
    transition: none;
    transition: box-shadow 0.25s;
    color: #fff;
    text-decoration: none;
  }
`;
