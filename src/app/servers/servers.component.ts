import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
    .online{
      color: white;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  isEmpty = true
  userName = ''
  isDisplay = false
  countArray = []
  count = 0

  constructor() {}

  ngOnInit() {}
  onUpdateName(event: any) {
    if (this.userName == '') this.isEmpty = true
    else this.isEmpty = false
  }
  onClickReset() {
    this.userName = ''
    this.isEmpty = true
  }
  onClickDisplay() {
    this.isDisplay = !this.isDisplay
    this.count++
    this.countArray.push(this.count)
  }

  getTextColor() {
    return this.count > 5 ? 'blue' : 'green'
  }
}
