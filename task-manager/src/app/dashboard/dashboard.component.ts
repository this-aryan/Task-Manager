import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  completedTasks: Task[] = [];
  showAddTaskPopup = false;
  showEditTaskPopup = false;
  taskToEdit: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks.filter(task => !task.completed);
      this.completedTasks = tasks.filter(task => task.completed);
    });
  }

  openAddTaskPopup() {
    this.showAddTaskPopup = true;
  }

  closeAddTaskPopup() {
    this.showAddTaskPopup = false;
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
      this.loadTasks();
      this.closeAddTaskPopup();
    });
  }

  openEditTaskPopup(task: Task) {
    this.taskToEdit = task;
    this.showEditTaskPopup = true;
  }

  closeEditTaskPopup() {
    this.showEditTaskPopup = false;
    this.taskToEdit = null;
  }

  editTask(task: Task) {
    this.taskService.editTask(task).subscribe(() => {
      this.loadTasks();
      this.closeEditTaskPopup();
    });
  }

  onMarkComplete(task: Task) {
    task.completed = true;
    this.taskService.editTask(task).subscribe(() => {
      this.loadTasks();
    });
  }
  
  confirmDeleteTask(taskId: number | undefined) {
    if (taskId && window.confirm('Are you sure you want to delete this task?')) {
      this.deleteTask(taskId);
    }
  }

  deleteTask(id: number | undefined) {
    if (id === undefined) {
      console.error('Task ID is undefined. Cannot delete task.');
      return;
    }
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }


}