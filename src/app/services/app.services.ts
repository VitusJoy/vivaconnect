import { FormGroup, FormControl, FormArray } from '@angular/forms';

export class AppState {
    storeRouteComponentData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      }

    getRouteComponentData(key) {
    const valueData = localStorage.getItem(key);
    return valueData ? valueData == "" ? "" : JSON.parse(valueData) : '';
    }

    removeRouteComponentData(key) {
    localStorage.removeItem(key);
    }

    isFieldValid(form: FormGroup, field: string) {
      if (form) {
        return !form.get(field).valid && form.get(field).touched;
      }
    }
}