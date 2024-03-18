import React from 'react';
import { Menu } from 'antd';
import * as A from '@ant-design/icons';
import {
  IoMailOpen,
  IoMail,
  IoMailOpenOutline,
  IoReaderOutline,
  IoPlanetOutline
} from "react-icons/io5";
import {
  TbMailCog,
  TbMailShare,
  TbMailBolt,
  TbFolderBolt,
  TbCircleMinus,
  TbSwitchHorizontal,
  TbBrandJavascript
} from "react-icons/tb";
import {
  MdAlternateEmail,
  MdFolderDelete,
  MdCreateNewFolder,
  MdOutlineFolderZip,
  MdFolderZip,
  MdDriveFileRenameOutline,
  MdOutlineWebAssetOff,
  MdKeyboardAlt,
  MdOutlineAddCircleOutline
} from "react-icons/md";
import {
  LuMailQuestion,
  LuMailSearch,
  LuFileKey,
  LuFolderSearch2,
  LuMousePointerClick
} from "react-icons/lu";
import {
  FaMailBulk,
  FaFileExport,
  FaRegCopy,
  FaLink,
  FaRegWindowRestore
} from "react-icons/fa";

const iconSize = "icon-size";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className="menu-bar">
      <Menu.SubMenu key="advanced" icon={<A.DeploymentUnitOutlined className={`${iconSize} submenu-advanced`}  />} title="Avanzados">
        <Menu.Item key="function" icon={<A.FunctionOutlined className={`${iconSize} submenu-advanced`} />}>Función</Menu.Item>
        <Menu.Item key="date-function" icon={<A.CalendarOutlined className={`${iconSize} submenu-advanced`} />}>Función de fecha</Menu.Item>
        <Menu.Item key="regex" icon={<A.FireOutlined className={`${iconSize} submenu-advanced`}/>}>Expresión regular</Menu.Item>
        <Menu.Item key="loop" icon={<A.RetweetOutlined className={`${iconSize} submenu-advanced`} />}>Ciclo</Menu.Item>
        <Menu.Item key="repetition" icon={<A.RollbackOutlined className={`${iconSize} submenu-advanced`} />}>Repetición</Menu.Item>
        <Menu.Item key="decision" icon={<A.SwapOutlined className={`${iconSize} submenu-advanced`} />}>Decisión</Menu.Item>
        <Menu.Item key="code" icon={<A.CodeOutlined className={`${iconSize} submenu-advanced`} />}>Código</Menu.Item>
        <Menu.Item key="rest-api" icon={<A.ApiOutlined className={`${iconSize} submenu-advanced`} />}>API Rest</Menu.Item>
        <Menu.Item key="exit-program" icon={<A.StopOutlined className={`${iconSize} submenu-advanced`} />}>Cerrar programa</Menu.Item>
      </Menu.SubMenu>
      
      <Menu.SubMenu key="basic" icon={<A.ProductOutlined className={`${iconSize} submenu-basicos`} />} title="Básicos">
        <Menu.Item key="start" icon={<A.PoweroffOutlined className={`${iconSize} submenu-basicos`} />}>Inicio</Menu.Item>
        <Menu.Item key="end" icon={<A.CloseCircleOutlined className={`${iconSize} submenu-basicos`} />}>Finalizar</Menu.Item>
        <Menu.Item key="go-to" icon={<A.ExportOutlined className={`${iconSize} submenu-basicos`} />}>Ir a</Menu.Item>
        <Menu.Item key="receive-from" icon={<A.ImportOutlined className={`${iconSize} submenu-basicos`} />}>Recibir de</Menu.Item>
        <Menu.Item key="alert" icon={<A.AlertOutlined className={`${iconSize} submenu-basicos`} />}>Alerta</Menu.Item>
        <Menu.Item key="window" icon={<A.AppstoreOutlined className={`${iconSize} submenu-basicos`} />}>Ventana</Menu.Item>
        <Menu.Item key="wait" icon={<A.ClockCircleOutlined className={`${iconSize} submenu-basicos`} />}>Espera</Menu.Item>
        <Menu.Item key="keys" icon={<A.LaptopOutlined className={`${iconSize} submenu-basicos`} />}>Teclas</Menu.Item>
        <Menu.Item key="open-program" icon={<A.FolderOpenFilled className={`${iconSize} submenu-basicos`} />}>Abrir programa</Menu.Item>
        <Menu.Item key="notification" icon={<A.NotificationOutlined className={`${iconSize} submenu-basicos`} />}>Notificación</Menu.Item>
        <Menu.Item key="clipboard" icon={<A.SnippetsOutlined className={`${iconSize} submenu-basicos`} />}>Portapapel</Menu.Item>
        <Menu.Item key="assign-variable" icon={<A.FieldStringOutlined className={`${iconSize} submenu-basicos`} />}>Asignar Variable</Menu.Item>
      </Menu.SubMenu>
      
      <Menu.SubMenu key="excel" icon={<A.TableOutlined className={`${iconSize} submenu-excel`}  />} title="Excel">
        <Menu.Item key="create-file" icon={<A.FileExcelOutlined className={`${iconSize} submenu-excel`} />}>Crear archivo</Menu.Item>
        <Menu.Item key="open-file" icon={<A.ReadOutlined className={`${iconSize} submenu-excel`} />}>Abrir archivo</Menu.Item>
        <Menu.Item key="select-sheet" icon={<A.FileTextOutlined className={`${iconSize} submenu-excel`} />}>Seleccionar hoja</Menu.Item>
        <Menu.Item key="send-text" icon={<A.PlusSquareOutlined className={`${iconSize} submenu-excel`} />}>Enviar texto</Menu.Item>
        <Menu.Item key="save-file" icon={<A.FileDoneOutlined className={`${iconSize} submenu-excel`} />}>Guardar archivo</Menu.Item>
        <Menu.Item key="read-cell" icon={<A.FileSearchOutlined className={`${iconSize} submenu-excel`} />}>Leer celda</Menu.Item>
        <Menu.Item key="excel-formulas" icon={<A.CalculatorFilled className={`${iconSize} submenu-excel`} />}>Fórmulas de Excel</Menu.Item>
        <Menu.Item key="excel-function" icon={<A.HolderOutlined className={`${iconSize} submenu-excel`} />}>Función de Excel</Menu.Item>
        <Menu.Item key="excel-styles" icon={<A.FormatPainterFilled className={`${iconSize} submenu-excel`} />}>Estilos</Menu.Item>
      </Menu.SubMenu>
      
      <Menu.SubMenu key="email" icon={<MdAlternateEmail className={`${iconSize} submenu-correo`} />} title="Correo">
        <Menu.SubMenu key="smtp" icon={<IoMail className={`${iconSize} submenu-correo`} />} title="SMTP">
          <Menu.Item key="smtp-config" icon={<TbMailCog className={`${iconSize} submenu-correo`} />}>Config. SMTP</Menu.Item>
          <Menu.Item key="send-email" icon={<TbMailShare className={`${iconSize} submenu-correo`} />}>Enviar Email</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="pop" icon={<IoMailOpen className={`${iconSize} submenu-correo`} />} title="POP">
          <Menu.Item key="pop-config" icon={<TbMailCog className={`${iconSize} submenu-correo`} />}>Config. POP</Menu.Item>
          <Menu.Item key="read-pop-emails"icon={<LuMailQuestion className={`${iconSize} submenu-correo`} />}>POP Leer correo</Menu.Item>
          <Menu.Item key="pop-details" icon={<LuMailSearch className={`${iconSize} submenu-correo`} />}>POP Detalles</Menu.Item>
          <Menu.Item key="update-pop-email" icon={<TbMailBolt className={`${iconSize} submenu-correo`} />}>Actualiza mail pop</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="imap" icon={<IoMailOpenOutline className={`${iconSize} submenu-correo`} />} title="IMAP">
          <Menu.Item key="imap-config" icon={<TbMailCog className={`${iconSize} submenu-correo`} />}>Config. IMAP</Menu.Item>
          <Menu.Item key="read-imap-emails" icon={<LuMailQuestion className={`${iconSize} submenu-correo`} />}>IMAP Leer correo</Menu.Item>
          <Menu.Item key="imap-details" icon={<LuMailSearch className={`${iconSize} submenu-correo`} />}>IMAP Detalles</Menu.Item>
          <Menu.Item key="manage-imap-folders" icon={<FaMailBulk className={`${iconSize} submenu-correo`} />}>Gestinar carpetas</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      
      <Menu.SubMenu key="file" icon={<A.FileOutlined className={`${iconSize} submenu-archivos`} />} title="Archivos">
        <Menu.Item key="move-file" icon={<FaFileExport className={`${iconSize} submenu-archivos`} />}>Mover archivo</Menu.Item>
        <Menu.Item key="delete-file" icon={<MdFolderDelete className={`${iconSize} submenu-archivos`} />}>Eliminar archivo</Menu.Item>
        <Menu.Item key="copy-file" icon={<FaRegCopy className={`${iconSize} submenu-archivos`} />}>Copiar archivo</Menu.Item>
        <Menu.Item key="new-folder" icon={<MdCreateNewFolder className={`${iconSize} submenu-archivos`} />}>Nueva carpeta</Menu.Item>
        <Menu.Item key="send-text-file" icon={<LuFileKey className={`${iconSize} submenu-archivos`} />}>Enviar texto</Menu.Item>
        <Menu.Item key="read-text-file" icon={<IoReaderOutline className={`${iconSize} submenu-archivos`} />}>Leer texto</Menu.Item>
        <Menu.Item key="unzip" icon={<MdOutlineFolderZip className={`${iconSize} submenu-archivos`} />}>Descomprimir zip</Menu.Item>
        <Menu.Item key="zip" icon={<MdFolderZip className={`${iconSize} submenu-archivos`} />}>Comprimir zip</Menu.Item>
        <Menu.Item key="file-functions" icon={<TbFolderBolt className={`${iconSize} submenu-archivos`} />}>Funciones de archivo</Menu.Item>
        <Menu.Item key="rename-file" icon={<MdDriveFileRenameOutline className={`${iconSize} submenu-archivos`} />}>Renombrar</Menu.Item>
        <Menu.Item key="search-file" icon={<LuFolderSearch2 className={`${iconSize} submenu-archivos`} />}>Buscar archivo</Menu.Item>
      </Menu.SubMenu>
      
      <Menu.SubMenu key="browser" icon={<A.ChromeOutlined className={`${iconSize} submenu-navegador`} />} title="Navegador">
        <Menu.Item key="new-browser" icon={<IoPlanetOutline className={`${iconSize} submenu-navegador`} />}>Nuevo navegador</Menu.Item>
        <Menu.Item key="close-browser" icon={<MdOutlineWebAssetOff className={`${iconSize} submenu-navegador`} />}>Cerrar navegador</Menu.Item>
        <Menu.Item key="send-browser-text" icon={<MdKeyboardAlt className={`${iconSize} submenu-navegador`} />}>Enviar texto</Menu.Item>
        <Menu.Item key="click" icon={<LuMousePointerClick className={`${iconSize} submenu-navegador`} />}>Hacer click</Menu.Item>
        <Menu.Item key="new-tab" icon={<MdOutlineAddCircleOutline className={`${iconSize} submenu-navegador`} />}>Nueva pestaña</Menu.Item>
        <Menu.Item key="close-tab" icon={<TbCircleMinus className={`${iconSize} submenu-navegador`} />}>Cerrar pestaña</Menu.Item>
        <Menu.Item key="url" icon={<FaLink className={`${iconSize} submenu-navegador`} />}>URL</Menu.Item>
        <Menu.Item key="change-tab" icon={<TbSwitchHorizontal className={`${iconSize} submenu-navegador`} />}>Cambiar de pestaña</Menu.Item>
        <Menu.Item key="change-frame" icon={<FaRegWindowRestore className={`${iconSize} submenu-navegador`} />}>Cambiar de frame</Menu.Item>
        <Menu.Item key="js-function" icon={<TbBrandJavascript className={`${iconSize} submenu-navegador`} />}>Función JS</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuList;
