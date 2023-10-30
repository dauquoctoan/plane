'use client'
import AuthProvider from "@/layouts/auth.provider";
import Setup from "./setup";

export default function GoToPlane() {
    return (
        <main className="w-full h-full flex flex-col box-border relative">
            <AuthProvider>
                <Setup/>
            </AuthProvider>
        </main>
    );
}
  