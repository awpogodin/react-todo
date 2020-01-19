import React from 'react';

const style = {
    card: {
        margin: '60px auto',
        padding: '30px',
        backgroundColor: 'white',
        boxShadow: '5px 5px 30px 0px rgba(33,33,33,0.2)'
    },
    title: {
        color: '#212121',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '24px'
    },
    content: {
        fontStyle: 'italic'
    }
};

const Card = ({title = 'card', children}) => {
    return (
        <div style={style.card}>
            <h2 style={style.title}>{title}</h2>
            <div style={style.content}>{children}</div>
        </div>
    )
};

export default Card;