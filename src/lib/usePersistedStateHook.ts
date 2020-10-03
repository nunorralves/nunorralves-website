import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, value: T): Response<T> {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return value;
    }
    try {
      const unparsedValue = window.localStorage[key];
      if (typeof unparsedValue === 'undefined') {
        return value;
      }
      return JSON.parse(unparsedValue);
    } catch (error) {
      return value;
    }
  });

  useEffect(() => {
    window.localStorage[key] = JSON.stringify(state);
    // console.log('Changed!:', state, value);
  }, [state]);

  return [state, setState];
}

export default usePersistedState;
