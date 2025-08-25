const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "./avataars/annakendrick.svg",
    bgColor: "darkcyan",
    textColor: "beige"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "./avataars/harryfn.svg",
    bgColor: "cornsilk",
    textColor: "darkslategray"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "./avataars/sofiasul.svg",
    bgColor: "dodgerblue",
    textColor: "lightcyan"
  }
];

const content = document.getElementById("content");

const getImageElement = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
};

function generateCard({id, fullName, jobTitle, bio, avatar, bgColor, textColor}) {
  const section = document.createElement("section");
  section.className = "card";
  section.id = id;
  section.style.backgroundColor = bgColor;
  section.style.color = textColor;

  const image = getImageElement(avatar, fullName);

  const textDiv = document.createElement("div");
  textDiv.className = "card-text";

  const nameEl = document.createElement("h2");
  nameEl.textContent = fullName;

  const jobEl = document.createElement("h3");
  jobEl.textContent = jobTitle;

  const bioEl = document.createElement("p");
  bioEl.textContent = bio;

  textDiv.append(nameEl, jobEl, bioEl);
  section.append(image, textDiv);

  return section;
}

team.map(generateCard).forEach(card => content.append(card));