const baseURL = "https://jeanoxeant.github.io/wdd230/";
const linksURL = "https://jeanoxeant.github.io/wdd230/data/links.json";


async function apiFetch() {
  try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data);
      displayLinks(data.weeks);
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

const displayLinks = (data) => {
  const cards = document.querySelector('#list'); 
  data.forEach((week) => {
      let card = document.createElement('div');
      let weeks = document.createElement('ul');

      weeks.textContent = `Week ${week.week}: `;

      week.links.forEach((link, index) => {
          let listItem = document.createElement('li');
          let anchor = document.createElement('a');
          anchor.href = link.url;
          anchor.textContent = link.title;
          listItem.appendChild(anchor);
          if (index < week.links.length - 1) {
              
              listItem.appendChild(document.createTextNode(' | '));
          }
          weeks.appendChild(listItem);
      });

      card.appendChild(weeks);
      cards.appendChild(card);
  });
}