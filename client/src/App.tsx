/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import ExampleComponent from './components/ExampleComponent';
import SendTextComponent from './components/SendTextComponent';
import DataGridComponent from './components/DataGridComponent';
import LayoutComponent from './components/LayoutComponent';

const appStyle = css`
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

function App() {
  const [isContentVisible, setContentVisible] = useState(true);

  const onHeaderClick = () => {
    setContentVisible(!isContentVisible);
    console.log(isContentVisible);
  };

  const handleToggleContent = () => {
    setContentVisible(isContentVisible ? true : false);
    console.log(isContentVisible);
  };

  return (
    <Router>
      <LayoutComponent onHeaderClick={onHeaderClick} onMenuClick={handleToggleContent}>
        <div css={appStyle}>
          {isContentVisible && (
            <Routes>
              <Route path="/example" element={<ExampleComponent />} />
              <Route path="/send-text" element={<SendTextComponent />} />
              <Route path="/data-grid" element={<DataGridComponent />} />
              <Route path="/" element={<ExampleComponent />} />
            </Routes>
          )}
        </div>
      </LayoutComponent>
    </Router>
  );
}

export default App;