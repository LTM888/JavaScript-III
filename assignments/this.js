/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when 'this' is really undefined so 'this' will refer to the only thing it has 
which is the window/console object.

* 2.  Implicit Binding is somewhat like dot notation to me only because you have to invoke the dot in order for 'this' to work.

* 3. New Binding are use with constructor function in order to creat and returned constructor function.

* 4. Explicit Binding is when JavaScript call or if the apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1
function favTeam(name) {
    console.log(this);
}
favTeam("Cowboys");
// code example for Window Binding

// Principle 2
const weatherReport = {
    report: "Blue Skys",
    feedBack: function (weater) {
        console.log(`Todays weather is calling ${this.report} today ${name}`);
        console.log(this)
    }
};
weatherReport.feedBack("James");
// code example for Implicit Binding

// Principle 3
function workOutPlan(customer) {
    this.message = 'Welcome to Fit For Life';
    this.customer = customer;
    this.intro = function () {
        console.log(this.message + this.customer);
        console.log(this);
    };
}

const tom = new workOutPlan('Tom');
const terry = new workOutPlan('Terry');

tom.intro();
terry.intro();

// code example for New Binding

// Principle 4

const tom = new workOutPlan("Tom");
const terry = new workOutPlan("Terry");

tom.intro.call(tom);
terry.intro.apply(terry);

tom.intro();
terry.intro();


// code example for Explicit Binding