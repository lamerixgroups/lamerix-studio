declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        poster?: string;
        loading?: string;
        reveal?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string;
        exposure?: string;
        "environment-image"?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "ios-src"?: string;
      };
    }
  }
}

export {};