import DataSource from '../data/data-source';
import '../component/movie-list';

const main = async () => {
  const movieListElement = document.querySelector('movie-list');

  const renderResult = (result) => {
    movieListElement.movies = result.data;
  };

  const getMovie = async () => {
    try {
      const result = await DataSource.getMovieList();
      renderResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  getMovie();
};

export default main;
