
import prismadb from "@/lib/primsadb";
import { UserButton } from "@clerk/nextjs";



const RootPage = async () => {

    const categoires = await prismadb.category.findMany();

    return (
        <div className="h-full p-4 space-y-2">
            {
                categoires.map((item) => (
                    <h1 key={item.id}>
                        {item.name}
                    </h1>
                ))
            }
            <UserButton/>
        </div>
    );
}

export default RootPage;