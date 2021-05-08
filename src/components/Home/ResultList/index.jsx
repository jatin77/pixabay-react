import React from 'react';
import './styles.css';

const ResultList = ({ images }) => (
  <div className='resultList-container'>
    {images.map((image) => (
      <img key={image.id} src={image.largeImageURL} alt='img' />
    ))}
  </div>
);

export default ResultList;
