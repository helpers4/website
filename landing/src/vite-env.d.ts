/// <reference types="vite/client" />
/// <reference types="@awesome.me/webawesome-pro/dist/custom-elements-jsx" />

import type React from 'react';

declare module '*.css';
declare module '@awesome.me/webawesome-pro/dist/styles/webawesome.css';
declare module '@awesome.me/webawesome-pro/dist/styles/themes/tailspin.css';
declare module '@awesome.me/webawesome-pro/dist/components/page/page.js';
declare module '@awesome.me/webawesome-pro/dist/components/card/card.js';
declare module '@awesome.me/webawesome-pro/dist/components/button/button.js';
declare module '@awesome.me/webawesome-pro/dist/components/icon/icon.js';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wa-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
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
      'wa-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        variant?: string;
        label?: string;
      };
    }
  }
}
