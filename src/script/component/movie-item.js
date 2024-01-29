class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;   
        }
        :host{
            display: flex;
            flex-direction: column;
            width: 20em;
            height: 30em;
        }
        .movie-content{
            display: flex;
            flex-direction: column;
        }
        h2{
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 1.1em;
        }
        p{
            margin-top: .5em;
            font-family: 'Roboto', sans-serif;
            font-size: 1em;
        }
        img{
            width: 100%;
            height: 100%;
        }
        .movie-banner{
            height: 85%;
            position: relative;
        }
    </style>
    <div class='movie-banner'>
        <img src='${this._movie.image}' />
    </div>
    <div class='movie-content'>
        <h2>${this._movie.original_title_romanised} (${this._movie.title})</h2>
        <p>${this._movie.release_date}</p>
    </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
