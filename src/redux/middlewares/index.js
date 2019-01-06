import { createLogger } from 'redux-logger';
const logger = createLogger();
import thunk from 'redux-thunk';

export default [
    thunk,
    logger
]
