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
import { Spinner } from "../commont/Sniper";
import APP_CONFIG from "@/configs";
import authService from "@/services/auth-services";
import { useRouter } from 'next/navigation'

export interface IGoogleAuth{
  clientId: string;
  client_id: string;
  credential: string;
}

export interface IGoogleLoginButton {
  text?: string;
  // handleSignIn: React.Dispatch<any>;
  styles?: CSSProperties;
}

export const GoogleLoginButton: FC<IGoogleLoginButton> = () => {
  const {GOOGLE_CLIENTID} = APP_CONFIG;
  const router = useRouter()

  const googleSignInButton = useRef<HTMLDivElement>(null);
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);

  async function handleSignIn(result: IGoogleAuth) {
    const respont =  await authService.singInGoogle({ idToken: result.credential, type: 'google'})
    if(respont) router.push('/workspace');
  }
  
  const loadScript = useCallback(() => {
    if (!googleSignInButton.current || gsiScriptLoaded) return;

    (window as any)?.google?.accounts.id.initialize({
      client_id: GOOGLE_CLIENTID,
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
          width: 373,
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
      <div className={`w-full h-screen flex justify-center items-center`}>
      <div className={`h-auto w-[376px] ${gsiScriptLoaded? 'visible' : 'hidden'}`}>
          <h3 className="text-center font-semibold mb-7 text-lg">Sign in to Plane</h3>
          <input placeholder="Enter your email address..."  className="outline-none border-[1px] rounded w-full mb-[16px] border-gray-400 py-[10px] box-border px-2"/>
          <Script
            src="https://accounts.google.com/gsi/client"
            async
            defer
            onLoad={loadScript}
          />
          <button className="bg hover:bg-opacity-90 text-center w-full mb-10 bg-cyan-600 text-white rounded px-2 py-[10px] box-border">Send sign in code</button>
          <div
            className="overflow-hidden rounded"
            id="googleSignInButton"
            ref={googleSignInButton}
          />
          <div className="text-sm text-center mt-12">
            By signing up, you agree to the <a className="decoration-slice font-bold" href="#">Terms & Conditions</a>
          </div>
        </div>
        {!gsiScriptLoaded && (<Spinner/>)}
      </div>
    </>
  );
};

