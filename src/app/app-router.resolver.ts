import { ResolveFn } from '@angular/router';

export const appRouterResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
