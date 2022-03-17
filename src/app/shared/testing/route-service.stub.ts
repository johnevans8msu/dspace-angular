import { EMPTY, of as observableOf } from 'rxjs';

export const routeServiceStub: any = {
  /* tslint:disable:no-empty */
  hasQueryParamWithValue: (param: string, value: string) => {
    return EMPTY;
  },
  hasQueryParam: (param: string) => {
    return EMPTY;
  },
  removeQueryParameterValue: (param: string, value: string) => {
    return EMPTY;
  },
  addQueryParameterValue: (param: string, value: string) => { return EMPTY;
  },
  getQueryParameterValues: (param: string) => {
    return observableOf({});
  },
  getQueryParamsWithPrefix: (param: string) => {
    return observableOf({});
  },
  getQueryParamMap: () => {
    return observableOf(new Map());
  },
  getQueryParameterValue: () => {
    return observableOf({});
  },
  getRouteParameterValue: (param) => {
    return observableOf('');
  },
  getRouteDataValue: (param) => {
    return observableOf({});
  },
  getHistory: () => {
    return observableOf(['/home','/collection/123','/home']);
  }
  /* tslint:enable:no-empty */
};
