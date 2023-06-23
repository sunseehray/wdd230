const memberData = 'data.json';
let membersList = [];

filterMembers();

async function filterMembers() {
    const response = await fetch(memberData);
    const data = await response.json();

    membersList = data.members;

    // console.table(membersList);

    const filteredList = membersList.filter(member => member.level === "silver" || member.level === "gold");
    // console.table(filteredList);

    const pickedNumbers = pickRandom(filteredList);
    // console.table(pickedNumbers);
    spotlightMember(filteredList[pickedNumbers[0]]);
    spotlightMember(filteredList[pickedNumbers[1]]);
    spotlightMember(filteredList[pickedNumbers[2]]);
}

function spotlightMember (member) {
    
    const cards = document.querySelector('section#spotlight'); // select the output container element
  
      // Create elements to add to the div.cards element
      let card = document.createElement('div');
        let h3 = document.createElement('h3');

        let desc = document.createElement('p');

        let logoContainer = document.createElement('picture');
          let websiteImg = document.createElement('a');
            let logo = document.createElement('img');

        let phone = document.createElement('p');
        let email = document.createElement('p');

      // Build the card content
      h3.textContent = `${member.businessName}`;
      desc.textContent = `${member.businessDescription}`;
      desc.setAttribute("class","descSpot");

      websiteImg.setAttribute('href', member.website);
      websiteImg.setAttribute('target',"_blank");
      logo.setAttribute('src', member.imageURL);
      logo.setAttribute('alt', `Logo of ${member.businessName}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('class', 'directory-logo');

      phone.textContent = `${member.phone}`;
      phone.setAttribute('id','phone');

      email.textContent = `${member.email}`;
      email.setAttribute('id','email')

  
      // Append the section(card) with the created elements
      card.appendChild(h3);
      card.appendChild(desc);
      card.appendChild(logoContainer);
      logoContainer.appendChild(websiteImg);
      websiteImg.appendChild(logo);
      card.appendChild(phone);
      card.appendChild(email);  
      cards.appendChild(card);
} 

// from a list, pick random elements without repeating
function pickRandom (pickList) {
    const listLen = pickList.length;
    const indexList = [];
    while (indexList.length < 3) {
        const randomIndex = Math.floor(Math.random() * (listLen));
        if (!indexList.includes(randomIndex)) {
            indexList.push(randomIndex);
        }
    }

    // console.log(indexList);
    return indexList;
}