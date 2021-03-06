/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { AppBar as PaperAppBar } from './components/paper-app-bar/paper-app-bar';

interface HTMLPaperAppBarElement extends PaperAppBar, HTMLElement {
}
declare var HTMLPaperAppBarElement: {
  prototype: HTMLPaperAppBarElement;
  new (): HTMLPaperAppBarElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-app-bar": HTMLPaperAppBarElement;
  }
  interface ElementTagNameMap {
      "paper-app-bar": HTMLPaperAppBarElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-app-bar": JSXElements.PaperAppBarAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperAppBarAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { Avatar as PaperAvatar } from './components/paper-avatar/paper-avatar';

interface HTMLPaperAvatarElement extends PaperAvatar, HTMLElement {
}
declare var HTMLPaperAvatarElement: {
  prototype: HTMLPaperAvatarElement;
  new (): HTMLPaperAvatarElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-avatar": HTMLPaperAvatarElement;
  }
  interface ElementTagNameMap {
      "paper-avatar": HTMLPaperAvatarElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-avatar": JSXElements.PaperAvatarAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperAvatarAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          name?: string,
          src?: string
      }
  }
}

import { DrawerLayout as PaperDrawerLayout } from './components/paper-drawer-layout/paper-drawer-layout';

interface HTMLPaperDrawerLayoutElement extends PaperDrawerLayout, HTMLElement {
}
declare var HTMLPaperDrawerLayoutElement: {
  prototype: HTMLPaperDrawerLayoutElement;
  new (): HTMLPaperDrawerLayoutElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-drawer-layout": HTMLPaperDrawerLayoutElement;
  }
  interface ElementTagNameMap {
      "paper-drawer-layout": HTMLPaperDrawerLayoutElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-drawer-layout": JSXElements.PaperDrawerLayoutAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperDrawerLayoutAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { Drawer as PaperDrawer } from './components/paper-drawer/paper-drawer';

interface HTMLPaperDrawerElement extends PaperDrawer, HTMLElement {
}
declare var HTMLPaperDrawerElement: {
  prototype: HTMLPaperDrawerElement;
  new (): HTMLPaperDrawerElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-drawer": HTMLPaperDrawerElement;
  }
  interface ElementTagNameMap {
      "paper-drawer": HTMLPaperDrawerElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-drawer": JSXElements.PaperDrawerAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperDrawerAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          toggle?: any,
          open?: any,
          close?: any,
          opened?: boolean
      }
  }
}

import { FAB as PaperFab } from './components/paper-fab/paper-fab';

interface HTMLPaperFabElement extends PaperFab, HTMLElement {
}
declare var HTMLPaperFabElement: {
  prototype: HTMLPaperFabElement;
  new (): HTMLPaperFabElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-fab": HTMLPaperFabElement;
  }
  interface ElementTagNameMap {
      "paper-fab": HTMLPaperFabElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-fab": JSXElements.PaperFabAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperFabAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { HeaderLayout as PaperHeaderLayout } from './components/paper-header-layout/paper-header-layout';

interface HTMLPaperHeaderLayoutElement extends PaperHeaderLayout, HTMLElement {
}
declare var HTMLPaperHeaderLayoutElement: {
  prototype: HTMLPaperHeaderLayoutElement;
  new (): HTMLPaperHeaderLayoutElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-header-layout": HTMLPaperHeaderLayoutElement;
  }
  interface ElementTagNameMap {
      "paper-header-layout": HTMLPaperHeaderLayoutElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-header-layout": JSXElements.PaperHeaderLayoutAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperHeaderLayoutAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { Icon as PaperIcon } from './components/paper-icon/paper-icon';

interface HTMLPaperIconElement extends PaperIcon, HTMLElement {
}
declare var HTMLPaperIconElement: {
  prototype: HTMLPaperIconElement;
  new (): HTMLPaperIconElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-icon": HTMLPaperIconElement;
  }
  interface ElementTagNameMap {
      "paper-icon": HTMLPaperIconElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-icon": JSXElements.PaperIconAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperIconAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          icon?: string
      }
  }
}

import { InputText as PaperInput } from './components/paper-input/paper-input';

interface HTMLPaperInputElement extends PaperInput, HTMLElement {
}
declare var HTMLPaperInputElement: {
  prototype: HTMLPaperInputElement;
  new (): HTMLPaperInputElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-input": HTMLPaperInputElement;
  }
  interface ElementTagNameMap {
      "paper-input": HTMLPaperInputElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-input": JSXElements.PaperInputAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperInputAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          getValue?: any,
          type?: string,
          hint?: string,
          label?: string,
          id?: string,
          multiLine?: boolean,
          alwaysFloatLabel?: boolean,
          value?: string
      }
  }
}

import { ListItem as PaperListItem } from './components/paper-list/paper-list-item';

interface HTMLPaperListItemElement extends PaperListItem, HTMLElement {
}
declare var HTMLPaperListItemElement: {
  prototype: HTMLPaperListItemElement;
  new (): HTMLPaperListItemElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-list-item": HTMLPaperListItemElement;
  }
  interface ElementTagNameMap {
      "paper-list-item": HTMLPaperListItemElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-list-item": JSXElements.PaperListItemAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperListItemAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          twoLine?: boolean
      }
  }
}

import { List as PaperList } from './components/paper-list/paper-list';

interface HTMLPaperListElement extends PaperList, HTMLElement {
}
declare var HTMLPaperListElement: {
  prototype: HTMLPaperListElement;
  new (): HTMLPaperListElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "paper-list": HTMLPaperListElement;
  }
  interface ElementTagNameMap {
      "paper-list": HTMLPaperListElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "paper-list": JSXElements.PaperListAttributes;
      }
  }
  namespace JSXElements {
      export interface PaperListAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

