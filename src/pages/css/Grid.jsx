import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .item {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
`;

const options = [
  { id: nanoid(), text: 1 },
  { id: nanoid(), text: 2 },
  { id: nanoid(), text: 3 },
  { id: nanoid(), text: 4 },
  { id: nanoid(), text: 5 },
];

function sortItems(options, columns) {
  // count
  const columnCountMap = options.reduce((res, cur, i) => {
    const groupIndex = i % columns;
    const count = res.get(groupIndex) || 0;
    res.set(groupIndex, count + 1);
    return res;
  }, new Map());

  // group
  const groups = [];
  let index = 0;
  let colum = [];
  for (let i = 0, l = options.length; i < l; i += 1) {
    if (colum.length < columnCountMap.get(index)) {
      colum.push(options[i]);
    } else {
      index += 1;
      groups.push(colum);
      colum = [options[i]];
    }
  }
  groups.push(colum);

  // flat
  const max = Math.ceil(options.length / columns);
  const result = [];
  for (let i = 0; i < max; i += 1) {
    result.push(...groups.map((item) => item[i]).filter(Boolean));
  }
  return result;
}

function Grid() {
  return (
    <Wrapper>
      {sortItems(options, 4).map((item) => (
        <div className="item" key={item.id}>
          {item.text}
        </div>
      ))}
    </Wrapper>
  );
}

export default Grid;
