import { TabMenu } from "primereact/tabmenu";
import { Component } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Outlet } from "react-router-dom";
import WithRouter, { IWithRouterProps } from "../../with-router";


const Menu = WithRouter(
    class MenuWIthoutRouter extends Component<MenuProps, MenuState>{
        constructor(props: MenuProps) {
            const { navigate } = props
            super(props);
            this.state = {
                menuItems: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { navigate("/") } },
                    { label: 'Data', icon: 'pi pi-fw pi-file', command: () => { navigate("/Data") } },
                    { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => { navigate("/notDefindeMenuChild") } }
                ]
            }
        }
        render() {
            const { menuItems } = this.state;
            return (
                <div>
                    <TabMenu model={menuItems} />
                    <Outlet />
                </div>
            )
        }
    }
)

type MenuProps = IMenuProps & IWithRouterProps
type MenuState = IMemuState
interface IMenuProps { }
interface IMemuState { menuItems: Array<any> }

export default Menu;
