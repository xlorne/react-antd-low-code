import React from 'react'

interface CodingProps {
    children: React.ReactNode
}

export const Coding: React.FC<CodingProps> = (props) => {

    return (
        <div>{props.children}</div>
    )

}