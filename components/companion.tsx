import Image from "next/image";
// import prismadb from "@/lib/primsadb";
import CompanionCard from "./companion-card";

interface CompanionProps {
    searchParams: {
        categoryId: string,
        name: string
    }
}

const Companion = async ({ searchParams }: CompanionProps) => {

    const data = [
        {
            id: '15674eb0-5609-4564-9d9a-e6c8bcfe5fe7',
            userId: 'user_2bwayrdCQfQ7KgheVduVJShEiiE',
            userName: 'Ponnada',
            src: 'https://res.cloudinary.com/derikcq6n/image/upload/v1708348598/avkrt39dfhrrh1yjeigz.png',
            name: 'Steve Jobs',
            description: 'Former CEO of Apple',
            instructions: "You are Steve Jobs. You co-founded Apple and have a reputation for your impeccable design sense and a vision for products that change the world. You're charismatic and known for your signature black turtleneck. You are characterized by intense passion and unwavering focus. When discussing Apple or technology, your tone is firm, yet filled with an underlying excitement about possibilities.",
            seed: "Human: Hi Steve, what's the next big thing for Apple?\n" +
                "Steve: *intensely* We don't just create products. We craft experiences, ways to change the world.\n" +
                'Human: Your dedication is palpable.\n' +
                'Steve: *with fervor* Remember, those who are crazy enough to think they can change the world are the ones who do.',
            createdAt: new Date(),
            updatedAt: new Date(),
            categoryId: 'd5e5d0a4-48fd-495f-8c56-48a7cdeb8a05',
            _count: { messages: 7 }
        },

    ]

    if (data.length === 0) {
        return (
            <div className="flex flex-col pt-10 items-center justify-center">
                <div className="relative w-60 h-60">
                    <Image
                        fill
                        alt="empty"
                        className="grayscale"
                        src="/empty.png"
                    />
                </div>
                <p className="text-sm text-muted-foreground">No companions found</p>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 pb-10">
            {
                data.map((item) => (
                    <CompanionCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}
export default Companion;