import {ChangeDetectionStrategy, Component, DestroyRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SettingsService} from "../../../app/service/settings.service";
import {defaultInterval, defaultMessageSize} from "../../../app/const/constants";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Settings} from "../../../app/model/settings";

@Component({
  selector: 'app-settings',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  form = new FormGroup({
    interval: new FormControl<number>(defaultInterval, {
      updateOn: "blur",
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    messageSize: new FormControl<number>(defaultMessageSize, {
      updateOn: "blur",
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    additionalIds: new FormControl<string>('', {
      updateOn: "blur"
    }),
  });

  constructor(private settingsService: SettingsService,
              private destroyRef: DestroyRef) {
    this.form.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((value) => {
      let ids: string[] = [];
      if (value.additionalIds && value.additionalIds.length > 0) {
        ids = value.additionalIds.split(',').map(id => id.trim());
      }
      const settings = new Settings({
        interval: value.interval ?? defaultInterval,
        messageSize: value.messageSize ?? defaultMessageSize,
        additionalIds: ids
      });
      this.settingsService.updateSettings(settings);
    })
  }
}
