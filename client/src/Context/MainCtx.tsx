import * as React from 'react';

export interface IMainCtx {
  value: string;
}

export const MainCtx = React.createContext('');
export const MainCtxP = MainCtx.Provider;
