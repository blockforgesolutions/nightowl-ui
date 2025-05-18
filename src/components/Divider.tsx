import React from 'react'

interface DividerProp {
    height: string,
    color: string
}

const Divider: React.FC<DividerProp> = ({ height, color }) => {
    return (
        <hr className={`my-2 border-t-${height} border-${color} rounded-full`} />
    )
}

export default Divider