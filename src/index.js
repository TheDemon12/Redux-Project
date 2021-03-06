import configureStore from './store/configureStore';
import {
	bugAdded,
	bugRemoved,
	bugResolved,
	bugAssignedToUser,
	getUnresolvedBugs,
	getBugsByUser,
	loadBugs,
	resolveBug,
	assignBugToUser,
} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();
const unsubscribe = store.subscribe(() =>
	console.log('Store Changed!', store.getState())
);

// store.dispatch(bugAdded({ description: 'Bug1' }));

// store.dispatch({ type: 'error', payload: { message: 'haha you suck' } });
// store.dispatch(bugAdded({ description: 'Bug2' }));
// store.dispatch(bugAdded({ description: 'Bug3' }));
// store.dispatch(bugAdded({ description: 'Bug4' }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 3 }));

// store.dispatch(projectAdded({ name: 'Project 1' }));

// store.dispatch(userAdded({ name: 'kartik' }));
// store.dispatch(bugAssignedToUser({ userId: 1, bugId: 2 }));

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());

// store.dispatch(loadBugs());

store.dispatch(loadBugs());

setTimeout(() => {
	store.dispatch(assignBugToUser(2, 3));
}, 2000);

// console.log(x === y);

// const bugs = getBugsByUser(1)(store.getState());

// console.log(bugs);
