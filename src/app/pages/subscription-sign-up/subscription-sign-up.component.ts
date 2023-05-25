import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AllergyService } from 'src/app/shared/services/allergy/allergy.service';
import { DishService } from 'src/app/shared/services/dish/dish.service';
import { Allergy, Dish, Tier, User } from 'src/app/types';
import { DISH_CATEGORIES } from 'src/app/constants';
import { UserApiService } from 'src/app/shared/services/user/user-api.service';
import { TierService } from 'src/app/shared/services/tier/tier.service';


@Component({
  selector: 'app-subscription-sign-up',
  templateUrl: './subscription-sign-up.component.html',
  styleUrls: ['./subscription-sign-up.component.scss']
})
export class SubscriptionSignUpComponent implements OnInit {

  // Aggregates all the forms from all steps
  userForm!: FormGroup;
  readonly dishCategories: string[] = DISH_CATEGORIES;

  allergies: Allergy[] = [];
  dishes: Dish[] = [];
  tiers: Tier[] = [];

  // Default Value
  familySizeMultiplier: number = 2;
  chosenTier!: Tier;

  @ViewChild(MatStepper) stepper!: MatStepper;

  constructor(
    private fb: FormBuilder,
    private allergyService: AllergyService,
    private dishService: DishService,
    private userApiService: UserApiService,
    private tierService: TierService,
    ) {}

  ngOnInit() {
    // Init forms
    this.userForm = this.fb.group({
      infoFormGroup: this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: [''],
        allergies: ['']
      }),
      dishesFormGroup: this.fb.group({}),
      credentialsFormGroup: this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required]
      }),
    });

    // Add Dish form controls
    this.dishService.getAll().subscribe((r: Dish[]) => {
      for(let dish of r) {
        (this.userForm.controls['dishesFormGroup'] as FormGroup).addControl(dish.name + '-' + dish.dishId, new FormControl(''));
      }
      this.dishes=r;
    });

    this.tierService.getAll().subscribe((r: Tier[]) => {
      this.tiers = r;
      this.chosenTier = r[0];
    });

    // Allergies dropdown
    this.allergyService.getAllergies().subscribe((r: Allergy[]) => {
      this.allergies=r;
    });

    // this.userForm.controls['infoFormGroup'].get('name').err
  }

  /* When user advances to step 2 (Select Dishes) this method should filter the dish
  ** options that conflict with the users allergies and remove them from being chosen
  */
  showDishStep() {
    const userAllergies: string[] = (this.userForm.controls['infoFormGroup'] as FormGroup).controls['allergies'].value;
    let allergicDishes: Dish[] = [];

    for(let userAllergy of userAllergies) {
      allergicDishes = allergicDishes.concat(
        this.dishes.filter((dish: Dish) => {
          return dish.allergies.filter((allergy: Allergy) => allergy.name===userAllergy).length>0
        })
      );
    };

    // Disable dishes for which user has an allergy
    (this.userForm.controls['dishesFormGroup'] as FormGroup).enable();
    allergicDishes.forEach((allergicDish: Dish) => {
      let dishCheckBox: FormControl = (this.userForm.controls['dishesFormGroup'] as FormGroup).controls[allergicDish.name+allergicDish.dishId] as FormControl;
      if(!dishCheckBox.disabled) {
        dishCheckBox.disable({ onlySelf: true });
      }
    });
    // Go to next step
    this.stepper.next();
  }

  // Used to construct custom component
  get tierDishCountRange(): number[] {
    return this.tiers.map(tier => tier.dishCount);
  }
  // Returns dishes by category
  getDishesInCategory(category: string): Dish[] {
    return this.dishes.filter(d => d.category==category);
  }

  // Toggle dish option that cooresponds to data
  checkDishToggle(data: [boolean, Dish]) {
    (this.userForm.controls['dishesFormGroup'] as FormGroup).controls[data[1].name+data[1].dishId].setValue(!data[0]);
  }

  // Fired when serving amount is changed
  changeServing(familySize: number) {
    this.familySizeMultiplier = familySize;
  }

  // Fired when meals per week change
  changeMealsPW(dishCount: number) {
    const tier = this.tiers.find(tier => tier.dishCount === dishCount);

    if(tier) {
      this.chosenTier = tier;
    } else {
      console.error("Chosen tier doesn't exist");
    }
  }

  // Fired when user completes the form and clicks the submit button
  registerUser() {
    this.userApiService.registerUser(this.getUserFromForm());
  }

  private getUserFromForm(): User {

    // Parse infoFormGroup
    const infoForm = this.userForm.controls['infoFormGroup'];
    const USER_NAME: string = infoForm.get('name')!.value;
    const infoKeyValues = {
      firstName: USER_NAME.split(',')[1].trim(),
      lastName: USER_NAME.split(',')[0].trim(),
      address: infoForm.get('address')!.value,
      phoneNumber: infoForm.get('phoneNumber')!.value,
      allergies: infoForm.get('allergies')!.value,
    }

    // Parse dishesFormGroup
    const dishesForm = this.userForm.controls['dishesFormGroup'];
    const dishesKeyValues = {
      dishPreferences: undefined, // TODO: dishArray
      familySize: this.familySizeMultiplier,
      subscription: undefined,// TODO: Parse subscription
    }

    // Parse credentialsFormGroup
    const credentialsForm = this.userForm.controls['credentialsFormGroup'];
    const credentialsKeyValues = {
      email: credentialsForm.get('email')!.value,
      password: credentialsForm.get('password')!.value,
    }

    const user: User = {
      ...infoKeyValues,
      ...dishesKeyValues,
      ...credentialsKeyValues,
    }
    return user;
  }

}
