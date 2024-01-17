import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SettingsComponent} from "./settings/settings.component";
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SettingsComponent,
    TableComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
