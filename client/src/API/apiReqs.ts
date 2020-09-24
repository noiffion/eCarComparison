import { ICar, IUser, IReview, SignAuth, SignedUrl } from '../Components/index.d';

const API_URL = 'http://localhost:5000/';

async function request<T>(path: string, init: RequestInit): Promise<T> {
  return fetch(`${API_URL}${path}`, init)
    .then((resp: Response) => (resp.status >= 400 ? Promise.reject(resp) : resp))
    .then((resp: Response) => resp.json())
    .catch(console.error);
}

export default {
  async getECars(): Promise<ICar[]> {
    const init: RequestInit = {
      method: 'GET',
    };
    return request<ICar[]>('cars', init);
  },
  async getOneCar(carId: string): Promise<ICar> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return request<ICar>(`cars/${carId}`, init);
  },

  async signAuth(isNew: boolean, userData: IUser): Promise<SignAuth> {
    const path = isNew ? 'signUp' : 'signIn';
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
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return request<IUser>('profile', init);
  },
  async putAWSSign(jwtToken: string, fileName: string): Promise<SignedUrl> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    return request<SignedUrl>(`profile/pic/${fileName}`, init);
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
    return request<IUser>('profile/pic', init);
  },

  async getReviews(carId: string): Promise<IReview[]> {
    const init: RequestInit = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    return request<IReview[]>(`reviews/${carId}`, init);
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
    return request<IReview[]>('reviews', init);
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
    return request<IReview>(`reviews/${reviewId}`, init);
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
    return request<IReview[]>(`reviews/${reviewId}`, init);
  },
};
