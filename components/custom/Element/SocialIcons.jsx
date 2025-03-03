import React from 'react'

function SocialIcons({ socialIcons, style, outerStyle }) {
    return (
        <div style={outerStyle}>
            {socialIcons.map((item, index) => (
                <a href={item?.url} key={index}>
                    <img src={item?.icon} alt='icon' style={style} />
                </a>
            ))}
        </div>
    )
}

export default SocialIcons