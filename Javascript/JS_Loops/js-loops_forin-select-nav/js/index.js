console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (key in languages) {
  const option = document.createElement("option");
  select.append(option);
  option.value = languages[key];
  option.textContent = languages[key];
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

for (key in nav) {
  console.log(key);
  const listitem = document.createElement("li");
  const anchorTag = document.createElement("a");
  //const hrefProperty = document.createElement("href");
  ul.append(listitem);
  listitem.append(anchorTag);

  anchorTag.href = key.href;
  anchorTag.textContent = key;
  console.log(anchorTag.href);
}

// --^-- write or modify code above this line --^--
