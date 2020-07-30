export interface User {
  _id: string;
  email: string;
  password: string;
  userName: string;
  userIcon?: string;
  firstName: string;
  lastName: string;
  favourites?: string[];
  reviews?: string[];
  lastLogin: Date;
}

export interface Car {
  _id: string;
  carId: string;
  userId: string;
  text: string;
  carRating: number;
  useful: number;
  timestamps: Date;
}

export interface Review {
  _id: string;
  carId: string;
  userId: string;
  text: string;
  carRating: number;
  useful: number;
  timestamps: Date;
}
