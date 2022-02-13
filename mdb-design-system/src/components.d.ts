/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MdbButton {
        "appearance": string;
        "text": string;
    }
    interface MdbModal {
        "appearance": string;
        "buttons": string;
        "closeIcon": string;
        "header": string;
        "isopen": boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMdbButtonElement extends Components.MdbButton, HTMLStencilElement {
    }
    var HTMLMdbButtonElement: {
        prototype: HTMLMdbButtonElement;
        new (): HTMLMdbButtonElement;
    };
    interface HTMLMdbModalElement extends Components.MdbModal, HTMLStencilElement {
    }
    var HTMLMdbModalElement: {
        prototype: HTMLMdbModalElement;
        new (): HTMLMdbModalElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "mdb-button": HTMLMdbButtonElement;
        "mdb-modal": HTMLMdbModalElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MdbButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface MdbModal {
        "appearance"?: string;
        "buttons"?: string;
        "closeIcon"?: string;
        "header"?: string;
        "isopen"?: boolean;
        "onAction"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "mdb-button": MdbButton;
        "mdb-modal": MdbModal;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mdb-button": LocalJSX.MdbButton & JSXBase.HTMLAttributes<HTMLMdbButtonElement>;
            "mdb-modal": LocalJSX.MdbModal & JSXBase.HTMLAttributes<HTMLMdbModalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
