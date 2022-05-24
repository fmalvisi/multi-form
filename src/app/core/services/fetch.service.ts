import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Container, OuterObject} from "../../model/container";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private twoOuters: OuterObject[] = [
    {
      outerObjectID: "OuterID 1",
      optionalNumericalField: "Optional 1",
      innerList: [
        {
          innerObjectID: "InnerID 1"
        },
        {
          innerObjectID: "InnerID 2"
        }
      ]
    },
    {
      outerObjectID: "OuterID 2",
      optionalNumericalField: "Optional 2",
      innerList: [
        {
          innerObjectID: "InnerID 3"
        },
        {
          innerObjectID: "InnerID 4"
        },
        {
          innerObjectID: "InnerID 5"
        }
      ]
    }
  ]

  private fourOuter: OuterObject[] = [
    {
      outerObjectID: "OuterID 1",
      optionalNumericalField: "Optional 1",
      innerList: [
        {
          innerObjectID: "InnerID 1"
        },
        {
          innerObjectID: "InnerID 2"
        }
      ]
    },
    {
      outerObjectID: "OuterID 2",
      optionalNumericalField: "Optional 2",
      innerList: [
        {
          innerObjectID: "InnerID 3"
        },
        {
          innerObjectID: "InnerID 4"
        },
        {
          innerObjectID: "InnerID 5"
        }
      ]
    },
    {
      outerObjectID: "OuterID 3",
      optionalNumericalField: "Optional 3",
      innerList: [
        {
          innerObjectID: "InnerID 6"
        }
      ]
    },
    {
      outerObjectID: "OuterID 4",
      optionalNumericalField: "Optional 4",
      innerList: [
        {
          innerObjectID: "InnerID 7"
        },
        {
          innerObjectID: "InnerID 8"
        },
        {
          innerObjectID: "InnerID 9"
        }
      ]
    }
  ]

  constructor() { }

  populateContainer(): Observable<Container> {
    const rnd = Math.floor(Math.random() * (100 + 1));
    let container: Container = {};
    if (rnd <= 50) {
      container.outerList = this.twoOuters;
    } else {
      container.outerList = this.fourOuter
    }
    return of(container);
  }
}
