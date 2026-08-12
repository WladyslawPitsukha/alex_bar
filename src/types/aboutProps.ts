export type CafeInfoProps = {
    id: number;
    slug: string;
    title: string;
    info: {
        description: string;
        moreDesc: string;
        coolFacts: string;
        stars: number;
    };
    city: string;
    address: string;
    connection: {
        phone: string;
        email: string;
    }
    socials?: {
        id: number;
        labelText: string;
        href: string;
    }[];
    time: {
        days: string;
        hours: string;
    };
    comments?: {
        id: number;
        desc: {
            en: string;
            clientName: string;
        };
        comments: {
            id: number;
            rating: number;
            text: string;
            date: string;
        }
    }[];
}