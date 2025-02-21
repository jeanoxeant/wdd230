const url1 = "data/members.json";
const cards = document.querySelector("#cards");

async function getCompaniesData() {
  const response = await fetch(url1);
  const data = await response.json();
  displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement("section");
    let bName = document.createElement("h3");
    //let logo = document.createElement("img");
    let phone = document.createElement("p");
    let industry = document.createElement("p");
    let address = document.createElement("p");
    
    let website = document.createElement("a");
    website.setAttribute("href", `https://${company.website}`);
    website.textContent = company.website;
    let membership = document.createElement("p");

    const logo = document.createElement("img");
    logo.setAttribute("src", company.logo);
    logo.setAttribute("alt", `Logo of ${company.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "75");
    logo.setAttribute("height", "auto");

    

    bName.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.setAttribute("href", `${company.url}`);
    website.textContent = company.url;
    website.setAttribute("target", "_blank");
    membership.textContent = `${company.membership} Membership`;
    

    card.appendChild(logo);
    card.appendChild(bName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    cards.appendChild(card);
  });
};
getCompaniesData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid-directory");
  display.classList.remove("list-directory");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list-directory");
  display.classList.remove("grid-directory");
}