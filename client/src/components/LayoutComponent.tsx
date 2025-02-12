/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const containerStyle = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f0f0;
`;

const headerStyle = css`
    background-color: #007bff;
    color: white;
    padding: 20px;
    width: 100%;
    text-align: center;
`;

const mainStyle = css`
    display: flex;
    flex: 1;
`;

const sidebarStyle = css`
    background-color: #333;
    color: white;
    width: 200px;
    padding: 20px;
`;

const sidebarListStyle = css`
    list-style-type: none;
    padding: 0;
`;

const sidebarItemStyle = css`
    margin-bottom: 10px;
`;

const sidebarLinkStyle = css`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const contentStyle = css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const footerStyle = css`
    background-color: #007bff;
    color: white;
    padding: 10px;
    width: 100%;
    text-align: center;
`;

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div css={containerStyle}>
        <header css={headerStyle}>Header</header>
        <div css={mainStyle}>
            <nav css={sidebarStyle}>
            <ul css={sidebarListStyle}>
                <li css={sidebarItemStyle}><Link css={sidebarLinkStyle} to="/example">Example</Link></li>
                <li css={sidebarItemStyle}><Link css={sidebarLinkStyle} to="/send-text">Send Text</Link></li>
                <li css={sidebarItemStyle}><Link css={sidebarLinkStyle} to="/data-grid">Data Grid</Link></li>
            </ul>
            </nav>
            <main css={contentStyle}>{children}</main>
        </div>
        <footer css={footerStyle}>Footer</footer>
        </div>
    );
};

export default LayoutComponent;