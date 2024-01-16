import React from 'react'

interface ButtonProps {
    title: string
    link: string
}

export const Button: React.FC<ButtonProps> = ({ title, link }) => {
    return (
        <a href={link}>
            <button style={{ borderRadius: '30px', background: '#000', padding: '13px 47px', marginBottom: '20px' }}>
                {title}
            </button>
        </a>
    )
};


