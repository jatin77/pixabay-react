import React, { useState } from 'react';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Menu from '../../components/Home/Menu';
import axios from 'axios';
import { pixabayAPI } from '../../config/data';
import ResultList from '../../components/Home/ResultList';
import LottieAnimation from '../../components/common/Lottie';
import {
  lottieLoader,
  lottieNotFound,
} from '../../components/common/Lottie/lottieData';
import './styles.css';

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imagesList, setImagesList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [SearchResultsCount, setSearchResultsCount] = useState(20);

  const handleHomeClicked = () => {
    setSearchInput('');
    setImagesList([]);
    setShowMenu(true);
  };

  const searchResults = (search) => {
    setLoading(true);
    setShowMenu(false);
    axios
      .get(
        `${pixabayAPI.url}?key=${pixabayAPI.key}&q=${search}&image_type=photo&per_page=${SearchResultsCount}&safesearch=true`
      )
      .then((res) => {
        setImagesList(res.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleMenuItemClicked = (e) => {
    setSearchInput(e.target.id);
    searchResults(e.target.id);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    searchResults(searchInput);
  };

  return (
    <div>
      <Header
        homeClicked={handleHomeClicked}
        onChangeHandle={(e) => setSearchInput(e.target.value)}
        searchedImage={searchInput}
        submitForm={handleSubmitForm}
      />
      <main>
        {/*  Menu Items  */}
        {showMenu && <Menu menuItemClicked={handleMenuItemClicked} />}

        {/* Images Not Found */}
        {!showMenu && !loading && !imagesList.length ? (
          <div className='lottie-wrap'>
            <LottieAnimation file={lottieNotFound} width={200} height={200} />
          </div>
        ) : null}

        {/* Loader  */}
        {loading && (
          <div className='lottie-wrap'>
            <LottieAnimation file={lottieLoader} width={200} height={200} />
          </div>
        )}

        {/* Image List View */}
        {!showMenu && !loading && imagesList.length ? (
          <ResultList images={imagesList} />
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
