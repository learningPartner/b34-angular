import { Component, computed, effect, linkedSignal, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adv-signal',
  imports: [FormsModule],
  templateUrl: './adv-signal.html',
  styleUrl: './adv-signal.css',
})
export class AdvSignal {
  normalCourseName = 'Dot Net';

  courseName = signal('Angular');
  cityList = signal(['Nagpur', 'Mumbai', 'Pune']);
  cityName = '';
  studentObj = signal({ name: 'AAA', city: 'Pune', mobile: '0099009900', state: 'MH' });

  firstName =  signal("Chetan");
  middleName =  signal("P");
  lastName =  signal("Jogi");

  fullName = computed(() => this.firstName() + " " + this.middleName() +" "+ this.lastName() )

  fullName2 = linkedSignal(()=> this.firstName() + " " + this.middleName() +" "+ this.lastName())

  cartItem = signal([
    {produtName: 'Mobile', price: 1200},
    {produtName: 'Laptop', price: 56000},
    {produtName: 'HeadPhone', price: 3000}
  ])

  totalPrice = computed(()=>{
    return this.cartItem().reduce((total:any,item:any)=>{
      return total + item.price;
    },0)
  })

  constructor() {
    effect(()=>{
      console.log("City Array Length "+ this.cityList().length)
    }) 

    effect(()=>{
      console.log("Fiull nsm" +this.firstName())
      console.log(this.middleName());
      console.log(this.lastName()); 
    })

    effect(()=>{
      console.log("Fiull nsm" +this.firstName())
      const middleName =  untracked(()=> this.middleName());
      console.log(this.lastName()); 
    })
    
    setTimeout(() => {
      debugger;
      this.courseName.set('Java');
    }, 3000);
  }

  addCharger() {
    this.cartItem.update(odlList=> [...odlList, {produtName:'Charger', price: 3000}])
  }

  chnageMiddle() {
    this.middleName.set("Prakash")
  }

  chnageLast() {
    this.lastName.set("Sharma")
  }

  addCity() {
    debugger;
    // const oldList = this.cityList();
    // oldList.push("Thane");

    this.cityList.update((oldList) => [...oldList, this.cityName]);
  }

  AddMpCity() {
    this.cityList.set(['Bhopal', 'Indore', 'Jabalpur']);
  }

  chnageCity() {
    this.studentObj.update(oldData => ({...oldData, city:'Mumbai'}))
  }

  onNameChnage(eve: any) {
    this.studentObj.update(old => ( {...old, name:eve.target.value}))
  }
}
