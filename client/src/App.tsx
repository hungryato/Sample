/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import ExampleComponent from './components/ExampleComponent';
import SendTextComponent from './components/SendTextComponent';
import DataGridComponent from './components/DataGridComponent';

const appStyle = css`
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

function App() {
  return (
    <div className="App" css={appStyle}>
      <ExampleComponent />
      <SendTextComponent />
      <DataGridComponent />
    </div>
  );
}

export default App;