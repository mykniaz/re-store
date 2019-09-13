import React from 'react'
import { UIBtnView } from "./UIBtnView";

interface IProps {
    label?: string | undefined,
    onClick?: () => void,
    children?: any,
}

class UIBtnController extends React.Component<IProps> {
    componentDidMount(): void {
        console.log(this.props)
    }

    render() {
        return <UIBtnView {...this.props}/>
    }
}

export default UIBtnController;