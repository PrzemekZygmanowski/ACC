import { fromPairs, merge, toPairs } from 'lodash';
import { combineReducers } from 'redux';

import { modules } from './domain';

// export default combineReducers({
//   ...fromPairs(merge(modules.map(({ reducers }) => toPairs(reducers)).flat())),
// });
