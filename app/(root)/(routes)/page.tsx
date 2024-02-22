import Categories from "@/components/categories";
import Companion from "@/components/companion";
import CompanionSkeleton from "@/components/skeleton-ui/companions-skeleton";
import { SearchInput } from "@/components/search-input";
import { Suspense } from "react";

interface rootPageProps {
    searchParams: {
        categoryId: string,
        name: string
    }
}

const RootPage = async ({ searchParams }: rootPageProps) => {

    const categoires = [
        { id: 'd5e5d0a4-48fd-495f-8c56-48a7cdeb8a05', name: 'Famous People' },
        { id: 'b591e526-1714-402a-b66a-585519c4392b', name: 'Movies & TV' },
        { id: 'fb9aded2-bae8-45e9-8f8d-f8e9af20d321', name: 'Musicians' },
        { id: '3c41725a-e5ba-41e4-9119-9027b054d1c8', name: 'Games' },
        { id: '164b4069-b6ce-4dee-9542-ed3addb16cb3', name: 'Animals' },
        { id: '32bbe904-b2fb-41c8-8dc1-a74cb24408ef', name: 'Philosophy' },
        { id: 'c7c3d373-e74c-4b48-8a77-595708b78651', name: 'Scientists' }
    ]

    
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput />
            <Categories data={categoires} />
            <Suspense fallback={<CompanionSkeleton />}>
                <Companion searchParams={searchParams} />
            </Suspense>
        </div>
    );
}

export default RootPage;