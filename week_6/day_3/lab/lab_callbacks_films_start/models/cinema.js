const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function (){
  let filmsByTitle = [];
  this.films.forEach((film) => {
    filmsByTitle.push(film.title);
  });
  return filmsByTitle;
    
}

Cinema.prototype.getFilmByTitle = function(title){
  let filmByTitle;
  this.films.forEach((film) => {
    if(film.title === title){
      filmByTitle = film;
    }
  });
  return filmByTitle
}

Cinema.prototype.getFilmsByGenre = function(genre){
  let filmsByGenre = this.films.filter((film) => {
    return film.genre === genre
  });
  return filmsByGenre;
}

Cinema.prototype.isFilmByYear = function(year){
  let isFilmByYear = false;
  this.films.forEach((film) =>{
    if (film.year === year){
      isFilmByYear = true;
    }

    });
    return isFilmByYear
}

Cinema.prototype.isFilmLongerThanGivenLength = function(length){
  let isFilmLinger = true;
  this.films.forEach((film) => {
    if (film.length < length){
      isFilmLinger = false;
    }
  });
  return isFilmLinger;
}

Cinema.prototype.calculateTotalRunningTime = function(){
  let total = 0;
  this.films.forEach((film) => {
    total += film.length

  });
  return total;
}

Cinema.prototype.getFilmsByProperty = function (property){
  if(typeof property === "string"){
    let filmsByGenre = this.films.filter((film) => {
      return film.genre === property;
    });
    return filmsByGenre;
  } else {
    let filmsByYear = this.films.filter((film) => {
      return film.year === property;
    });
    return filmsByYear;
  }
}

module.exports = Cinema;
