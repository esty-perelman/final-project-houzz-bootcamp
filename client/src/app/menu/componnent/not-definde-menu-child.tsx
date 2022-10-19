import { Component } from "react";


class NotDefindeMenuChild extends Component<NotDefindeMenuChildProps, NotDefindeMenuChildState>{
    render() {
        return (
            <div>
                not definde this menu child
            </div>
        )
    }
}

type NotDefindeMenuChildProps = INotDefindeMenuChildProps
type NotDefindeMenuChildState = INotDefindeMenuChildState
interface INotDefindeMenuChildState { }
interface INotDefindeMenuChildProps { }

export default NotDefindeMenuChild;
