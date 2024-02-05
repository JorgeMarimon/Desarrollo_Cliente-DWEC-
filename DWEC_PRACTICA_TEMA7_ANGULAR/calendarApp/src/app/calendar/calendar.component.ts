import { Component } from '@angular/core';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  tasks: Task[] = [
    new Task(
      '1',
      'UI Design',
      'Create the user interface design for the new mobile application.',
      undefined,
      undefined,
      'Design',
      'Alex Johnson',
      40,
      undefined
    ),
    new Task(
      '2',
      'API Backend',
      'Develop the necessary endpoints for the new ordering module.',
      undefined,
      undefined,
      'Development',
      'Maria Garcia',
      60,
      undefined
    ),
    new Task(
      '3',
      'Integration Testing',
      'Perform integration tests to ensure all external services are correctly connected.',
      undefined,
      undefined,
      'Quality',
      'Chris Smith',
      20,
      undefined
    ),
    new Task(
      '4',
      'Technical Documentation',
      'Create the technical documentation for the new inventory management system.',
      undefined,
      undefined,
      'Documentation',
      'Sam Rivera',
      30,
      undefined
    ),
    new Task(
      '5',
      'Security Implementation',
      'Review and implement security improvements in the web application.',
      undefined,
      undefined,
      'Security',
      'Jordan Lee',
      50,
      undefined
    ),
    new Task(
      '6',
      'Team Training',
      'Organize training sessions for the team on new development tools.',
      undefined,
      undefined,
      'Education',
      'Taylor Kim',
      25,
      undefined
    )
  ];

  newTask: Task = new Task('', '', '', undefined, undefined, '', '', 0, undefined)

  startTask(task: Task): void {
    task.startDate = new Date()
  }

  finishTask(task: Task): void {
    if (task.startDate != undefined) {
      task.endDate = new Date();
      task.realTime = parseFloat(((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60)).toFixed(2))
    } else {
      alert('No se ha establecido una fecha de inicio')
    }
  }

  addTask(): void {
    if (
      this.newTask.name.trim() !== '' &&
      this.newTask.description.trim() !== '' &&
      this.newTask.subject.trim() !== '' &&
      this.newTask.assignedPerson.trim() !== '' &&
      this.newTask.estimatedTime > 0
    ) {
      this.tasks.push({ ...this.newTask });

      this.newTask = new Task('', '', '', undefined, undefined, '', '', 0, undefined);
      alert('Task added. Please, close the new task window.')

    } else {
      alert('Please, fill the blanks.');
    }
  }

  //LAS DOS SIGUIENTES FUNCIONES SIRVEN PARA EDITAR DATOS
  editeTask(task: Task): void {
    this.newTask = { ...task }
  }
  updateTask(): void {
    var index = this.tasks.findIndex(t => t.id === this.newTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...this.newTask };
    }
    alert('Task updated!')
  }

  deleteTask(task: Task): void {
    this.tasks.forEach((element, index) => {
      if (element === task) {
        this.tasks.splice(index, 1);
      }
    });
  }


}
