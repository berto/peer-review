import {actions as teams} from '../teams';
import {actions as members} from '../members';
import {actions as surveys} from '../surveys';
import {actions as feedback} from '../feedback';
import {actions as form} from '../form';

export default Object.assign(teams, members, surveys, feedback, form);
