import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();

export const redirect = store => next => action => { //eslint-disable-line no-unused-vars
    if (action.type === 'ROUTING') {
        browserHistory[action.payload.method](action.payload.nextUrl);
    }

    return next(action)
}
