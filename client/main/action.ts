import {actions as teams} from '../teams';
import {actions as members} from '../members';
import {actions as surveys} from '../surveys';

export default Object.assign(teams, members, surveys);
