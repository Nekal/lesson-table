import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CollapseService {
  public toggle: EventEmitter<number> = new EventEmitter<number>();

  public onToggle(id: number): void {
    this.toggle.emit(id);
  }
}
