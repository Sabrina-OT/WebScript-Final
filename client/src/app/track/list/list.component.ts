import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router if navigation is required
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-list', // Use appropriate selector
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Ensure to have the CSS file
})
export class ListComponent implements OnInit {
  title = 'List of Jobs';
  displayName: string | null = null; // Adjust the type if needed
  TaskList: any[] = []; // Adjust type according to your data structure

  constructor(
    private router: Router,
    private trackService: TrackService
    ) {}
  

  ngOnInit(): void {
    // Simulate fetching data (Replace with your actual data retrieval logic)
    this.fetchTaskList();
    this.displayName = localStorage.getItem('displayName'); // Fetch user status from local storage or API
  }

  fetchTaskList(): void {
    // Simulate fetching data (Replace with your actual data retrieval logic)
    this.TaskList = [
      // Sample data, replace with your actual data from API or service
      { _id: 1, Job: 'Job 1', Salary: 'Salary 1', Description: 'Description 1', Company: 'Company 1' },
      { _id: 2, Job: 'Job 2', Salary: 'Salary 2', Description: 'Description 2', Company: 'Company 2' }
      // Add more objects as needed
    ];
  }

  confirmDelete(id: string): void {
    const result = confirm('Confirm Deletion?');
    if (result) {
      this.trackService.deleteTrack(id).subscribe(() => {
        this.fetchTaskList();
      }
      );
    }

  }

  // Optional method for navigation, based on your route configuration
  navigateToEdit(id: number): void {
    this.router.navigate(['/tracklist/edit', id]); // Adjust the route based on your configuration
  }

  // Optional method for navigation, based on your route configuration
  navigateToDelete(id: number): void {
    this.router.navigate(['/tracklist/delete', id]); // Adjust the route based on your configuration
  }
}
