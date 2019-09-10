import React from 'react';

const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview"> 
            {items.filter((el, index) => index < 4).map((el) => <div key={el.id}>{el.name}</div>)}
        </div>    
    </div>
)

export default PreviewCollection;
