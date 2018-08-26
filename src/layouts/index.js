import { Layout, Menu } from "antd";
import Link from 'umi/link';
import styles from './index.less';
const { Header,  Footer } = Layout;


/**
 * @description 页面整体布局
 * @param {*} props 
 */
const App = props => {
  debugger
  return (
    <div className={styles.pageContent}>
      <Layout className={styles.layout}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/content">多路由</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/example">其他</Link></Menu.Item>
          </Menu>
        </Header>
        {props.children}
        <Footer className={styles.footer}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
