import Test from "@/components/commont/Test";
import SWRProvider from "@/components/commont/swr-provider";

export default function Page({ params }: { params: { workspaceSlug: string } }) {
  return <div>
    {params.workspaceSlug}
    <SWRProvider>
      <Test/>
    </SWRProvider>
  </div>
}