import React from 'react';

export default function Header(props){
    return (<header><h1>
        be the hero e {props.title} o que está dentro é <strong>{props.children}</strong >
    </h1></header>);
}