import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Region } from "./models/IRegion";
import { WorldBankService } from "./services/world-bank.service";
import { TestClusterService } from '../todo/service/test-cluster.service';

@Component({
  selector: "world-bank.component.html",
  templateUrl: "./world-bank.component.html",
  styles: [],
  providers: [WorldBankService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldBankComponent implements OnInit {
  public regions$: Observable<Region[]>;

  constructor(private _worldBankService: WorldBankService, private _testClusterNode: TestClusterService) {}

  ngOnInit() {
    this.regions$ = this._worldBankService.getContinentalRegions(); 
    this._testClusterNode.get();
  }
}
