import { themr } from 'react-css-themr';
import { DIALOG } from '../ComponentIdentifiers';
import { dialogFactory } from './Dialog';
import Overlay from '../overlay';
import Button from '../button';
import theme from './theme.scss';

const Dialog = dialogFactory(Overlay, Button);
const ThemedDialog = themr(DIALOG, theme)(Dialog);

export default ThemedDialog;
export { ThemedDialog as Dialog };