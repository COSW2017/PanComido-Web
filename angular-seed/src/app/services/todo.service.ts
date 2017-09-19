import { Injectable } from '@angular/core';
import { Todo } from './../models/todo';

import { APIService } from '../common/api.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoService extends APIService {
  private resourceUrl = 'api/todo/';

  todo : Todo;

  create(description, priority, completed) : Observable<Todo> {
    this.todo = new Todo(description, priority, completed);
    return this.post(this.resourceUrl, this.todo);
  }

  list(): Observable<Todo[]> {
    return this.get(this.resourceUrl);
  }
}
