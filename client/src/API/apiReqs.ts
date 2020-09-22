import { ICar, IUser, IReview, IToken } from '../Components/index.d';

const API_URL = 'http://localhost:5000/';

async function defaultRequest<T>(path: string, init: RequestInit): Promise<T> {
  return fetch(`${API_URL}${path}`, init)
    .then((result) => (result.status >= 400 ? Promise.reject(result) : result))
    .then((result) => result.json())
    .catch(console.error);
}

export default {
  async getECars(): Promise<ICar[]> {
    const init: RequestInit = {
      method: 'GET',
    };
    return defaultRequest<ICar[]>('cars', init);
  },
  async getOneCar(carId: string): Promise<ICar> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return defaultRequest<ICar>(`cars/${carId}`, init);
  },

  async signAuth(isNew: boolean, userData: IUser): Promise<IToken> {
    const path = isNew ? 'signUp' : 'signIn';
    const init: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    return defaultRequest<IToken>(path, init);
  },
  async profile(jwtToken: string): Promise<IUser> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<IUser>('profile', init);
  },

  async getReviews(carId: string): Promise<IReview[]> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return defaultRequest<IReview[]>(`reviews/${carId}`, init);
  },
  async newReview(jwtToken: string, review: IReview): Promise<IReview[]> {
    const init: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(review),
    };
    return defaultRequest<IReview[]>('reviews', init);
  },
  async updReview(jwtToken: string, review: IReview, reviewId: string): Promise<IReview> {
    const init: RequestInit = {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(review),
    };
    return defaultRequest<IReview>(`reviews/${reviewId}`, init);
  },
  async delReview(jwtToken: string, reviewId: string): Promise<IReview[]> {
    const init: RequestInit = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<IReview[]>(`reviews/${reviewId}`, init);
  },
};
