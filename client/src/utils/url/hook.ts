import {useContext} from 'react';

import {UrlContext} from './context';

export function useUrl() {
  return useContext(UrlContext);
}
