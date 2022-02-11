import { forwardRef } from "react";
import { Link } from "react-router-dom";

/**
 * @typedef {import('react-router-dom').LinkProps} RouterLinkProps
 */

/**
 * @type {React.ForwardRefExoticComponent<
 *   Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
 * >}
 */
export const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <Link ref={ref} to={href} {...other} />;
});
