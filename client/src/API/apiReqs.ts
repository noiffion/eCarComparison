import { ICar, IUser, IReview, SignAuth, SignedUrl } from '../Components/index.d';

const API_URL = 'http://localhost:8080/api/';

async function request<T>(path: string, init: RequestInit): Promise<T> {
  return fetch(`${API_URL}${path}`, init)
    .then((resp: Response) => (resp.status >= 400 ? Promise.reject(resp) : resp))
    .then((resp: Response) => resp.json())
    .catch(console.error);
}

export default {
  async getECars(): Promise<ICar[]> {
    const path = 'cars';
    const init: RequestInit = {
      method: 'GET',
    };
    return request<ICar[]>(path, init);
  },
  async getOneCar(carId: string): Promise<ICar> {
    const path = `cars/${carId}`;
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return request<ICar>(path, init);
  },

  async signAuth(isNew: boolean, userData: IUser): Promise<SignAuth> {
    const path = isNew ? 'users/signUp' : 'users/signIn';
    const init: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    return request<SignAuth>(path, init);
  },
  async profile(jwtToken: string): Promise<IUser> {
    const path = 'users/profile';
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return request<IUser>(path, init);
  },
  async putAWSSign(jwtToken: string, fileName: string): Promise<SignedUrl> {
    const path = `users/profile/pic/${fileName}`;
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return request<SignedUrl>(path, init);
  },
  async uploadToS3(signedUrl: string, imageFile: File): Promise<string | void> {
    const init: RequestInit = {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': imageFile.type,
      },
      body: imageFile,
    };
    return fetch(signedUrl, init)
      .then((resp: Response) => (resp.status >= 400 ? Promise.reject(resp) : resp))
      .then((resp: Response) => resp.text())
      .catch(console.error);
  },
  async uploadProfilePic(jwtToken: string, profilePic: IUser): Promise<IUser> {
    const path = 'users/profile/pic';
    const init: RequestInit = {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(profilePic),
    };
    return request<IUser>(path, init);
  },

  async getReviews(carId: string): Promise<IReview[]> {
    const path = `reviews/${carId}`;
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return request<IReview[]>(path, init);
  },
  async newReview(jwtToken: string, review: IReview): Promise<IReview[]> {
    const path = 'reviews';
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
    return request<IReview[]>(path, init);
  },
  async updReview(jwtToken: string, review: IReview, reviewId: string): Promise<IReview> {
    const path = `reviews/${reviewId}`;
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
    return request<IReview>(path, init);
  },
  async delReview(jwtToken: string, reviewId: string): Promise<IReview[]> {
    const path = `reviews/${reviewId}`;
    const init: RequestInit = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Credentials: 'include',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return request<IReview[]>(path, init);
  },
};
