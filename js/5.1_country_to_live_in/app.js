function countryToLiveIn(language, isIsland, population, country) {
  if (language === `english` && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country}  does not meet your criteria`);
  }
}

countryToLiveIn(`english`, false, 40, `spain`);
