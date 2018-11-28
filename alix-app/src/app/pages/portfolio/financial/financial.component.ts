import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

// dataset
import * as dataset from '../../../data/dataset';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
})
export class FinancialComponent implements OnInit {
  public config: object;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.config = dataset.dossiersMainData;
      // this.config = dataset.dossiersMainData['dossier' + params['id']];
      console.log(this.config);
    });
  }
}
