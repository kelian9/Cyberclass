export interface LessonsResponse {
    id: number;
    materialID: number;
    number: number;
    lessonType: number;
    name: string;
    description: string;
    preview?: string;
    duration: number;
}