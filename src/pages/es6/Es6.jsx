import React from 'react';

function Es6() {
  // Array.from
  const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
  const arr = Array.from(arrayLike, (x) => x.toUpperCase());
  console.log(arr, arrayLike);

  // Array.of
  console.log(
    Array(),
    Array(2),
    Array(3, 6),
    Array.of(3),
    Array() === new Array(),
  );

  // copyWithin
  console.log([2, 4, 6, 8].copyWithin(0, 2));

  const parent = {
    lastName: 'Hua',
  };
  const child0 = Object.create(parent);
  child0.firstName = 'Martin';
  console.log(child0, Object.keys(child0));
  for (const i in child0) {
    console.log(i);
  }
  return <div></div>;
}

export default Es6;
