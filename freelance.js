
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

function displayFreelancers() {
  const freelancersList = document.getElementById("freelancers-list");
  freelancersList.innerHTML = "";
  freelancers.forEach(freelancer => {
    const li = document.createElement("li");
    li.textContent = `${freelancer.name}, ${freelancer.occupation}, starting at $${freelancer.startingPrice}`;
    freelancersList.appendChild(li);
  });
}

function calculateAveragePrice() {
  const averagePriceValue = document.getElementById("average-price-value");
  const totalPrices = freelancers.reduce((total, freelancer) => total + freelancer.startingPrice, 0);
  const averagePrice = totalPrices / freelancers.length;
  averagePriceValue.textContent = averagePrice.toFixed(2);
}

function addNewFreelancer(name, occupation, startingPrice) {
  freelancers.push({ name, occupation, startingPrice });
  displayFreelancers();
  calculateAveragePrice();
}


displayFreelancers();
calculateAveragePrice();


setTimeout(() => {
  addNewFreelancer("Carol", "Programmer", 70);
}, 3000); // Add Carol after 3 seconds