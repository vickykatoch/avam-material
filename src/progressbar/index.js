import { themr } from 'react-css-themr';
import { PROGRESS_BAR } from '../ComponentIdentifiers';
import { ProgressBar } from './ProgressBar';
import theme from './theme.scss';

const ThemedProgressBar = themr(PROGRESS_BAR, theme)(ProgressBar);

export default ThemedProgressBar;
export { ThemedProgressBar as ProgressBar };