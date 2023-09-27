import { GoogleLoginButton } from "@/components/account/google-login";
import Image from "next/image";

export default function Home() {
  const handleGoogleSignIn = async ({ clientId, credential }: any) => {
    try {
      if (clientId && credential) {
        const socialAuthPayload = {
          medium: "google",
          credential,
          clientId,
        };
        // const response = await authenticationService.socialAuth(
        //   socialAuthPayload
        // );

        // onSignInSuccess(response);
      } else {
        throw Error("Cant find credentials");
      }
    } catch (err: any) {
      // onSignInError(err);
    }
  };
  return (
    <main>
      <GoogleLoginButton />
    </main>
  );
}
