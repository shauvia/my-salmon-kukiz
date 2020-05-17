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
    return randomNum * this.avgCookiePerCust;
  }
  pushIntoArr: function() {
    let n = 1;
    while (n <= 15) {
      let kukiesOnHour = this.kukiesPerHour();
      this.kukiesHourlyArr.push(kukiesOnHour);
      n++
    }
  }
 


}



