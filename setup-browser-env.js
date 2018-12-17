import browserEnv from 'browser-env';

global.Braintree = {};
browserEnv(['window', 'document', 'navigator']);
