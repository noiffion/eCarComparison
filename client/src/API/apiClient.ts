/*
import Movie from '../interfaces/movie-model';
import Genre from '../interfaces/category-model';

const API_URL = 'http://localhost:3333/';


export async function getDiscoverMovies(): Promise<Movie[]> {
  return fetch(`${baseURL}/discover`)
    .then(results => results.json());
}

export async function getCategories(): Promise<Genre[]> {
  return fetch(`${baseURL}/categories`)
    .then(results => results.json());
}

export async function getMoviesPerCategory(id:number): Promise<Movie[]> {
  return fetch(`${baseURL}/categories/${id}`)
    .then(results => results.json());
}

B


export default {
  getEvents: async () => {
    const init = {
      method: 'GET',
    }
    return await defaultRequest('events', init);
  },
  findOneEvent: async (eventId) => {
    const init = {
      method: 'GET',
    };
    return await defaultRequest(`events/${eventId}`, init);
  },
  newEvent: async (eventData) => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
    };
    return await defaultRequest('events', init);
  },
  updateEvent: async (eventData) => {
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
    };
    return await defaultRequest(`events/update/${eventData._id}`, init);
  },
  deleteEvent: async (eventId) => {
    const init = {
      method: 'DELETE',
    };
    return await defaultRequest(`events/delete/${eventId}`, init);
  }
}


const defaultRequest = async (path, init) => {
  return fetch(`${API_URL}${path}`, init)
    .then(result => result.status >= 400 ? Promise.reject(result) : result)
    .then(result => result.json())
    .catch(console.error);   // eslint-disable-line no-console
}
*/
