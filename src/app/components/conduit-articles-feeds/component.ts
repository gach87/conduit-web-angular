import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conduit-articles-feeds',
  templateUrl: './template.html',
})
export class ConduitArticlesFeedComponent implements OnInit {
  @Input()
  feeds: Array<any> = [];
  @Input()
  selected: string;
  @Output()
  onSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(feed) {
    this.onSelected.emit(feed);
  }

  feedTrackBy(index, item) {
    return item.id;
  }
}
