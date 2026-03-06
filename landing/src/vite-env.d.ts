/// <reference types="vite/client" />
/// <reference types="@awesome.me/webawesome-pro/dist/custom-elements-jsx" />

import type React from 'react';

declare module '*.css';
declare module '@awesome.me/webawesome-pro/dist/styles/webawesome.css';
declare module '@awesome.me/webawesome-pro/dist/styles/themes/tailspin.css';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wa-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
      };
      'wa-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
        variant?: string;
        href?: string;
        target?: string;
        rel?: string;
        slot?: string;
      };
    }
  }
}
