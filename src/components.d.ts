/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VictorSideDrawer {
        "drawerTitle": string;
        "open": () => Promise<void>;
        "opened": boolean;
    }
    interface VictorSpinner {
    }
    interface VictorStockFinder {
    }
    interface VictorStockPrice {
        "stockSymbol": string;
    }
    interface VictorTooltip {
        "tooltipText": string;
    }
}
export interface VictorStockFinderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVictorStockFinderElement;
}
declare global {
    interface HTMLVictorSideDrawerElement extends Components.VictorSideDrawer, HTMLStencilElement {
    }
    var HTMLVictorSideDrawerElement: {
        prototype: HTMLVictorSideDrawerElement;
        new (): HTMLVictorSideDrawerElement;
    };
    interface HTMLVictorSpinnerElement extends Components.VictorSpinner, HTMLStencilElement {
    }
    var HTMLVictorSpinnerElement: {
        prototype: HTMLVictorSpinnerElement;
        new (): HTMLVictorSpinnerElement;
    };
    interface HTMLVictorStockFinderElement extends Components.VictorStockFinder, HTMLStencilElement {
    }
    var HTMLVictorStockFinderElement: {
        prototype: HTMLVictorStockFinderElement;
        new (): HTMLVictorStockFinderElement;
    };
    interface HTMLVictorStockPriceElement extends Components.VictorStockPrice, HTMLStencilElement {
    }
    var HTMLVictorStockPriceElement: {
        prototype: HTMLVictorStockPriceElement;
        new (): HTMLVictorStockPriceElement;
    };
    interface HTMLVictorTooltipElement extends Components.VictorTooltip, HTMLStencilElement {
    }
    var HTMLVictorTooltipElement: {
        prototype: HTMLVictorTooltipElement;
        new (): HTMLVictorTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "victor-side-drawer": HTMLVictorSideDrawerElement;
        "victor-spinner": HTMLVictorSpinnerElement;
        "victor-stock-finder": HTMLVictorStockFinderElement;
        "victor-stock-price": HTMLVictorStockPriceElement;
        "victor-tooltip": HTMLVictorTooltipElement;
    }
}
declare namespace LocalJSX {
    interface VictorSideDrawer {
        "drawerTitle"?: string;
        "opened"?: boolean;
    }
    interface VictorSpinner {
    }
    interface VictorStockFinder {
        "onCsSymbolSelected"?: (event: VictorStockFinderCustomEvent<string>) => void;
    }
    interface VictorStockPrice {
        "stockSymbol"?: string;
    }
    interface VictorTooltip {
        "tooltipText"?: string;
    }
    interface IntrinsicElements {
        "victor-side-drawer": VictorSideDrawer;
        "victor-spinner": VictorSpinner;
        "victor-stock-finder": VictorStockFinder;
        "victor-stock-price": VictorStockPrice;
        "victor-tooltip": VictorTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "victor-side-drawer": LocalJSX.VictorSideDrawer & JSXBase.HTMLAttributes<HTMLVictorSideDrawerElement>;
            "victor-spinner": LocalJSX.VictorSpinner & JSXBase.HTMLAttributes<HTMLVictorSpinnerElement>;
            "victor-stock-finder": LocalJSX.VictorStockFinder & JSXBase.HTMLAttributes<HTMLVictorStockFinderElement>;
            "victor-stock-price": LocalJSX.VictorStockPrice & JSXBase.HTMLAttributes<HTMLVictorStockPriceElement>;
            "victor-tooltip": LocalJSX.VictorTooltip & JSXBase.HTMLAttributes<HTMLVictorTooltipElement>;
        }
    }
}
