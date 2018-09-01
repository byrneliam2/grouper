import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResourcesProvider } from '../resources/resources';
import { AlertProvider } from '../alert/alert';

@Injectable()
export class EditorProvider {

  constructor(public formBuilder: FormBuilder, public resources: ResourcesProvider,
    public alert: AlertProvider) {
  }

  getGroupFormBuilder(name, sub, desc, oldName, oldSub, oldDesc) {
    return this.formBuilder.group({
      [name]: [oldName, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_NAME), Validators.required])],
      [sub]: [oldSub, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_SUB)])],
      [desc]: [oldDesc, Validators.compose([Validators.maxLength(this.resources.MAX_LENGTH_DESC)])]
    });
  }

  save(self, formControl, f, n, args, successMsg) {
    if (formControl.valid) {
      f.apply(self, args);
      n();
      this.alert.doToast(successMsg);
    }
    else this.alert.doToast("There is an issue with some of the values you have entered!");
  }

}
