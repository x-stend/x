export type X$ = () => string;

const x$: X$ = () =>
'x'      + "$"
      ;

export default x$;

