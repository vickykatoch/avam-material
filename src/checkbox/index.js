import { themr } from 'react-css-themr';
import { CHECKBOX } from '../ComponentIdentifiers';
import themedRippleFactory from '../ripple';
import { checkboxFactory } from './Checkbox';
import checkFactory from './Check';
import theme from './theme.scss';

const ThemedCheck = checkFactory(themedRippleFactory({ centered: true, spread: 2.6}));
const ThemedCheckbox = themr(CHECKBOX, theme)(checkboxFactory(ThemedCheck));

export default ThemedCheckbox;
export { ThemedCheckbox as Checkbox };