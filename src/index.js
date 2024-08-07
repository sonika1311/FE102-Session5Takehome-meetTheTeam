//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "/session5-takehome/avataaars/annakendrick.svg",
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "/session5-takehome/avataaars/harryfn.svg",
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "/session5-takehome/avataaars/sofiasul.svg",
  },
];

//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  let image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  image.setAttribute("height", "100");
  image.setAttribute("width", "100");
  return image;
};

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  //1. Create a new "section" element and set the className and id
  let sectionEle = document.createElement("section");
  sectionEle.setAttribute("class", "team-member");
  sectionEle.setAttribute("id", id);
  // console.log(sectionEle);
  //2. Generate the image using getImageElement() function
  //Hint - Use fullname as alt for the image.
  let avtar = getImageElement(avatar, fullName);
  //3. Create a div for text content
  let text = document.createElement("div");

  //4. Create an h2 for fullName
  let name = document.createElement("h2");
  name.textContent = fullName;
  //5. Create an h3 for jobTitle
  let job = document.createElement("h3");
  job.textContent = jobTitle;
  //6. Create a p for bio
  let biography = document.createElement("p");
  biography.textContent = bio;
  //7. Append the fullName, jobTitle, and bio element
  //   to the div created for text.
  text.append(name, job, biography);

  //8. Append the Image and the Text div
  //   to the new section you created in step 1
  sectionEle.append(avtar, text);
  //Return the new section element created.
  return sectionEle;
}

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
function generateCardArray(data) {
  const cards = [];
  //Add logic to populate `cards` array below
  data.forEach((element) => {
    let card = generateCard(
      element.id,
      element.fullName,
      element.jobTitle,
      element.bio,
      element.avatar
    );
    cards.push(card);
  });
  //Return cards array
  return cards;
}

const cardsArray = generateCardArray(team);

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}
//Modify Code above this line
