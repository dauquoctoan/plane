import { Spinner } from "@/components/ui/loading/Spinner";
import dynamic from "next/dynamic";
import { ContainerLink } from "nextjs-progressloader";



const AuthLayout = dynamic(() => import('@/layouts/authLayout'), {
    loading: () => <Spinner text="Loading your workspace..." />,
});

export default function WorkspaceLayout({
    children, 
}: {
    children: React.ReactNode
}) {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    )
}