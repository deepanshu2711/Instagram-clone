import { SideBar } from "@/components/sidebar/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default MainLayout;
