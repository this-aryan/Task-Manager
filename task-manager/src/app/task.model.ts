export interface Task {
  id?: number; 
  name: string;
  description: string;
  dueDate: string;
  priority: 'High' | 'Moderate' | 'Low';
  completed?: boolean;
}
