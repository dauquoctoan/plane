
export default function Page({ params }: { params: { workspaceSlug: string } }) {
  return <div>My Post: {params.workspaceSlug}</div>
}