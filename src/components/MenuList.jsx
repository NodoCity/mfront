import { Menu } from 'antd';
import * as A from '@ant-design/icons';

const MenuList = ({darkTheme}) => {
    return (
        <Menu theme={darkTheme? 'dark':'light'} mode='inline' className="menu-bar">
            
            <Menu.SubMenu key="avanzados" icon={<A.DeploymentUnitOutlined className="icon-size"/>} title="Avanzados" >
                <Menu.Item key="funcion"icon={<A.FunctionOutlined className="icon-size"/>} >Función</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
                <Menu.Item key="task-2" icon={<A.CalendarOutlined className="icon-size"/>}>Funcion de fecha</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="basicos" icon={<A.ProductOutlined  className="icon-size"/>} >
                Básicos
            </Menu.Item>
            <Menu.SubMenu key="Excel" icon={<A.TableOutlined className="icon-size" twoToneColor="#52c41a"/>} title="Excel" >
                <Menu.Item key="task-1" >Tasks 1</Menu.Item>
                <Menu.Item key="task-2" >Tasks 2</Menu.Item>
                <Menu.SubMenu key="subtasks" title="subTasks" >
                <Menu.Item key="subtask-1" >SubTasks 1</Menu.Item>
                <Menu.Item key="subtask-2" >SubTasks 2</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item key="progress" icon={<A.InboxOutlined  className="icon-size"/>} >
                Email
            </Menu.Item>
            <Menu.Item key="payment" icon={<A.FileOutlined className="icon-size"/>} >
                Archivos
            </Menu.Item>
            <Menu.Item key="setting" icon={<A.ChromeOutlined className="icon-size" />} >
                navegador
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
