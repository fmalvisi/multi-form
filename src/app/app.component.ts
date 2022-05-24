import {Component, OnInit} from '@angular/core';
import {FetchService} from "./core/services/fetch.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Container, InnerObject, OuterObject} from "./model/container";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentContainer: Container = {};
  formGroupOuter = new FormGroup({});
  constructor(private service: FetchService,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.service.populateContainer().subscribe((res) => {
      this.currentContainer = res;
      if(!!res.outerList) {
        this.formGroupOuter = this.fb.group({
          outerList: this.fb.array(
            res.outerList.map((x) =>
              this.buildOuterList(x)
            )
          ),
        });
      }
    });
  }

  get outerList() {
    return this.formGroupOuter.get("outerList") as FormArray;
  }

  get innerlist() {
    return this.formGroupOuter.get("outerList")?.get("innerlist") as FormArray;
  }

  buildOuterList(outerObject: OuterObject) {
    let outerObjectFormGroup = new FormGroup({
      outerObjectID: new FormControl(outerObject.outerObjectID, [Validators.required]),
      optionalNumericalField: new FormControl(outerObject.optionalNumericalField, [Validators.minLength(2)]),
      innerList: this.fb.array([])
    });
    if (!!outerObject.innerList) {
      outerObjectFormGroup = new FormGroup({
        outerObjectID: new FormControl(outerObject.outerObjectID, [Validators.required]),
        optionalNumericalField: new FormControl(outerObject.optionalNumericalField, [Validators.minLength(2)]),
        innerList: this.fb.array(outerObject.innerList.map((x) =>
          this.buildInnerList(x)
        ))
      })
    }
    return outerObjectFormGroup;
  }

  buildInnerList(innerObject: InnerObject) {
    return new FormGroup({
      innerObjectID: new FormControl(innerObject.innerObjectID, [Validators.required])
    });
  }
}
