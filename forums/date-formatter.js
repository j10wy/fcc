const availability = [
  {
    hash: "820eRWiyq2Vy4Sk",
    arrival: "2019-12-01",
    departure: "2019-12-08",
    description: "",
    col1: "695",
    availability: "empty",
    availableRooms: "7",
    availableGuests: "16"
  },
  {
    hash: "8201ahPFdE28VUF",
    arrival: "2020-01-05",
    departure: "2020-01-12",
    description: "",
    col1: "695",
    availability: "empty",
    availableRooms: "7",
    availableGuests: "16"
  }
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function formatAvailability(availability) {
  return availability
    .map(chalet => {
      // Create an array from chalet.arrival
      // Use array destructuring to store each part of your date string in a variable.
      let [year, month, day] = chalet.arrival.split("-");
      const montZeroIndex = month - 1;
      // Create a new date object
      const date = new Date(year, month - 1, day);

      const options = { weekday: "long" };
      const dayOfWeek = new Intl.DateTimeFormat("fr", options).format(date);

      return `
	  <div class="row-date" data-month="${month}">
         <!-- Here you can display the month name from the monthNames array by converting the month number to it's zero-index value. -->
	  	 <span><span>${monthNames[montZeroIndex]} ${date.getFullYear()}</span></span>
	  </div>
	  <div class="day">
	     <span class="d">${dayOfWeek} ${date.getDate()}</span>
	  </div>`;
    })
    .join("");
}

console.log(formatAvailability(availability));
