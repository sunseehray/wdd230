const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

listbutton.addEventListener("click", () => {
    display.classList.add("list");
})

gridbutton.addEventListener("click", () => {
    display.classList.remove("list");
})

// display in gallery mode

function displayMembers (members) {
    
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach(member => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let logoContainer = document.createElement('picture');
      let websiteImg = document.createElement('a');
      let website = document.createElement('a');
      let logo = document.createElement('img');
      let desc = document.createElement('p');
      let contact = document.createElement('div');
      contact.setAttribute('class','contact');
      let address = document.createElement('p');
      address.setAttribute('class','address');
      let phone = document.createElement('p');

      // Build the card content
      h3.textContent = `${member.businessName}`;
      desc.textContent = `${member.businessDescription}`;
      desc.setAttribute("class","desc");

      address.textContent = `${member.address}`;

      phone.textContent = `${member.phone}`;
      phone.setAttribute('id','phone');

      website.textContent = `${member.website}`;
      website.setAttribute('href', member.website);
      website.setAttribute('target',"_blank");
      website.setAttribute('id',"full-link");

      // websiteImg for grid
      websiteImg.setAttribute('href', member.website);
      websiteImg.setAttribute('target',"_blank");

      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', member.imageURL);
      logo.setAttribute('alt', `Logo of ${member.businessName}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('class', 'directory-logo');
    //   logo.setAttribute('width', '340');
    //   logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h3);
      card.appendChild(desc);
      card.appendChild(contact);
      contact.appendChild(address);
      contact.appendChild(phone);
      contact.appendChild(website);
      card.appendChild(logoContainer);
      logoContainer.appendChild(websiteImg);
      websiteImg.appendChild(logo);

  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression

memberList = {};

const url = 'data.json';

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    memberList = data.members;
    displayMembers(memberList);
  }

getMemberData();