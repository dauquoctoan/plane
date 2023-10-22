import { GoogleLoginButton } from "@/components/account/google-login";
import Login from "@/components/account/login";
import Test from "@/components/commont/Test";
import SWRProvider from "@/components/commont/swr-provider";


export default function Home() {
  return (
    <main>
      <SWRProvider>
        <div>
          <Login />
        </div>
      </SWRProvider>
    </main>
  );
}
