import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons';

const MenuList = () => {
    return (
        <Menu theme="dark">
            <Menu.Item key="home" icon={<HomeOutlined />} >
                Home
            </Menu.Item>
            <Menu.Item key="activity" icon={<AppstoreOutlined />} >
                Activity
            </Menu.Item>
            <menu.SubMenu>
                
            </menu.SubMenu>
            <Menu.Item key="progress" icon={<AreaChartOutlined />} >
                Progress
            </Menu.Item>
            <Menu.Item key="payment" icon={<PayCircleOutlined />} >
                Payment
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />} >
                Setting
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
