import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataRestService } from 'src/app/services/data-rest.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  postForm: FormGroup = new FormGroup({
    id: new FormControl(['']),
    title: new FormControl(['']),
    author: new FormControl([''])
  });

  constructor(private dataRestService: DataRestService) { }

  ngOnInit(): void {
  }

  addPost() {
    console.log(this.postForm.value);
    const post = this.postForm.value;
    this.dataRestService.addPost(post)
      .subscribe(post => {
        console.log('added post: ', post);
        this.clearForm();
      })
  }

  clearForm() {
    this.postForm.reset();
  }

}
