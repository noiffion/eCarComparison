import { ICar, IUser, IReview } from '../Interfaces';

const API_URL = 'http://localhost:3333/';

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
      headers: {
        Mode: 'cors',
      },
    };
    return defaultRequest<ICar>(`cars/${carId}`, init);
  },

  async signAuth(isNew: boolean, userData: IUser): Promise<string> {
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
  async profile(jwtToken: string): Promise<IUser> {
    const init: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<IUser>('profile', init);
  },
  logout(token: string): void {
    sessionStorage.removeItem(token);
  },

  async getReviews(): Promise<IReview> {
    const init: RequestInit = {
      method: 'GET',
      headers: {
        Mode: 'cors',
      },
    };
    return defaultRequest<IReview>('reviews', init);
  },
  async newReview(jwtToken: string, review: IReview): Promise<IReview> {
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
    return defaultRequest<IReview>('reviews', init);
  },
  async updReview(jwtToken: string, review: IReview, reviewId: string): Promise<IReview> {
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
    return defaultRequest<IReview>(`reviews/${reviewId}`, init);
  },
  async delReview(jwtToken: string, reviewId: string): Promise<IReview> {
    const init: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Mode: 'cors',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return defaultRequest<IReview>(`reviews/${reviewId}`, init);
  },
};
