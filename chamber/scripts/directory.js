// display in gallery mode

function displayMembers (members) {
    
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach(member => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let website = document.createElement('a');
      let logo = document.createElement('img');
      let desc = document.createElement('p');
      let phone = document.createElement('p');
      let email = document.createElement('p');
  
      // Build the card content
      h3.textContent = `${member.businessName}`;
      desc.textContent = `${member.businessDescription}`;

      phone.textContent = `📞${member.phone}`;
      phone.setAttribute('id','phone');

      email.textContent = `📨${member.email}`;
      email.setAttribute('id','email');


      // Set logo link
      website.setAttribute('href', member.website);
      website.setAttribute('target',"_blank");

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
      card.appendChild(website);
      website.appendChild(logo);
      card.appendChild(phone);
      card.appendChild(email);
  
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