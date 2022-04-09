import React from 'react';

function ImageItem({ image }) {
  return (
    <div className='image_item' key={image.id}>
        <div className='image_item_img_wrapper'><img alt={image.title} src={image.thumbnailUrl} /></div>
        <span className='image_item_title'>{image.title}</span>
    </div>
  );
}

export default ImageItem;
