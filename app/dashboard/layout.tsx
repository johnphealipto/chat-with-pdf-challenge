import Header from "@/components/header";
import { ClerkLoaded } from "@clerk/nextjs";

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ClerkLoaded>
      <div>
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ClerkLoaded>
  );
};

export default DashboardLayout;
