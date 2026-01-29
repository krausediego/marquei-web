import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { auth } from "@/lib/auth";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export const Route = createFileRoute("/_application")({
  beforeLoad: async () => {
    const { data: session } = await auth.getSession();

    return {
      user: {
        id: session?.user.id,
        name: session?.user.name,
        image: session?.user.image,
        email: session?.user.email,
      },
    };
  },
  loader: async ({ context }) => {
    if (!context.user.id) {
      throw redirect({ to: "/sign-in" });
    }
    return {
      userId: context.user.id,
      userName: context.user.name,
      email: context.user.email,
      avatar: context.user.image,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AdminPanelLayout>
      <Outlet />
    </AdminPanelLayout>
  );
}
