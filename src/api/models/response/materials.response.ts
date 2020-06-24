export interface MaterialsResponse {
    id: number;
    number: number;
    name: string;
    description: string;
    price: number;
    totalDuration: number;
    likeCount: number;
    dislikeCount: number;
    myDislike: boolean;
    myLike: boolean;
    isPaid: boolean;
}