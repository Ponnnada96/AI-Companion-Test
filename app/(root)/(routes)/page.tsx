
import prismadb from "@/lib/primsadb";

interface rootPageProps {
    searchParams: {
        categoryId: string,
        name: string
    }
}

const RootPage = async ({ searchParams }: rootPageProps) => {

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
        </div>
    );
}

export default RootPage;