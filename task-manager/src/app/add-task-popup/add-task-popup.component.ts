import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task-popup',
  templateUrl: './add-task-popup.component.html',
  styleUrls: ['./add-task-popup.component.css']
})
export class AddTaskPopupComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  task: Task = {
    name: '',
    description: '',
    dueDate: '',
    priority: 'Moderate'
  };

  priorities: string [] = ['High', 'Moderate', 'Low'];

  onCancel() {
    this.close.emit();
  }

  onSave() {
    this.save.emit(this.task);
  }
}
