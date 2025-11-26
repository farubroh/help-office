import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  name: string;
  tag: string;
  tagType: 'warning' | 'info' | 'purple';
  time: string;
  userImg: number;
}

interface Activity {
  user: string;
  action: string;
  target: string;
  time: string;
  userImg: number;
}

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit, OnDestroy {
  /// --- Data Mocks ---
  
  projectMembers = [1, 2, 3, 5]; // Avatar IDs
  
  calendarDays = [
    { day: 'TUE', date: '01', active: false },
    { day: 'WED', date: '02', active: true }, // Active day
    { day: 'THU', date: '03', active: false },
    { day: 'FRI', date: '04', active: false },
    { day: 'SAT', date: '05', active: false },
    { day: 'SUN', date: '06', active: false },
    { day: 'MON', date: '07', active: false },
  ];

  tasks: Task[] = [
    { name: 'Brand Strategy', tag: 'feedback requested', tagType: 'warning', time: '00:25:15', userImg: 12 },
    { name: 'Logo Design', tag: 'feedback requested', tagType: 'warning', time: '00:08:15', userImg: 33 },
    { name: 'Filllo Design System', tag: 'paused', tagType: 'info', time: '02:23:45', userImg: 5 },
  ];

  activities: Activity[] = [
    { user: 'Arafat Chowdhury', action: 'Paused', target: '"Filllo Design System"', time: '14:45 pm', userImg: 5 },
    { user: 'Washim Chowdhury', action: 'Added comments on', target: '"Logo Design"', time: '12:35 pm', userImg: 12 },
    { user: 'Jawad Akib', action: 'Completed task', target: '"Wireframing"', time: '10:25 am', userImg: 8 },
  ];

  // --- Timer Logic ---
  timerH = 2;
  timerM = 23;
  timerS = 45;
  timerRunning = false;
  intervalId: any;

  ngOnInit() {
    // Start timer automatically to demonstrate functionality
    // this.toggleTimer();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  toggleTimer() {
    this.timerRunning = !this.timerRunning;
    if (this.timerRunning) {
      this.intervalId = setInterval(() => {
        this.timerS++;
        if (this.timerS === 60) { this.timerS = 0; this.timerM++; }
        if (this.timerM === 60) { this.timerM = 0; this.timerH++; }
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  // Helper for leading zeros
  pad(val: number): string {
    return val < 10 ? `0${val}` : val.toString();
  }
}
