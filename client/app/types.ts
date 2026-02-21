export interface Card {
    card_id: string,
    content: string,
    icon: string,
}

export interface Package {
    package_id: string,
    type: string,
    content: string,
}

export interface QnAComponent {
    qna_id: number,
    question: string,
    answer: string,
    opened: boolean,
}