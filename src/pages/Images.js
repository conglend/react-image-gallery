import React, { useState, useEffect } from 'react';
import ImageItem from '../components/ImageItem';
import { getImages } from '../service/api';

function Home() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getImages();
      
      if (res && res.data) {
        setImages(res.data);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  
  useEffect(() => {
    setFilteredImages( search ? images.filter(image => image.title.toLowerCase().includes(search.toLowerCase())) : images)
  }, [images, search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  console.log(filteredImages);

  return (
    <div className='container'>
      <div className='search_wrapper'>
        <label>Search : </label>
        <input name='search' placeholder='title' value={search} onChange={handleChange} />
      </div>
      { loading ? <div className='loading'>Loading...</div> : 
        filteredImages.map(image => {
            return (
              <ImageItem image={image} key={image.id}/>
            );
        })}
    </div>
  );
}

export default Home;
