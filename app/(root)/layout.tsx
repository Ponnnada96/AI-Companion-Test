import NavBar from "@/components/navbar";
import SideBar from "@/components/side-bar";

import { StrictMode } from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {


    return (
        <StrictMode>
            <div className="h-full">
                <NavBar isPro={false} />
                <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                    <SideBar isPro={false} />
                </div>
                <main className="md:pl-20 pt-16 h-full">
                    {children}
                </main>
            </div>
        </StrictMode>
       
    )
}

export default RootLayout;