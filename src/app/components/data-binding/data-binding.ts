import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  schoolName: string = 'Lokmany School';
  div3BgClassName = 'col-4 bg-success';
  schoolAddress = '98, Mahalaxmi Nagar, Manaish Nagar , Nagpur';
  myInputType = 'checkbox';
  addrressRows = 4;
  isActive = true;
  myPlaceHolderText = 'Enter A surname';

  num1 = 0;
  squareValue = 0;

  selectedCity: string = '';
  selectedGender: string = 'female';

  getSquare() {
    debugger;
    this.squareValue = this.num1 * this.num1;
  }
  showWelcomeText() {
    alert('Welcome b-34');
  }

  changeScollName() {
    this.schoolName = 'PIE School';
  }

  showMessage(message: string) {
    debugger;
    alert(message);
  }

  getCourseName() {
    return 'Angular 21 Course';
  }

  onCityChanged(event: Event) {
    alert('City Cnhnaged ' + (event.target as HTMLButtonElement).value);
  }

  onTextChnages() {
    console.log('Text Value ');
  }

  onMouseEnter() {
    console.log('Mouse Entered');
  }
  onMOuseLeft() {
    console.log('MOuse Lefet Div');
  }

  showClickedText(event: MouseEvent) {
    debugger;
    alert((event.target as HTMLButtonElement).innerText);
  }
}
