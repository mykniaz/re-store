const logMiddleware = () => (next: any) => (action: any) => {
  console.log(action.type);

  return next(action);
};

const stingMiddleware = () => (next: any) => (action: any) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }

  return next(action);
};

export {
  logMiddleware,
  stingMiddleware,
};
