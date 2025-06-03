import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  to, 
  href, 
  onClick, 
  className = '',
  hoverable = true
}) => {
  const classes = `overflow-hidden bg-white rounded-lg shadow-md ${
    hoverable ? 'transition-shadow duration-300 hover:shadow-lg' : ''
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <div className={`${classes} cursor-pointer`} onClick={onClick}>
        {children}
      </div>
    );
  }

  return <div className={classes}>{children}</div>;
};

export default Card;