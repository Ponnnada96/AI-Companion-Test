
// import { checkSubscription } from "@/lib/subscription";
import { StrictMode } from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

    const isUserSubscribed = false;
    // const isUserSubscribed = await checkSubscription();

    return (
        <StrictMode>
            <div className="h-full">
                <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                </div>
                <main className="md:pl-20 pt-16 h-full">
                    {children}
                </main>
            </div>
        </StrictMode>
       
    )
}

export default RootLayout;