// let store = {
//   location: '1st & Pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookiePerCust: 6.3,
//   kukiesHourlyArr: [],
//   randomClientNum: function() {
//     return Math.floor((Math.random() * Math.floor(this.maxCustomer - this.minCustomer)) + this.minCustomer);
//   },
//   kukiesPerHour: function() {
//     let randomNum = this.randomClientNum();
//     console.log(randomNum);
//     return randomNum * Math.floor(this.avgCookiePerCust);
//   },
//   pushIntoArr: function() {
//     let n = 1;
//     while (n <= 15) {
//       let kukiesOnHour = this.kukiesPerHour();
//       this.kukiesHourlyArr.push(kukiesOnHour);
//       n++;
//     }
//   }
// };

// store.pushIntoArr();

function Store(adress, minCust, maxCust, avgCookies) {
  this.location = adress;
  this.minCustomer = minCust;
  this.maxCustomer = maxCust;
  this.avgCookiePerCust =  avgCookies;
  this.kukiesHourlyArr =  [];
  this.pushIntoArr();

}

Store.prototype.randomClientNum = function() {
  return Math.floor((Math.random() * Math.floor(this.maxCustomer - this.minCustomer)) + this.minCustomer);
},
Store.prototype.kukiesPerHour = function() {
  let randomNum = this.randomClientNum();
  console.log(randomNum);
  return randomNum * Math.floor(this.avgCookiePerCust);
},
Store.prototype.pushIntoArr =  function() {
  let n = 1;
  while (n <= 15) {
    let kukiesOnHour = this.kukiesPerHour();
    this.kukiesHourlyArr.push(kukiesOnHour);
    n++;
  }
};

let arrayOfStores = [];

arrayOfStores.push(new Store('1st & Pike', 23, 65, 6.3));
arrayOfStores.push(new Store('SeaTacAirport', 3, 24, 1.2)); 
arrayOfStores.push(new Store('Seattle Center', 11, 38, 3.7));
arrayOfStores.push(new Store('Capitol Hill', 20, 38, 2.3));
arrayOfStores.push(new Store('Alki', 2, 16, 4.6)); 

console.log(arrayOfStores);




// let elementList = document.getElementById('list'); 

let saleTable = document.getElementById('table');
// let tHRow = document.createElement('tr');
// saleTable.appendChild(tHRow);
// for (let i = 0; i < 15; i++) {
//   let tHrData = document.createElement('th');
//   tHrData.textContent = (i+6) + ' am';
//   tHRow.appendChild(tHrData);
// }


function createTableHeader(store){ 
  let tHRow = document.createElement('tr');
  saleTable.appendChild(tHRow);
  let tHrData = document.createElement('th');
  tHrData.textContent = 'pusty';
  tHRow.appendChild(tHrData);
  for (let i = 0; i < store.kukiesHourlyArr.length; i++) {
    if (i <= 6 ) {
      tHrData = document.createElement('th');
      tHrData.textContent = (i+6) + ' am';
      tHRow.appendChild(tHrData);
    } else {
      tHrData = document.createElement('th');
      tHrData.textContent = (i-6) + ' pm';
      tHRow.appendChild(tHrData);
    }
  }
  tHrData = document.createElement('th');
  tHrData.textContent = 'Daily location total';
  tHRow.appendChild(tHrData);
}

function createOneStoreRow(store){
  let sum = 0;
  let tBRow = document.createElement('tr');
  saleTable.appendChild(tBRow);
  let tBrLocation = document.createElement('td');
  tBrLocation.textContent = store.location;
  tBRow.appendChild(tBrLocation);
  for (let i = 0; i < store.kukiesHourlyArr.length; i++) {
    sum += store.kukiesHourlyArr[i];
    let tBrData = document.createElement('td');
    tBrData.textContent = store.kukiesHourlyArr[i];
    tBRow.appendChild(tBrData);
  }
  let tBrTotal = document.createElement('td');
  tBrTotal.textContent = sum;
  tBRow.appendChild(tBrTotal);
}

function calculateOneHourTotal(arr, index){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].kukiesHourlyArr[index];
  }
  return sum;
}

console.log('ciastka: ' + calculateOneHourTotal(arrayOfStores, 0));

function calculateEveryHourTotal(arr) {
  let lista = [];
  for (let i = 0; i < arr[0].kukiesHourlyArr.length; i++){
    lista.push(calculateOneHourTotal(arr, i));
  }
  return lista;
}

// jeszcze musze calculateEveryHourTotal wyświetlić;

console.log('lista: ' + calculateEveryHourTotal(arrayOfStores));

createTableHeader(arrayOfStores[0]); // to nie powinien być store, header powinien być niezależny od stora;
createOneStoreRow(arrayOfStores[0]);
createOneStoreRow(arrayOfStores[1]);
createOneStoreRow(arrayOfStores[2]);
createOneStoreRow(arrayOfStores[3]);
createOneStoreRow(arrayOfStores[4]);
console.log('pierwszy sklep' + arrayOfStores[0].kukiesHourlyArr[0]);





// function createListOfSalePredictions(store){ 
//   let locationOfStore = document.createElement('li');
//   locationOfStore.textContent = store.location;
//   elementList.appendChild(locationOfStore);
//   for (let i = 0; i < store.kukiesHourlyArr.length; i++) {
//     console.log('dlugość: ' + store.kukiesHourlyArr.length);
//     if (i <= 6 ) {
//       let newListItem = document.createElement('li');
//       newListItem.textContent = (i+6) + ' am ' + store.kukiesHourlyArr[i] + ' cookies';
//       elementList.appendChild(newListItem);
//     } else {
//       let newListItem = document.createElement('li');
//       newListItem.textContent = (i-6) + '  pm ' + store.kukiesHourlyArr[i] + ' cookies';
//       elementList.appendChild(newListItem);
//     }
//   }
// }  

// function calculateCookiesTotal(arr){
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// function createListItemForCookiesTotal(num) {
//   let cookiesTotal = document.createElement('li');
//   cookiesTotal.textContent = 'Cookies total: ' + num;
//   elementList.appendChild(cookiesTotal); 
// }

// createListOfSalePredictions(store);
// createListItemForCookiesTotal(calculateCookiesTotal(store.kukiesHourlyArr));








 