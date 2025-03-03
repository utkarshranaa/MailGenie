import React from 'react'

function TextComponent({ style, outerStyle, textarea }) {
    return (
        <div style={outerStyle}>
            <h2 style={style}>{textarea}</h2>
        </div>
    )
}

export default TextComponent