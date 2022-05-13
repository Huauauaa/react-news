import React, { useEffect } from 'react';
import axios from 'axios';

function AxiosPage() {
  useEffect(() => {
    // axios.get('http://localhost:8888/').then((response) => {
    //   console.log(response);
    // });

    // axios.get('http://localhost:8888/error').then((response) => {
    //   console.log(response);
    // });

    axios
      .all([
        axios.get('http://localhost:8888/'),
        axios.get('http://localhost:8888/a'),
      ])
      .then((response) => {
        console.log(response);
      });
  }, []);
  return <div>AxiosPage</div>;
}

export default AxiosPage;
