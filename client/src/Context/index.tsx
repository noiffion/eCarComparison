import { createContext } from 'react';
import { ICar } from '../Interfaces';

const initialDummy: ICar[] = [
  {
    _id: '',
    manufacturer: '',
    logo: '',
    name: '',
    cardPics: [],
    detailPics: [],
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
export const Ctx = createContext<Context>({ eCarList: initialDummy });
export const CtxProvider = Ctx.Provider;
