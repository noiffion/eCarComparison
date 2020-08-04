import { ICar, IUser, IReview, IToken } from '../Interfaces';

const API_URL = 'http://localhost:3333/';

async function defaultRequest<T>(path: string, init: RequestInit, isAlert: boolean): Promise<T> {
  return fetch(`${API_URL}${path}`, init)
    .then((result) => (result.status >= 400 ? Promise.reject(result) : result))
    .then((result) => result.json())
    .catch((err) => (isAlert ? console.error(err) : alert(err.message)));
}

export default {
  async getECars(): Promise<ICar[]> {
    const init: RequestInit = {
      method: 'GET',
    };
    return defaultRequest<ICar[]>('cars', init, false);
  },
  async getOneCar(carId: string): Promise<ICar> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return defaultRequest<ICar>(`cars/${carId}`, init, false);
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
    return defaultRequest<IToken>(path, init, true);
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
    return defaultRequest<IUser>('profile', init, true);
  },

  async getReviews(): Promise<IReview> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return defaultRequest<IReview>('reviews', init, true);
  },
  async newReview(jwtToken: string, review: IReview): Promise<IReview> {
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
    return defaultRequest<IReview>('reviews', init, true);
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
    return defaultRequest<IReview>(`reviews/${reviewId}`, init, true);
  },
  async delReview(jwtToken: string, reviewId: string): Promise<IReview> {
    const init: RequestInit = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<IReview>(`reviews/${reviewId}`, init, true);
  },
};
