'use strict';

const Seattle ={
minCust : 23,
maxCust : 65,
avgCookies : 6.3 ,
hours : [],
custPerHour :[],
cookieshuorly : [],

hourWork:function(){
for (let i=6; i< 20; i++){
this.hours.push(i);
this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
// console.log(i);
}},
cookiesPerHour: function(){
    for (let i=0 ; i<this.hours.length ; i++){
    this.cookieshuorly.push(this.avgCookies*this.custPerHour[i]);
    // console.log(this.cookieshuorly);
}}
};
Seattle.hourWork();
Seattle.cookiesPerHour();
console.log(Seattle.custPerHour);

// helper function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  const Tokyo ={
    minCust : 3,
    maxCust : 24,
    avgCookies : 1.2 ,
    hours : [],
    custPerHour :[],
    cookieshuorly : [],
    
    hourWork:function(){
    for (let i=6; i< 20; i++){
    this.hours.push(i);
    this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
    }},
    cookiesPerHour: function(){
        for (let i=0 ; i<this.hours.length ; i++){
        this.cookieshuorly.push(this.avgCookies*this.custPerHour[i]);
    }}
    };
    Tokyo.hourWork();
    Tokyo.cookiesPerHour();
    console.log(Tokyo.custPerHour);
    
    // helper function
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

      const Dubai ={
        minCust : 3,
        maxCust : 24,
        avgCookies : 1.2 ,
        hours : [],
        custPerHour :[],
        cookieshuorly : [],
        
        hourWork:function(){
        for (let i=6; i< 20; i++){
        this.hours.push(i);
        this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }},
        cookiesPerHour: function(){
            for (let i=0 ; i<this.hours.length ; i++){
            this.cookieshuorly.push(this.avgCookies*this.custPerHour[i]);
        }}
        };
        Dubai.hourWork();
        Dubai.cookiesPerHour();
        console.log(Dubai.custPerHour);
        
        // helper function
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
          }


          const Paris ={
            minCust : 3,
            maxCust : 24,
            avgCookies : 1.2 ,
            hours : [],
            custPerHour :[],
            cookieshuorly : [],
            
            hourWork:function(){
            for (let i=6; i< 20; i++){
            this.hours.push(i);
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
            }},
            cookiesPerHour: function(){
                for (let i=0 ; i<this.hours.length ; i++){
                this.cookieshuorly.push(this.avgCookies*this.custPerHour[i]);
            }}
            };
            Paris.hourWork();
            Paris.cookiesPerHour();
            console.log(Paris.custPerHour);
            
            // helper function
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
              }