import { themr } from 'react-css-themr';
import { AppBar } from './AppBar';
import { APP_BAR } from '../ComponentIdentifiers';
import theme from './theme.scss';

const ThemedAppBar = themr(APP_BAR, theme)(AppBar);

export default ThemedAppBar;
export { ThemedAppBar as AppBar };