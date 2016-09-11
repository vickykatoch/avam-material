import { themr } from 'react-css-themr';
import { APP_BAR } from '../ComponentIdentifiers';
import { appBarFactory } from './AppBar.js';
import FontIcon from '../fonticon/FontIcon.js';
import theme from './theme.scss';

const AppBar = appBarFactory(FontIcon);
const ThemedAppBar = themr(APP_BAR, theme)(AppBar);

export default ThemedAppBar;
export { ThemedAppBar as AppBar };