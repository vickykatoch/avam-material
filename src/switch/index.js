import { themr } from 'react-css-themr';
import { switchFactory } from './Switch';
import { SWITCH } from '../ComponentIdentifiers';
import thumbFactory from './Thumb';
import themedRippleFactory from '../ripple';
import theme from './theme.scss';

const applyTheme = (Component) => themr(SWITCH, theme)(Component);
const ripple = themedRippleFactory({ centered: true, spread: 2.6 });
const ThemedThumb = applyTheme(thumbFactory(ripple));
const ThemedSwitch = applyTheme(switchFactory(ThemedThumb));

export default ThemedSwitch;
export { ThemedSwitch as Switch };