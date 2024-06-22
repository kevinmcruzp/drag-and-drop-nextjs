interface QueueType {
    id: string;
    title: string;
    cards: CardType[];
}

interface CardType {
    id: string;
    title: string;
    description: string;
}

export type listQueue = Pick<QueueType, 'id' | 'title' | 'cards'>
export type listCard = Pick<CardType, 'id' | 'title' | 'description'>