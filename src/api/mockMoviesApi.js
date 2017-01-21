import delay from './delay'

const movies = [
  {
    id: 1,
    name: 'The Homesman',
    actor: 'Tommy Lee Jones',
    link: 'https://www.youtube.com/embed/u6uQkoXKGxM'
  },
  {
    id: 2,
    name: 'Night Moves',
    actor: 'Jesse Eisenberg',
    link: 'https://www.youtube.com/embed/s7-VqKLYZks'
  },
  {
    id: 3,
    name: 'Frío en julio',
    actor: 'Michael C. Hall',
    link: 'https://www.youtube.com/embed/ycJQJdzdhsk'
  },
  {
    id: 4,
    name: 'The Rover',
    actor: 'Guy Pearce',
    link: 'https://www.youtube.com/embed/fMCImAKWsXI'
  },
  {
    id: 5,
    name: 'Frank',
    actor: 'Michael Fassbender',
    link: 'https://www.youtube.com/embed/5cJMlGJcT2E'
  },
  {
    id: 1,
    name: 'Calvario',
    actor: 'Brendan Gleeson',
    link: 'https://www.youtube.com/embed/1YOhVyNteZU'
  }
]


function generateId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() +'-' + s4() + '-' + s4()
}


class MovieApi {
  static getAllMovies(){
    return new Promise((resolver, reject) => {
      setTimeout(() => {
        resolver(Object.assign([], movies))
      })
    }, delay)
  }

  static saveMovie(movie){
    movie = Object.assign({}, movie);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minMovieNameLength = 3;
        if(movie.name.length < minMovieNameLength){
          reject({
            error:'error',
            message:`Name must be at least ${minMovieNameLength} characters.`
          })
        }else if(movie.actor.length < minMovieNameLength){
          reject({
            error:'error',
            message:`Actor must be at least ${minMovieNameLength} characters.`
          })
        }

        movie.id = generateId()
        movies.push(movie)
      }, delay)
    })
  }

  static deleteMovie(movieId){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexMovieToDelete = movies.findIndex( movie => {
          movie.id = movieId
        })
        movies.splice(indexMovieToDelete, 1)
        resolve()
      }, delay)
    })
  }
}
