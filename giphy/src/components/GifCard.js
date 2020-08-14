import React from 'react';

function GifCard(props) {
    return (
        <div style={{ float: 'left', margin: " 5px 5px" }}>
            <img src={props.gif.images.fixed_height_downsampled.url} />
        </div>
    )
}

export default GifCard;