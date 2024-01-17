import React from 'react'

interface ButtonProps {
    title: string
    link: string
}

export const Button: React.FC<ButtonProps> = ({ title, link }) => {
    return (
        <a href={link}>
            <button>
                {title}
            </button>
        </a>
    )
};


