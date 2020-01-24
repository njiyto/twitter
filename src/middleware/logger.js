const logger = store => next => {
  console.group(action.type);
    console.log('The action: ', action);
    const val = next(action);
    console.log('The new state: ', store.getState());
  console.groupEnd();
  return val;
};

default export logger;