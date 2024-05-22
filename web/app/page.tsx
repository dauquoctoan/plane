import Login from '@/components/account/login';
import { Suspense } from 'react';

export default function Home() {
    return (
        <main>
            <Suspense>
                <Login />
            </Suspense>
        </main>
    );
}
