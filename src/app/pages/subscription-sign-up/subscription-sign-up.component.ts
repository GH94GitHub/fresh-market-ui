import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AllergyService } from 'src/app/shared/services/allergy.service';
import { DishService } from 'src/app/shared/services/dish.service';
import { Allergy, Dish } from 'src/app/types';


@Component({
  selector: 'app-subscription-sign-up',
  templateUrl: './subscription-sign-up.component.html',
  styleUrls: ['./subscription-sign-up.component.scss']
})
export class SubscriptionSignUpComponent implements OnInit {

  infoFormGroup!: FormGroup;
  dishesFormGroup!: FormGroup;
  credentialsFormGroup!: FormGroup;

  allergies!: Allergy[];
  dishes!: Dish[];

  @ViewChild(MatStepper) stepper!: MatStepper;

  constructor(
    private fb: FormBuilder,
    private allergyService: AllergyService,
    private dishService: DishService
    ) {}

  ngOnInit(): void {
    // Forms Init
    this.infoFormGroup = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: [''],
      allergies: ['']
    });
      // Add Dish form controls
    this.dishesFormGroup = this.fb.group({});
    this.dishService.getAll().subscribe((r: Dish[]) => {
      for(let dish of r) {
        this.dishesFormGroup.addControl(dish.name+dish.dishId, new FormControl(''));
      }
      this.dishes=r;
    });
    this.credentialsFormGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

    // Allergies dropdown
    this.allergyService.getAllergies().subscribe((r: Allergy[]) => {
      this.allergies=r;
    });
  }

  showDishStep():void {
    const userAllergies: string[] = this.infoFormGroup.controls['allergies'].value;
    let allergicDishes: Dish[] = [];

    for(let userAllergy of userAllergies) {
      allergicDishes = allergicDishes.concat(
        this.dishes.filter((dish: Dish) => {
          return dish.allergies.filter((allergy: Allergy) => allergy.name===userAllergy).length>0
        })
      );
    };

    // Disable dishes for which user has an allergy
    this.dishesFormGroup.enable();
    allergicDishes.forEach((allergicDish: Dish) => {
      let dishCheckBox: FormControl = this.dishesFormGroup.controls[allergicDish.name+allergicDish.dishId] as FormControl;
      if(!dishCheckBox.disabled) {
        dishCheckBox.disable({ onlySelf: true });
      }
    });
    // Go to next step
    this.stepper.next();
  }

  changeServing(num: number): void {
    console.log("Serving changed to ", num);
  }

  changeMealsPW(num: number): void {
    console.log("Meals per week changed to ", num);
  }
}
