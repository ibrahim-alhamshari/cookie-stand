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
        if (i < 12){
            this.hours.push(`${i}am`);
        }else if (i==12){
            this.hours.push(`${i}pm`);
        }
        else{
            this.hours.push(`${i-12}pm`)
        }
    this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
    }},
    
    
    cookiesPerHour: function(){
        for (let i=0 ; i<this.hours.length ; i++){
        this.cookieshuorly.push(Math.ceil(this.avgCookies*this.custPerHour[i]));
      
    }},
    
    
    creatingList:function(){
        for(let i=0; i<this.hours.length; i++){
       let unorderlist =document.getElementById('myList');
       let li = document.createElement('li');
       li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies` 
        unorderlist.appendChild(li);  
    }
//   console.log(Tokyo.cookiesPerHour);
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
    



  const Tokyo ={
    minCust : 23,
    maxCust : 65,
    avgCookies : 6.3 ,
    hours : [],
    custPerHour :[],
    cookieshuorly : [],
    
    hourWork:function(){
    for (let i=6; i< 20; i++){
        if (i < 12){
            this.hours.push(`${i}am`);
        }else if (i==12){
            this.hours.push(`${i}pm`);
        }
        else{
            this.hours.push(`${i-12}pm`)
        }
    this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
    }},
    
    
    cookiesPerHour: function(){
        for (let i=0 ; i<this.hours.length ; i++){
        this.cookieshuorly.push(Math.ceil(this.avgCookies*this.custPerHour[i]));
      
    }},
    
    
    creatingList:function(){
        for(let i=0; i<this.hours.length; i++){
       let unorderlist =document.getElementById('mylist2');
       let li = document.createElement('li');
       li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies` 
        unorderlist.appendChild(li);  
    }
  console.log(Tokyo.cookiesPerHour);
},
    
    };
    Tokyo.hourWork();
    Tokyo.cookiesPerHour();
    Tokyo.creatingList();
  

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    



      const Dubai ={
        minCust : 23,
        maxCust : 65,
        avgCookies : 6.3 ,
        hours : [],
        custPerHour :[],
        cookieshuorly : [],
        
        hourWork:function(){
        for (let i=6; i< 20; i++){
            if (i < 12){
                this.hours.push(`${i}am`);
            }else if (i==12){
                this.hours.push(`${i}pm`);
            }
            else{
                this.hours.push(`${i-12}pm`)
            }
        this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
        }},
        
        
        cookiesPerHour: function(){
            for (let i=0 ; i<this.hours.length ; i++){
            this.cookieshuorly.push(Math.ceil(this.avgCookies*this.custPerHour[i]));
          
        }},
        
        
        creatingList:function(){
            for(let i=0; i<this.hours.length; i++){
           let unorderlist =document.getElementById('mylist3');
           let li = document.createElement('li');
           li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies` 
            unorderlist.appendChild(li);  
        }
    //   console.log(Tokyo.cookiesPerHour);
    },
        
        };
        Dubai.hourWork();
        Dubai.cookiesPerHour();
        Dubai.creatingList();
      
    
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
          }
        
    
    
          const Paris ={
            minCust : 23,
            maxCust : 65,
            avgCookies : 6.3 ,
            hours : [],
            custPerHour :[],
            cookieshuorly : [],
            
            hourWork:function(){
            for (let i=6; i< 20; i++){
                if (i < 12){
                    this.hours.push(`${i}am`);
                }else if (i==12){
                    this.hours.push(`${i}pm`);
                }
                else{
                    this.hours.push(`${i-12}pm`)
                }
            this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
            }},
            
            
            cookiesPerHour: function(){
                for (let i=0 ; i<this.hours.length ; i++){
                this.cookieshuorly.push(Math.ceil(this.avgCookies*this.custPerHour[i]));
              
            }},
            
            
            creatingList:function(){
                for(let i=0; i<this.hours.length; i++){
               let unorderlist =document.getElementById('mylist4');
               let li = document.createElement('li');
               li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies` 
                unorderlist.appendChild(li);  
            }
        //   console.log(Tokyo.cookiesPerHour);
        },
            
            };
            Paris.hourWork();
            Paris.cookiesPerHour();
            Paris.creatingList();
          
        
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
              }
            


              const Lima ={
                minCust : 23,
                maxCust : 65,
                avgCookies : 6.3 ,
                hours : [],
                custPerHour :[],
                cookieshuorly : [],
                
                hourWork:function(){
                for (let i=6; i< 20; i++){
                    if (i < 12){
                        this.hours.push(`${i}am`);
                    }else if (i==12){
                        this.hours.push(`${i}pm`);
                    }
                    else{
                        this.hours.push(`${i-12}pm`)
                    }
                this.custPerHour.push(getRandomInt(this.minCust, this.maxCust));
                }},
                
                
                cookiesPerHour: function(){
                    for (let i=0 ; i<this.hours.length ; i++){
                    this.cookieshuorly.push(Math.ceil(this.avgCookies*this.custPerHour[i]));
                  
                }},
                
                
                creatingList:function(){
                    for(let i=0; i<this.hours.length; i++){
                   let unorderlist =document.getElementById('mylist5');
                   let li = document.createElement('li');
                   li.textContent = `${this.hours[i]} , ${this.cookieshuorly[i]} cookies` 
                    unorderlist.appendChild(li);  
                }
            //   console.log(Tokyo.cookiesPerHour);
            },
                
                };
                Lima.hourWork();
                Lima.cookiesPerHour();
                Lima.creatingList();
              
            
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
                  }