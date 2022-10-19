import { Component } from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import WithRouter, { IWithRouterProps } from "../../with-router";


const Data = WithRouter(
    class DataWithoutRouter extends Component<DataProps, DataState>{
        constructor(props: DataProps) {
            super(props);
            this.state = {}
        }

        render() {
            const { navigate } = this.props
            return (
                <div>
                    <Button onClick={() => { navigate("/addItem") }}>add item</Button>
                    <Outlet />
                </div>
            );
        }
    }
)

type DataProps = IDataProps & IWithRouterProps;
type DataState = IDataState
interface IDataProps { }
interface IDataState { }

export default Data;
