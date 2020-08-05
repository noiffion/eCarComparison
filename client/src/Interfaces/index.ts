export interface IUser {
  _id?: string;
  email: string;
  password?: string;
  userIcon?: string;
  firstName?: string;
  lastName?: string;
  favourites?: string[];
  reviews?: string[];
  lastLogin: Date;
}

export interface ICar {
  _id: string;
  manufacturer: string;
  logo: string;
  name: string;
  cardPics: string[];
  detailPics: string[];
  powertrain: string;
  range: number;
  class: string;
  bodyStyle: string;
  doors: number;
  msrp: number;
  rating: number;
}

export interface IReview {
  _id: string;
  carId: string;
  userId: string;
  text: string;
  carRating: number;
  useful: number;
  timestamps: Date;
}

export interface FormMethod<E> {
  (event: E): void;
}

export interface IToken {
  jwtToken: string;
}
