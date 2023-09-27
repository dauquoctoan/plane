"use client";
import Script from "next/script";
import {
  FC,
  CSSProperties,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";

export interface IGoogleLoginButton {
  text?: string;
  // handleSignIn: React.Dispatch<any>;
  styles?: CSSProperties;
}

export const GoogleLoginButton: FC<IGoogleLoginButton> = () => {
  const googleSignInButton = useRef<HTMLDivElement>(null);
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);

  function handleSignIn(e: any) {
    console.log(e);
  }

  const loadScript = useCallback(() => {
    if (!googleSignInButton.current || gsiScriptLoaded) return;

    (window as any)?.google?.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID || "",
      callback: handleSignIn,
    });

    try {
      (window as any)?.google?.accounts.id.renderButton(
        googleSignInButton.current,
        {
          type: "standard",
          theme: "outline",
          size: "large",
          logo_alignment: "center",
          width: 360,
          text: "signin_with",
        } as any // customization attributes
      );
    } catch (err) {
      console.log(err);
    }

    (window as any)?.google?.accounts.id.prompt(); // also display the One Tap dialog

    setGsiScriptLoaded(true);
  }, [handleSignIn, gsiScriptLoaded]);

  useEffect(() => {
    if ((window as any)?.google?.accounts?.id) {
      loadScript();
    }
    return () => {
      (window as any)?.google?.accounts.id.cancel();
    };
  }, [loadScript]);

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        async
        defer
        onLoad={loadScript}
      />
      <div
        className="overflow-hidden rounded w-full"
        id="googleSignInButton"
        ref={googleSignInButton}
      />
    </>
  );
};
