const url = "https://www.sodexo.fi/ruokalistat/output/weekly_json/152";
const weekdays = [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai"
];

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const mealDates = data.mealdates;
        const currentDate = new Date();
        const currentWeekday = weekdays[currentDate.getDay()].toLowerCase();
        const todaysLunchList = mealDates.find(
            (e) => e.date.toLowerCase() === currentWeekday
        );

        const menuItems = todaysLunchList.courses;

        const cardList = document.getElementById("card-list");

        Object.keys(menuItems).forEach((key) => {
            const menuItem = menuItems[key];
            const menuItemName = menuItem.title_fi;
            const menuItemElement = document.createElement("p");
            menuItemElement.innerHTML = menuItemName;
            cardList.appendChild(menuItemElement);
        });

    })
    .catch((error) => console.log(error));
