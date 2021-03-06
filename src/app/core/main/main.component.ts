import { Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import { Router } from "@angular/router";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor(private _router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  ngOnInit() {}

  public logOut() {
    this._router.navigate([""]);
  }
}
