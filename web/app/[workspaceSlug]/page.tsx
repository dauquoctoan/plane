import Dashboard from "@/components/dashboard/page";

export default function Page({ params }: { params: { slug: string } }) {
    return (
    <div className="w-full p-8 box-border">
        <Dashboard/>
    </div>
);
}
