'use strict';


let area = ['Seattle', 'Tokyo','Dubai','Paris','Lima' , 'Total'];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

getRandomInt();

function Fish (location,minCust,maxCust,avgCookies){
    this.location = location;
    this.minCust= minCust;
    this.maxCust= maxCust;
    this.avgCookies = avgCookies;
    this.hours= ['6am','7am', '8am' ,'9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];
    this.custHoure =[];
    this.cookiesPerHoure= [];

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

seattle.custInHoure();
seattle.cookiesPerHour();
Tokyo.custInHoure();
Tokyo.cookiesPerHour();
Dubai.custInHoure();
Dubai.cookiesPerHour();
Paris.custInHoure();
Paris.cookiesPerHour();
Lima.custInHoure();
Lima.cookiesPerHour();




function tableCreate(){

let container = document.getElementById('Newtable');
let table =document.createElement('table');
container.appendChild(table);

let headingRaw = document.createElement('tr');
table.appendChild(headingRaw);
headingRaw.textContent= ' Table ';

for (let c=0;c<6;c++){
let location = document.createElement('tr');
headingRaw.appendChild(location);
location.textContent =area[c];
}

let tot =0; 
for (let i=0 ; i<14 ; i++){

let theEl1 = document.createElement('th');
headingRaw.appendChild(theEl1);
theEl1.textContent = seattle.hours[i];

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