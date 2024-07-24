export interface Issue {
    issueNum: number;
    title: string;
    description: string;
    priority: 'low' | 'high';
    type: 'Feature' | 'Bug' | 'Documentation';
    completed?: Date;

}
