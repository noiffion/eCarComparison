import React from 'react';
import { ICar } from '../Interfaces';

const initialDummy: ICar[] = [
  {
    _id: '',
    manufacturer: '',
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
  carList: ICar[];
}
export const Ctx = React.createContext<Context>({ carList: initialDummy });
export const CtxProvider = Ctx.Provider;
