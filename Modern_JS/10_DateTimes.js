let value;

const today = new Data();
let birthday = new Date("22-09-1993 7:10:00")
birthday = new Date('September 22 1993')
birthday = new Date('22/09/1993')

value = today.getMonth();
value = today.getDate();
value = today.getDay();
value = today.getFullYears();
value = today.getHours();
value = today.getMinutes();
value = today.getMilliseconds();
value = today.getTime();

birthday.setDate(22);
birthday.setMonth(09);
birthday.setFullYear(1993);
birthday.setHours(7)
birthday.setMinutes(10);
birthday.setSeconds(00)