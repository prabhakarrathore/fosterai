import Tooltip from '@mui/material/Tooltip';
import { forwardRef, ReactNode, Ref } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import IconElement from '../util/commonUtility';
import clsx from 'clsx';

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  iconName?: string;
  open: boolean;
  name: string;
  isSubmenu?: boolean;
}

const CustomLink = forwardRef(
  (
    { children, to, name, iconName, open, isSubmenu = false, ...rest }: CustomLinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const location = useLocation();

    // Determine if the link is active based on both path and query parameters
    const isActive = location.pathname === to;

    return (
      <Tooltip title={!open ? name : null} enterDelay={200} enterNextDelay={100} arrow>
        <Link
          to={to}
          {...rest}
          className={clsx(isActive && 'bg-[#636363] text-white is-active', !open && 'py-3', 'flex items-center justify-center gap-1.5 w-full py-2 px-4 is-menu', isSubmenu && 'py-[0.3rem] is-submenu pl-11')}
          ref={ref}
        >
          {iconName && (
            <>
              <IconElement iconName={iconName.toString()} size={22} />
            </>
          )}
          {children}
        </Link>
      </Tooltip>
    );
  }
);

export default CustomLink;
