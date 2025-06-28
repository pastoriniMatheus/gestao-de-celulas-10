
import { AuthProvider } from '@/components/AuthProvider';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Header } from '@/components/Header';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { KidsManager } from '@/components/KidsManager';

const KidsPage = () => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <SidebarInset className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 p-6 overflow-auto">
                <div className="max-w-7xl mx-auto">
                  <KidsManager />
                </div>
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default KidsPage;
