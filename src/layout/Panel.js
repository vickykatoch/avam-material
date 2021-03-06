import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { LAYOUT } from '../ComponentIdentifiers';

const Panel = ({ children, className, scrollY, theme }) => {
  const _className = classnames(theme.panel, {
    [theme.scrollY]: scrollY
  }, className);

  return (
    <div data-react-toolbox='panel' className={_className}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  scrollY: PropTypes.bool,
  theme: PropTypes.shape({
    panel: PropTypes.string,
    scrollY: PropTypes.string
  })
};

Panel.defaultProps = {
  className: '',
  scrollY: false
};

export default themr(LAYOUT)(Panel);
export { Panel };