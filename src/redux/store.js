import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import Reducers from "./reducers";
import middlewares from "./middlewares/index";
import translations from '../i18n';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';

export const store = compose(applyMiddleware(...middlewares))(createStore)(combineReducers(Reducers));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('en'));
