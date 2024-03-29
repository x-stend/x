export type X$Config = Record<string, {}>;
export type X$Fn = (config?: X$Config) => Record<string, Function>;
export type X$ = X$Fn & { initialize: Function };

type X$tate = {
  initialized?: boolean;
};

const state:X$tate = {};

const x$: X$ = (config= {}) => {
  if(!state.initialized) {
    throw Error('x$ must be initialized before it can be used')
  }

  return Object
    .entries(config)
    .reduce(
      (fns, [key]) => ({...fns, [key]: () => {} }),
      {} as Record<string, Function>,
      );
};

x$.initialize = () => {
  state.initialized = true;
};


export default x$;

