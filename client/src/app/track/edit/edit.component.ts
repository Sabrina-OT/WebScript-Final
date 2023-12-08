// edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackService } from '../../services/track.service'; // Import your task service

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title: string = 'Edit Job';
  taskId: string = '';

  Task: any = { Job: '', Salary: '', Description: '', Company: '' }; // Your task model structure

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trackService: TrackService // Inject your task service here
  ) {}

  ngOnInit() {
    // Get the taskId from the URL
    this.taskId = this.route.snapshot.params['id'];

    // Fetch the task details based on taskId using your task service
    this.trackService.getTaskById(this.taskId).subscribe((data: any) => {
      this.Task = data; // Assign fetched task data to Task object
    });
  }

  onSubmit() {
    // Call your task service method to update the task with this.Task
    this.trackService.updateTask(this.taskId, this.Task).subscribe(() => {
      this.router.navigate(['/tracklist']); // Redirect to tracklist page after update
    });
  }
}
