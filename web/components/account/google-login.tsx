'use client';
import Script from 'next/script';
import React, {
  FC,
  CSSProperties,
  useEffect,
  useRef,
  useCallback,
  useState,
  Suspense,
} from 'react';
import { Spinner } from '../ui/loading/Spinner';
import APP_CONFIG from '@/configs';
import authService from '@/services/auth-services';
import { useDispatch, useSelector } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import { Form, useForm } from 'react-hook-form';
import Input from '../ui/input/Input';
import { VALIDATE_EMAIL } from '@/constants';
import { useNoti } from '@/hooks';
import { VscLoading } from 'react-icons/vsc';

export interface IGoogleAuth {
  clientId: string;
  client_id: string;
  credential: string;
}

export interface IGoogleLoginButton {
  text?: string;
  styles?: CSSProperties;
}

const GoogleLoginButtonitem: FC<IGoogleLoginButton> = () => {
  const [isCheckPin, setCheckPin] = useState(false);
  const [value, setValuePin] = useState<string[]>(Array(4).fill(''));
  const { GOOGLE_CLIENTID } = APP_CONFIG;
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const googleSignInButton = useRef<HTMLDivElement>(null);
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const dispatch = useDispatch();
  const noti = useNoti();
  async function handleSignIn(result: IGoogleAuth) {
    const respont = await authService.singInGoogle({
      idToken: result.credential,
      type: 'google',
    });

    if (respont) getInfo();
  }

  const {
    register: registerParent,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<{ email: string }>();

  async function getInfo() {
    const user = await authService.getUser();
    if (user && user?.id) {
      dispatch(authSlice.actions.setInfo(user));
    }
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
          type: 'standard',
          theme: 'outline',
          size: 'large',
          logo_alignment: 'center',
          width: 373,
          text: 'signin_with',
        } as any
      );
    } catch (err) {
      console.log(err);
    }

    (window as any)?.google?.accounts.id.prompt();
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

  async function handleGenaratePin(email: string) {
    const res = await authService.genaratePin(email);
    if (res) setCheckPin(true);
  }

  async function handleCheckPin() {
    setLoading(true);
    const result = await authService.checkPin(
      getValues('email'),
      value.join('')
    );
    setLoading(false);
    if (result) getInfo();
    noti?.error('Login failed, please try again!');
  }

  useEffect(() => {
    if (value.every(e => e != '')) {
      handleCheckPin();
    }
  }, [value]);

  function getText() {
    if (navigator.clipboard) {
      navigator.clipboard
        .readText()
        .then(text => {
          if (text.length == 4)
            setValuePin(text.split('') || Array(4).fill(''));
        })
        .catch(err => {
          console.error('Lỗi khi đọc văn bản từ clipboard:', err);
        });
    } else {
      console.error('Trình duyệt không hỗ trợ Clipboard API.');
    }
  }

  useEffect(() => {
    document.getElementById('input-pin-' + tab)?.focus();
  }, [tab]);

  return (
    <form
      onSubmit={handleSubmit(async data => {
        handleGenaratePin(data.email);
      })}
    >
      <div className={`w-full h-screen flex justify-center items-center`}>
        <div
          className={`h-[310px] w-[95%] md:w-[376px] ${
            gsiScriptLoaded ? 'visited:' : 'invisible'
          }`}
        >
          <h3 className="text-center font-semibold mb-7 text-lg">
            Sign in to Plane
          </h3>
          <Input
            wrClassName="mb-4"
            keyForm="email"
            style={{ padding: '11px' }}
            placeholder="Enter your email address..."
            error={errors}
            register={registerParent}
            validator={{
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                message: 'Invalid email',
                value: VALIDATE_EMAIL,
              },
            }}
            setValue={setValue}
          />
          <Script
            src="https://accounts.google.com/gsi/client"
            async
            defer
            onLoad={loadScript}
          />
          {isCheckPin && (
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex gap-2">
                {value.map((e, i) => (
                  <input
                    id={'input-pin-' + i}
                    onFocus={() => {
                      if (i == 0) {
                        getText();
                      }
                    }}
                    onChange={(e: any) => {
                      const values = [...value];
                      values[i] = e.target.value[e.target.value.length - 1];
                      setValuePin(values);
                      setTab(i + 1 >= 4 ? 1 : i + 1);
                    }}
                    key={i}
                    value={value[i]}
                    className="box-border h-10 w-10 rounded border p-3 outline-none"
                  />
                ))}
              </div>
              {loading && <VscLoading className="animate-spin" />}
            </div>
          )}
          <button
            type="submit"
            className="bg hover:bg-opacity-90 text-center w-full mb-10 bg-cyan-600 text-white rounded px-2 py-[10px] box-border"
          >
            Send sign in code
          </button>
          <div
            className="overflow-hidden rounded"
            id="googleSignInButton"
            ref={googleSignInButton}
          />
          <div className="text-sm text-center mt-12">
            By signing up, you agree to the{' '}
            <a className="decoration-slice font-bold" href="#">
              Terms & Conditions
            </a>
          </div>
        </div>
        {!gsiScriptLoaded && <Spinner />}
      </div>
    </form>
  );
};

const GoogleLoginButton = () => {
  return (
    <Suspense>
      <GoogleLoginButtonitem />
    </Suspense>
  );
};

export { GoogleLoginButton };
