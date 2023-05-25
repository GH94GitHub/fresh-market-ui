import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function exactCheckedCheckboxesValidator(exactChecked: number): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const checkedCount = Object.values((formGroup as FormGroup).controls)
      .filter(control => control.value === true)
      .length;

    if (checkedCount != exactChecked) {
      formGroup.setErrors({ exactCheckedExceeded: true });
      return { exactCheckedExceeded: true };
    } else {
      formGroup.setErrors(null);
      return null;
    }
  };
}
