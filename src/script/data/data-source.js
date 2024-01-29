import axios from 'axios';

class DataSource {
  static async getMovieList() {
    try {
      const response = await axios.get('https://ghibliapi.vercel.app/films');
      return response;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
}

export default DataSource;
