import React from 'react';

import UIBtnWrapper from "./UIBtnWrapper";

interface IProps {
    label?: string | undefined
    onClick?: () => void
}

export const UIBtnView:React.SFC<IProps> = ({label, onClick, children}) => {
    return (
        <UIBtnWrapper label={label}>
            <button className="ui-btn"
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        </UIBtnWrapper>

    )
};

export default UIBtnView;