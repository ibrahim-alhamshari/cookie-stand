'use strict';


//   let custInHoure =[];
// function Fish (minCust,maxCust,avgCookies,hours){
//     this.minCust= minCust;
//     this.maxCust= maxCust;
//     this.avgCookies = avgCookies;
//     this.hours= hours;

//     // this.cookiesHourly = cookiesHourly;
//     console.log(this);
// }

// let Seattle = new Fish(23 , 65, 6.3 , ['6am','7am', '8am' ,'9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ] );

// Fish.prototype.custInHoure= function(){
// custInHoure = custInHoure.push(getRandomInt(this.minCust, this.maxCust));
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

// getRandomInt();
// Seattle.custInHoure();


// function cookiesHourly() {
//     for (let i = 0; i < this.hours.length; i++) {
//         this.cookiesHuorly.push(Math.ceil(this.avgCookies * this.custInHoure[i]));
//         console.log(cookiesHourly);
//     }
// }



// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }





const Seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    hours: [],
    custPerHour: [],
    cookieshuorly: [],
    total : 0,
    hourWork: function () {
        for (let i = 6; i < 20; i++) {
            if (i < 12) {
                this.hours.push(`${i}am`);
            } else if (i == 12) {
                this.hours.push(`${i}pm`);
            }
            else {
                this.hours.push(`${i - 12}pm`)
            }
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }
    },


    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

        }
    },

    creatingList: function () {
        let container = document.getElementById('myList');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = `${this.location}`;
        let unorderList = document.createElement('ul');
        container.appendChild(unorderList);
        let li = null;
        let total = 0;
        for (let i = 0; i < this.hours.length; i++) {
            li = document.createElement('li');
            li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
            unorderList.appendChild(li);
            this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
    // console.log(this.total);
        }
        let total1= document.createElement('li');
        container.appendChild(total1);
        li.textContent=`The total is : ${this.total}`;
 
    },

};
Seattle.hourWork();
Seattle.cookiesPerHour();
Seattle.creatingList();


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}




const Tokyo = {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    hours: [],
    custPerHour: [],
    cookieshuorly: [],
    total : 0,
    hourWork: function () {
        for (let i = 6; i < 20; i++) {
            if (i < 12) {
                this.hours.push(`${i}am`);
            } else if (i == 12) {
                this.hours.push(`${i}pm`);
            }
            else {
                this.hours.push(`${i - 12}pm`)
            }
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }
    },


    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

        }
    },

    creatingList: function () {
        let container = document.getElementById('myList');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = `${this.location}`;
        let unorderList = document.createElement('ul');
        container.appendChild(unorderList);
        let li = null;
        let total = 0;
        for (let i = 0; i < this.hours.length; i++) {
            li = document.createElement('li');
            li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
            unorderList.appendChild(li);
            this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
    // console.log(this.total);
        }
        let total1= document.createElement('li');
        container.appendChild(total1);
        li.textContent=`The total is : ${this.total}`;
 
    },

};
Tokyo.hourWork();
Tokyo.cookiesPerHour();
Tokyo.creatingList();





const Dubai = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    hours: [],
    custPerHour: [],
    cookieshuorly: [],
    total : 0,
    hourWork: function () {
        for (let i = 6; i < 20; i++) {
            if (i < 12) {
                this.hours.push(`${i}am`);
            } else if (i == 12) {
                this.hours.push(`${i}pm`);
            }
            else {
                this.hours.push(`${i - 12}pm`)
            }
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }
    },


    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

        }
    },

    creatingList: function () {
        let container = document.getElementById('myList');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = `${this.location}`;
        let unorderList = document.createElement('ul');
        container.appendChild(unorderList);
        let li = null;
        let total = 0;
        for (let i = 0; i < this.hours.length; i++) {
            li = document.createElement('li');
            li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
            unorderList.appendChild(li);
            this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
    // console.log(this.total);
        }
        let total1= document.createElement('li');
        container.appendChild(total1);
        li.textContent=`The total is : ${this.total}`;
 
    },

};
Dubai.hourWork();
Dubai.cookiesPerHour();
Dubai.creatingList();


const Paris = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    hours: [],
    custPerHour: [],
    cookieshuorly: [],
    total : 0,
    hourWork: function () {
        for (let i = 6; i < 20; i++) {
            if (i < 12) {
                this.hours.push(`${i}am`);
            } else if (i == 12) {
                this.hours.push(`${i}pm`);
            }
            else {
                this.hours.push(`${i - 12}pm`)
            }
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }
    },


    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

        }
    },

    creatingList: function () {
        let container = document.getElementById('myList');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = `${this.location}`;
        let unorderList = document.createElement('ul');
        container.appendChild(unorderList);
        let li = null;
        let total = 0;
        for (let i = 0; i < this.hours.length; i++) {
            li = document.createElement('li');
            li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
            unorderList.appendChild(li);
            this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
    // console.log(this.total);
        }
        let total1= document.createElement('li');
        container.appendChild(total1);
        li.textContent=`The total is : ${this.total}`;
 
    },

};
Paris.hourWork();
Paris.cookiesPerHour();
Paris.creatingList();



const Lima = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    hours: [],
    custPerHour: [],
    cookieshuorly: [],
    total : 0,
    hourWork: function () {
        for (let i = 6; i < 20; i++) {
            if (i < 12) {
                this.hours.push(`${i}am`);
            } else if (i == 12) {
                this.hours.push(`${i}pm`);
            }
            else {
                this.hours.push(`${i - 12}pm`)
            }
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }
    },


    cookiesPerHour: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.cookieshuorly.push(Math.ceil(this.avgCookies * this.custPerHour[i]));

        }
    },

    creatingList: function () {
        let container = document.getElementById('myList');
        let h2 = document.createElement('h2');
        container.appendChild(h2);
        h2.textContent = `${this.location}`;
        let unorderList = document.createElement('ul');
        container.appendChild(unorderList);
        let li = null;
        let total = 0;
        for (let i = 0; i < this.hours.length; i++) {
            li = document.createElement('li');
            li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies`
            unorderList.appendChild(li);
            this.total = this.total+ Math.ceil(this.cookieshuorly[i]);
    // console.log(this.total);
        }
        let total1= document.createElement('li');
        container.appendChild(total1);
        li.textContent=`The total is : ${this.total}`;
 
    },

};
Lima.hourWork();
Lima.cookiesPerHour();
Lima.creatingList();