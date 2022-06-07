import { Link, Route, Routes, useLocation } from 'react-router-dom';

import AntdPage from './pages/antd/AntdPage';
import AxiosPage from './pages/AxiosPage';
import BasicPage from './pages/basic/BasicPage';
import CSSPage from './pages/css/CSSPage';
import ReactJsonView from './pages/demos/ReactJsonView';
import ReactMarkdown from './pages/demos/ReactMarkdown';
import RenderSort from './pages/demos/render-sort/RenderSort';
import MapDemo from './pages/echarts/MapDemo';
import ES6Page from './pages/es6/ES6Page';
import Feature18 from './pages/Feature18';
import HomePage from './pages/HomePage';
import StyledApp from './App.styled';

function App() {
  const location = useLocation();
  console.log(location);

  const navs = [
    { label: 'Home', path: '/' },
    { label: 'React.js 18', path: '/feature-18' },
    { label: 'CSS', path: '/css' },
    { label: 'json', path: '/json' },
    { label: 'markdown', path: '/markdown' },
    { label: 'antd', path: '/antd' },
    { label: 'es6', path: '/es6' },
    { label: 'axios', path: '/axios' },
    { label: 'basic', path: '/basic' },
    { label: 'echarts map', path: '/map' },
    { label: 'render-sort', path: '/render-sort' },
  ];
  return (
    <StyledApp>
      <nav>
        {navs.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={[location.pathname === item.path ? 'active' : ''].join(
              ' ',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature-18" element={<Feature18 />} />
        <Route path="/css" element={<CSSPage />} />
        <Route path="/json" element={<ReactJsonView />} />
        <Route path="/markdown" element={<ReactMarkdown />} />
        <Route path="/antd" element={<AntdPage />} />
        <Route path="/es6" element={<ES6Page />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/basic" element={<BasicPage />} />
        <Route path="/map" element={<MapDemo />} />
        <Route path="/render-sort" element={<RenderSort />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </StyledApp>
  );
}

export default App;
