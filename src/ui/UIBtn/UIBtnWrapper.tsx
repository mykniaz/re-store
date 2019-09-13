import React from 'react';

const UIBtnWrapper:React.SFC<{label?: string, children: any}> = ({label, children}) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default UIBtnWrapper;