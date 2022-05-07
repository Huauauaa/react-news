import { Routes, Route, Link, useLocation } from 'react-router-dom';
import StyledApp from './App.styled';
import Feature18 from './pages/Feature18';
import HomePage from './pages/HomePage';

function App() {
  const location = useLocation();
  console.log(location);

  const navs = [
    { label: 'Home', path: '/' },
    { label: 'React.js 18', path: '/feature-18' },
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
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </StyledApp>
  );
}

export default App;
