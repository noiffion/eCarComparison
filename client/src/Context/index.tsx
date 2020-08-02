import React from 'react';
import { ICar } from '../Interfaces';

const initialDummy: ICar[] = [
  {
    _id: '',
    manufacturer: '',
    logo: '',
    name: '',
    cardPics: [],
    powertrain: '',
    class: '',
    bodyStyle: '',
    doors: 0,
    msrp: 0,
    rating: 0,
  },
];

export interface Context {
  eCarList: ICar[];
}
export const Ctx = React.createContext<Context>({ eCarList: initialDummy });
export const CtxProvider = Ctx.Provider;
