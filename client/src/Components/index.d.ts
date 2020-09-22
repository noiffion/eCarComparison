export interface IUser {
  _id?: string;
  email?: string;
  password?: string;
  userIcon?: string;
  firstName?: string;
  lastName?: string;
  favourites?: string[];
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICar {
  _id?: string;
  manufacturer?: string;
  logo?: string;
  name?: string;
  cardPics?: string[];
  detailPics?: string[];
  powertrain?: string;
  range?: number;
  class?: string;
  bodyStyle?: string;
  doors?: number;
  msrp?: number;
  rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IReview {
  _id?: string;
  carId?: string;
  userId?: string;
  userFirstName?: string;
  userLastName?: string;
  text?: string;
  carRating?: number;
  useful?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FormMethod<E> {
  (event: E): void;
}

export interface IToken {
  jwtToken: string;
}
