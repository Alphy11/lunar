import React from 'react';
import withIcon, { Props } from '../withIcon';

function IconBell(props: Props) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M12.001 21.75c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32v-.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-2.87.68-4.5 3.24-4.5 6.32v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71z" />
    </svg>
  );
}

export default withIcon('IconBell')(IconBell);
