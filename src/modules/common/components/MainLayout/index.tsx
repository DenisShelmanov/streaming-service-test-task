import { Layout } from 'antd';
import './styles.css';
import { useState } from 'react';

import { Breakpoint } from '../../enums';
import { useDimension } from '../../hooks';
import { Header } from '../Header';
import { Menu } from '../Menu';

interface IProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { width } = useDimension();
  const isSidebarDisplayed = width > Breakpoint.SMALL;

  return (
    <Layout className="layout">
      {isSidebarDisplayed ? (
        <Layout.Sider
          className="sider"
          collapsible
          collapsed={isCollapsed}
          onCollapse={(value) => setIsCollapsed(value)}
          onMouseEnter={() => setIsCollapsed(false)}
          onMouseLeave={() => setIsCollapsed(true)}
          trigger={null}
          width={250}
        >
          <Menu />
        </Layout.Sider>
      ) : (
        <Layout.Header>
          <Header />
        </Layout.Header>
      )}
      <Layout
        className={
          isSidebarDisplayed ? 'content-layout' : 'mobile-content-layout'
        }
      >
        {children}
      </Layout>
    </Layout>
  );
};
