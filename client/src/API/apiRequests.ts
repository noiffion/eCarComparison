import { Car, User, Review } from '../Utils/interfaces';

const API_URL = 'http://localhost:3333/';

async function defaultRequest<T>(path: string, init: RequestInit): Promise<T> {
  return fetch(`${API_URL}${path}`, init)
    .then((result) => (result.status >= 400 ? Promise.reject(result) : result))
    .then((result) => result.json())
    .catch(console.error);
}

export default {
  async getCars(): Promise<Car[]> {
    const init: RequestInit = {
      method: 'GET',
    };
    return defaultRequest<Car[]>('cars', init);
  },
  async getOneCar(carId: string): Promise<Car> {
    const init: RequestInit = {
      method: 'GET',
      headers: {
        Mode: 'cors',
      },
    };
    return defaultRequest<Car>(`cars/${carId}`, init);
  },

  async signAuth(isNew: boolean, userData: User): Promise<string> {
    const path = isNew ? 'signUp' : 'login';
    const init: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
      },
      body: JSON.stringify(userData),
    };
    return defaultRequest<string>(path, init);
  },
  async profile(jwtToken: string): Promise<User> {
    const init: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<User>('profile', init);
  },
  logout(token: string): void {
    sessionStorage.removeItem(token);
  },

  async getReviews(): Promise<Review> {
    const init: RequestInit = {
      method: 'GET',
      headers: {
        Mode: 'cors',
      },
    };
    return defaultRequest<Review>('reviews', init);
  },
  async newReview(jwtToken: string, review: Review): Promise<Review> {
    const init: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(review),
    };
    return defaultRequest<Review>('reviews', init);
  },
  async updReview(jwtToken: string, review: Review, reviewId: string): Promise<Review> {
    const init: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(review),
    };
    return defaultRequest<Review>(`reviews/${reviewId}`, init);
  },
  async delReview(jwtToken: string, reviewId: string): Promise<Review> {
    const init: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<Review>(`reviews/${reviewId}`, init);
  },
};
