export interface Post {
  id: number;
  title: string;
  content: string;
  votes: number | null;
  createdAt: Date;
}