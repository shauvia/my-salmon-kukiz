let store = {
  location: '1st & Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCust: 6.3,
  kukiesHourlyArr: [],
  randomClientNum: function() {
    return Math.floor((Math.random() * Math.floor(this.maxCustomer - this.minCustomer)) + this.minCustomer);
  },
  kukiesPerHour: function() {
    let randomNum = this.randomClientNum();
    console.log(randomNum);
    return randomNum * Math.floor(this.avgCookiePerCust);
  },
  pushIntoArr: function() {
    let n = 1;
    while (n <= 15) {
      let kukiesOnHour = this.kukiesPerHour();
      this.kukiesHourlyArr.push(kukiesOnHour);
      n++;
    }
  }
};

store.pushIntoArr();

let elementList = document.getElementById('list');
let locationOfStore = document.createElement('li');
locationOfStore.textContent = store.location;
elementList.appendChild(locationOfStore);
for (let i = 0; i < store.kukiesHourlyArr.length; i++) {
  console.log('dlugość: ' + store.kukiesHourlyArr.length);
  if (i <= 6 ) {
    let newListItem = document.createElement('li');
    newListItem.textContent = (i+6) + ' am ' + store.kukiesHourlyArr[i] + ' cookies';
    elementList.appendChild(newListItem);
  } else {
    let newListItem = document.createElement('li');
    newListItem.textContent = (i-6) + '  pm ' + store.kukiesHourlyArr[i] + ' cookies';
    elementList.appendChild(newListItem);
  }
}

function calculateCookiesTotal(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function createListItemForCookiesTotal(num) {
  let cookiesTotal = document.createElement('li');
  cookiesTotal.textContent = 'Cookies total: ' + num;
  elementList.appendChild(cookiesTotal); 
}


createListItemForCookiesTotal(calculateCookiesTotal(store.kukiesHourlyArr));


// store.pushIntoArr();


// var john = {
//   name: 'John Cokos',
//   pets: ['Rosie', 'Luna'],
// };



// Find the UL
// var elementList = document.getElementById('list');



// // For john.children.length
// for (var i = 0; i < john.pets.length; i++) {

//   // Create an LI
//   // var newListItem = document.createElement('li');

//   // Set the textContent to the name of the child
//   newListItem.textContent = john.pets[i];

//   // Append LI as a Child to UL
//   elementList.appendChild(newListItem);
// }




