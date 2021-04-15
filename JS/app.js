'use strict';


// let area = ['Seattle', 'Tokyo','Dubai','Paris','Lima' , 'Total'];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

getRandomInt();

let elements=[];
function Fish (location,minCust,maxCust,avgCookies){
    this.location = location;
    this.minCust= minCust;
    this.maxCust= maxCust;
    this.avgCookies = avgCookies;
    this.hours= ['6am','7am', '8am' ,'9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total' ];
    this.custHoure =[];
    this.cookiesPerHoure= [];
    this.total = [];
elements.push(this);
}

Fish.prototype.custInHoure= function(){
    for (let i = 0; i <this.hours.length; i++){
      this.custHoure.push(getRandomInt(this.minCust, this.maxCust));  
    }
}

Fish.prototype.cookiesPerHour = function () {
for (let i = 0; i < this.hours.length; i++) {
 this.cookiesPerHoure.push(Math.ceil(this.avgCookies * this.custHoure[i]));
}}





let seattle = new Fish('Seattle',23 , 65, 6.3);
let Tokyo = new Fish('Tokyo', 3 , 24 , 1.2);
let Dubai = new Fish('Dubai', 11, 38 , 3.7);
let Paris = new Fish('Paris', 20, 38 , 2.3);
let Lima = new Fish('Lima', 2, 16, 4.6);



let container = document.getElementById('Newtable');
let table =document.createElement('table');
container.appendChild(table);

let theEL1 = document.createElement('tr');
table.appendChild(theEL1);

let head1 = document.createElement('th');
theEL1.appendChild(head1);
head1.textContent = '   ';

let headingRaw = document.createElement('th');
head1.appendChild(headingRaw);
headingRaw.textContent= ' ';





function forHours(){
for (let i=0 ; i<=14 ; i++){
headingRaw = document.createElement('th');
theEL1.appendChild(headingRaw);
headingRaw.textContent=seattle.hours[i];
}}
forHours();


let tot =0 ;

Fish.prototype.render= function(){
let area = document.createElement('tr');
table.appendChild(area);
area.textContent =this.location;

for(let i=0; i<14; i++ ){
let theEL2 =document.createElement('th');
area.appendChild(theEL2);
theEL2.textContent=this.cookiesPerHoure[i];

this.cookiesPerHoure.push(Math.ceil(this.cookiesPerHoure[i]));
}

let dailyTot =document.createElement('tr');
area.appendChild(dailyTot);
for(let c= 0 ; c <this.cookiesPerHoure.length ; c++){
  tot = tot + this.cookiesPerHoure[c];
  // console.log(typeof( tot));
  tot= parseInt(tot);
  // console.log(tot);
}
dailyTot.textContent= tot ;
tot = 0 ;

}




let newForm = document.getElementById('Salmoncookies');
newForm.addEventListener('submit', submitions);

function submitions(event){
  event.preventDefault();
 
  let location= event.target.area.value;


  let minCust =parseInt(event.target.minimum.value);
console.log(typeof(minCust));

  let maxCust =parseInt( event.target.maximum.value);
  console.log(typeof(maxCust));

  let avgCookies =parseInt( event.target.average.value);
  console.log(typeof(avgCookies));

  let newFish = new Fish(location,minCust,maxCust,avgCookies);

  table.deleteRow(elements.length);
  
  newFish.custInHoure();
  newFish.cookiesPerHour();
  newFish.render();
  footer();
}


function footer(){
let foot = document.createElement('tr');
foot.addClassName='newStyle'
foot.id ='footerId';
table.appendChild(foot);
foot.textContent='Totals';

let sum2 =0 ;
let sum = 0;
let td = null ;
for ( let i=0 ; i<14 ; i++){
sum = seattle.cookiesPerHoure[i] + Tokyo.cookiesPerHoure[i] +Dubai.cookiesPerHoure[i]+Paris.cookiesPerHoure[i]+Lima.cookiesPerHoure[i];
// console.log(sum);
td = document.createElement('td');
foot.appendChild(td);
td.textContent=sum;
sum2 = sum+ sum2 ;
}
let theEl3 =document.createElement('td');
foot.appendChild(theEl3);
theEl3.textContent = sum2;
}



seattle.custInHoure();
seattle.cookiesPerHour();
seattle.render();
Tokyo.custInHoure();
Tokyo.cookiesPerHour();
Tokyo.render();
Dubai.custInHoure();
Dubai.cookiesPerHour();
Dubai.render();
Paris.custInHoure();
Paris.cookiesPerHour();
Paris.render();
Lima.custInHoure();
Lima.cookiesPerHour();
Lima.render();
footer();





function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
myFunction();




// seattle.custInHoure();
// seattle.cookiesPerHour();
// seattle.render();
// Tokyo.custInHoure();
// Tokyo.cookiesPerHour();
// Tokyo.render();
// Dubai.custInHoure();
// Dubai.cookiesPerHour();
// Dubai.render();
// Paris.custInHoure();
// Paris.cookiesPerHour();
// Paris.render();
// Lima.custInHoure();
// Lima.cookiesPerHour();
// Lima.render();
// footer();

// console.log(seattle.cookiesPerHoure);







/*
let CookiesInHour = document.createElement('td');
theEl1.appendChild(CookiesInHour);
CookiesInHour.textContent = seattle.cookiesPerHoure[i];

let theEL2 = document.createElement('td');
CookiesInHour.appendChild(theEL2);
theEL2.textContent = Tokyo.cookiesPerHoure[i];

let theEL3 = document.createElement('td');
theEL2.appendChild(theEL3);
theEL3.textContent = Dubai.cookiesPerHoure[i];

let theEL4 = document.createElement('td');
theEL3.appendChild(theEL4);
theEL4.textContent= Paris.cookiesPerHoure[i];

let theEl5 = document.createElement('td');
theEL4.appendChild(theEl5);
theEl5.textContent = Lima.cookiesPerHoure[i];

tot = seattle.cookiesPerHoure[i] +Tokyo.cookiesPerHoure[i] +Dubai.cookiesPerHoure[i]+Paris.cookiesPerHoure[i] +Lima.cookiesPerHoure[i];

let theEl6 = document.createElement('td');
theEl5.appendChild(theEl6);
theEl6.textContent = tot;

tot =0 ;
}


}
tableCreate();

let arrSum=0;
Fish.prototype.render= function(){
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent= this.restName;

  for(let i = 0; i < 14; i++){
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.avgCoPerHour[i];
    arrSum = this.avgCoPerHour[i]+arrSum;
  }
  let tf = document.createElement('td');
  tr.appendChild(tf);
  tf.textContent= arrSum;
};

*/






// const Seattle = {
//     location: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     hours: [],
//     custPerHour: [],
//     cookieshuorly: [],
//     total : 0,
//     hourWork: function () {
//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 this.hours.push(`${i}am`);
//             } else if (i == 12) {
//                 this.hours.push(`${i}pm`);
//             }
//             else {
//                 this.hours.push(`${i - 12}pm`)
//             }
//             this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
//         }
//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//             this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

//         }
//     },

//     creatingList: function () {
//         let container = document.getElementById('myList');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = `${this.location}`;
//         let unorderList = document.createElement('ul');
//         container.appendChild(unorderList);
//         let li = null;
//         let total = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             li = document.createElement('li');
//             li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
//             unorderList.appendChild(li);
//             this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
//     // console.log(this.total);
//         }
//         let total1= document.createElement('li');
//         container.appendChild(total1);
//         li.textContent=`The total is : ${this.total}`;
 
//     },

// };
// Seattle.hourWork();
// Seattle.cookiesPerHour();
// Seattle.creatingList();


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }




// const Tokyo = {
//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,
//     hours: [],
//     custPerHour: [],
//     cookieshuorly: [],
//     total : 0,
//     hourWork: function () {
//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 this.hours.push(`${i}am`);
//             } else if (i == 12) {
//                 this.hours.push(`${i}pm`);
//             }
//             else {
//                 this.hours.push(`${i - 12}pm`)
//             }
//             this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
//         }
//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//             this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

//         }
//     },

//     creatingList: function () {
//         let container = document.getElementById('myList');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = `${this.location}`;
//         let unorderList = document.createElement('ul');
//         container.appendChild(unorderList);
//         let li = null;
//         let total = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             li = document.createElement('li');
//             li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
//             unorderList.appendChild(li);
//             this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
//     // console.log(this.total);
//         }
//         let total1= document.createElement('li');
//         container.appendChild(total1);
//         li.textContent=`The total is : ${this.total}`;
 
//     },

// };
// Tokyo.hourWork();
// Tokyo.cookiesPerHour();
// Tokyo.creatingList();





// const Dubai = {
//     location: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 3.7,
//     hours: [],
//     custPerHour: [],
//     cookieshuorly: [],
//     total : 0,
//     hourWork: function () {
//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 this.hours.push(`${i}am`);
//             } else if (i == 12) {
//                 this.hours.push(`${i}pm`);
//             }
//             else {
//                 this.hours.push(`${i - 12}pm`)
//             }
//             this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
//         }
//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//             this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

//         }
//     },

//     creatingList: function () {
//         let container = document.getElementById('myList');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = `${this.location}`;
//         let unorderList = document.createElement('ul');
//         container.appendChild(unorderList);
//         let li = null;
//         let total = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             li = document.createElement('li');
//             li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
//             unorderList.appendChild(li);
//             this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
//     // console.log(this.total);
//         }
//         let total1= document.createElement('li');
//         container.appendChild(total1);
//         li.textContent=`The total is : ${this.total}`;
 
//     },

// };
// Dubai.hourWork();
// Dubai.cookiesPerHour();
// Dubai.creatingList();


// const Paris = {
//     location: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookies: 2.3,
//     hours: [],
//     custPerHour: [],
//     cookieshuorly: [],
//     total : 0,
//     hourWork: function () {
//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 this.hours.push(`${i}am`);
//             } else if (i == 12) {
//                 this.hours.push(`${i}pm`);
//             }
//             else {
//                 this.hours.push(`${i - 12}pm`)
//             }
//             this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
//         }
//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//             this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

//         }
//     },

//     creatingList: function () {
//         let container = document.getElementById('myList');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = `${this.location}`;
//         let unorderList = document.createElement('ul');
//         container.appendChild(unorderList);
//         let li = null;
//         let total = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             li = document.createElement('li');
//             li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
//             unorderList.appendChild(li);
//             this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
//     // console.log(this.total);
//         }
//         let total1= document.createElement('li');
//         container.appendChild(total1);
//         li.textContent=`The total is : ${this.total}`;
 
//     },

// };
// Paris.hourWork();
// Paris.cookiesPerHour();
// Paris.creatingList();



// const Lima = {
//     location: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookies: 4.6,
//     hours: [],
//     custPerHour: [],
//     cookieshuorly: [],
//     total : 0,
//     hourWork: function () {
//         for (let i = 6; i < 20; i++) {
//             if (i < 12) {
//                 this.hours.push(`${i}am`);
//             } else if (i == 12) {
//                 this.hours.push(`${i}pm`);
//             }
//             else {
//                 this.hours.push(`${i - 12}pm`)
//             }
//             this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
//         }
//     },


//     cookiesPerHour: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//             this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

//         }
//     },

//     creatingList: function () {
//         let container = document.getElementById('myList');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = `${this.location}`;
//         let unorderList = document.createElement('ul');
//         container.appendChild(unorderList);
//         let li = null;
//         let total = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             li = document.createElement('li');
//             li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
//             unorderList.appendChild(li);
//             this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
//     // console.log(this.total);
//         }
//         let total1= document.createElement('li');
//         container.appendChild(total1);
//         li.textContent=`The total is : ${this.total}`;
 
//     },

// };
// Lima.hourWork();
// Lima.cookiesPerHour();
// Lima.creatingList();