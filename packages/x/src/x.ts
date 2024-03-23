export type X$ = () => string;

const ONE = 1;

const x$: X$ = () => ONE === Math.random()
    ? '': 3 === 3
  ? 'x$'
    : '';

export default x$;

