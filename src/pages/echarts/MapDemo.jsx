import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

function MapDemo() {
  const chartRef = useRef();
  const fetchGeo = async () => {
    const res = await fetch(
      'https://geo.datav.aliyun.com/areas_v3/bound/150100_full.json',
    );
    console.log(res);
    const result = await res.json();
    return result;
  };

  useEffect(() => {
    (async () => {
      const geoJson = await fetchGeo();
      var myChart = echarts.init(chartRef.current);
      const mapName = 'Hohhot';
      echarts.registerMap(mapName, geoJson);
      const option = {
        series: [
          {
            type: 'map',
            map: mapName,
            label: {
              show: true,
            },
            data: [],
            nameMap: {},
          },
        ],
      };

      myChart.setOption(option);
    })();
  }, []);
  return <div ref={chartRef} style={{ width: '100vw', height: '100vh' }}></div>;
}

export default MapDemo;
