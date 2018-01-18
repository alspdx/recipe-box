import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness) {
    var output: Task[] = [];
    if(desiredCompleteness === 'incompleteTasks') {
      input.map(function(task) {
        if (!task.done) {
          output.push(task);
        }
      })
      return output;
    } else if(desiredCompleteness === 'completedTasks') {
      input.map(function(task) {
        if(task.done) {
          output.push(task);
        }
      })
      return output;
    } else {
      return input;
    }
  }
}
