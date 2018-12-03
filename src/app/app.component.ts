import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatusName = ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;
  forbiddenProjectName = ['Test'];

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'projectStatus': new FormControl('Stable')
    });
  }
  
  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
