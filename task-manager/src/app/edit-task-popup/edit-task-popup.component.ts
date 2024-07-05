import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task-popup',
  templateUrl: './edit-task-popup.component.html',
  styleUrl: './edit-task-popup.component.css'
})
export class EditTaskPopupComponent implements OnChanges{

  @Input() taskToEdit : Task | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Task>();

  task : Task = {
    name: '',
    description: '',
    dueDate: '',
    priority: 'Moderate'
  };

  priorities: string [] = ['High', 'Moderate', 'Low'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskToEdit'] && changes['taskToEdit'].currentValue) {
      this.task = { ...changes['taskToEdit'].currentValue };
    }
  }

  onCancel() {
    this.close.emit();
  }

  onEdit() {
    this.edit.emit(this.task);
  }
}