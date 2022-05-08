import React from 'react';
import JSONView from 'react-json-view';
import configPackage from '../../../package.json';

/**
 * https://github.com/mac-s-g/react-json-view
 * @returns
 */
function ReactJsonView() {
  const obj = {
    id: 1,
    name: 'demo',
    children: [
      { id: 1.1, name: 'd-1' },
      { id: 1.2, name: 'd-2' },
    ],
  };

  const arr = [1, false, new Date()];

  return (
    <div>
      <fieldset>
        <legend>object</legend>
        <JSONView src={obj} />
      </fieldset>
      <fieldset>
        <legend>array</legend>
        <JSONView src={arr} />
      </fieldset>
      <fieldset>
        <legend>package.json</legend>
        <JSONView
          src={configPackage}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </fieldset>
    </div>
  );
}

export default ReactJsonView;
