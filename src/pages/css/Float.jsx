import React from 'react';
import styled from 'styled-components';

const Parent = styled.div`
  background-color: lightcoral;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;
const Child = styled.div`
  width: 100px;
  height: 100px;

  float: left;

  background-color: lightcyan;
`;

function Float() {
  return (
    <fieldset>
      <legend>
        清除浮动主要就是为了解决父级元素因为子元素浮动而引起内部高度为0的问题
      </legend>
      <Parent>
        <Child />
        <Child />
      </Parent>
    </fieldset>
  );
}

export default Float;
