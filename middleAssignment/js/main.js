const jsonData = {
        "conutries": [
                {
                        "id": 1,
                        "pic": "Italy.jpg",
                        "title": "איטליה",
                        "Sports": "סייף, אתלטיקה, בדמינטון ",
                        "fullContent": "לינק לאתר",
                        "cat": "אירופה"
                },
                {
                        "id": 2,
                        "pic": "Switzerland.jpg",
                        "title": "שוויץ",
                        "Sports": "בייסבול, ג'ודו, גולף ",
                        "fullContent": "לינק לאתר",
                        "cat": "אירופה"
                },
                {
                        "id": 3,
                        "pic": "Greece.jpg",
                        "title": "יוון",
                        "Sports": "גלישה, הוקי קרח, הוקי דשא",
                        "fullContent": "לינק לאתר",
                        "cat": "אירופה"
                },
                {
                        "id": 4,
                        "pic": "UnitedStates.jpg",
                        "title": "ארצות הברית",
                        "Sports": "הרמת משקולות, התעמלות אומנותית, התעמלות מכשירים",
                        "fullContent": "לינק לאתר",
                        "cat": "צפון אמריקה"
                },
                {
                        "id": 5,
                        "pic": "Brazil.jpg",
                        "title": "ברזיל",
                        "Sports": "טניס, כדור מים, כדורגל",
                        "fullContent": "לינק לאתר",
                        "cat": "דרום אמריקה"
                },

                {
                        "id": 6,
                        "pic": "Argentina.jpg",
                        "title": "ארגנטינה",
                        "Sports": "כדורגל חופים, כדורסל, כדורעף",
                        "fullContent": "לינק לאתר",
                        "cat": "דרום אמריקה"
                },


                {
                        "id": 7,
                        "pic": "India.jpg",
                        "title": "הודו",
                        "Sports": "סופטבול, סווקש, קרטה",
                        "fullContent": "לינק לאתר",
                        "cat": "אסיה"
                },

                {
                        "id": 8,
                        "pic": "SouthAfrica.jpg",
                        "title": "דרום אפריקה",
                        "Sports": "כדור מים, רוגבי, קטרגל",
                        "fullContent": "לינק לאתר",
                        "cat": "אפריקה"
                },

                {
                        "id": 9,
                        "title": "אוסטרליה",
                        "pic": "Australia.jpg",
                        "Sports": "רכיבה על סוסים, שחייה, כדורסל",
                        "fullContent": "לינק לאתר",
                        "cat": "אוסטרליה"
                },

                {
                        "id": 10,
                        "pic": "Mexico.jpg",
                        "title": "מקסיקו",
                        "Sports": "שחמט, סייף, טניס שולחן",
                        "fullContent": "לינק לאתר",
                        "cat": "דרום אמריקה"
                }



        ]
}

document.addEventListener("DOMContentLoaded", function (event) {
        createItems();
        document.querySelectorAll(".filter-btn").forEach(button => {
                button.addEventListener("click", () => {
                        filterItems(button.dataset.cat)
                });
        });
        const myModal = new bootstrap.Modal(document.getElementById(`#exampleModal_${conutry.id}`));
        myModal.show();

});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollInd()};

function scrollInd() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



// פונקציה ליצירת הרשימה
function createItems() {
        const itemsContainer = document.getElementById('itemsContainer');
        itemsContainer.setAttribute("class", "row justify-content-center card-deck");
        itemsContainer.setAttribute("style", " padding-right:-18px !important;padding-left:-18px  !important;");
        itemsContainer.innerHTML = "";

        jsonData.conutries.forEach(conutry => {
                const myCard = document.createElement("div");
                myCard.setAttribute("id", `div_${conutry.id}`);
                myCard.setAttribute("class", "card text-right col-sm-3 m-3");
                myCard.addEventListener("mouseover", enlargeCard);
                myCard.addEventListener("mouseout", shrinkCard);

                const Itempic = document.createElement("img");
                Itempic.setAttribute("src", `img/${conutry.pic}`);
                Itempic.setAttribute("class", "card-img-top");
                myCard.appendChild(Itempic);
               
                const Itembody = document.createElement("div");
                Itembody.setAttribute("class", "card-body");
                myCard.appendChild(Itembody);

                const ItemTitle = document.createElement("h5");
                ItemTitle.setAttribute("class", "card-title");
                ItemTitle.innerHTML = (` ${conutry.title}`);
                Itembody.appendChild(ItemTitle);


                const ItemSports = document.createElement("p");
                ItemSports.setAttribute("class", "card-text");
                ItemSports.setAttribute("style", "margin-bottom:50px;");
                ItemSports.innerHTML = (` ${conutry.Sports}`);
                Itembody.appendChild(ItemSports);


                const Itembtn = document.createElement("button");
                Itembtn.setAttribute("type", "button");
                Itembtn.setAttribute("class", "btn btn-outline-primary");
                Itembtn.setAttribute("data-bs-toggle", "modal");
                Itembtn.setAttribute("data-bs-target", `#exampleModal_${conutry.id}`);
                Itembtn.setAttribute("style", "float:left;position: absolute; bottom: 10px; left: 10px;");
                Itembtn.innerHTML = ("לעוד מידע");
                Itembody.appendChild(Itembtn);
                itemsContainer.appendChild(myCard);
        });

}


function filterItems(category) {

       const itemsContainer = document.getElementById('itemsContainer');
        itemsContainer.setAttribute("class", "row justify-content-center card-deck");
        itemsContainer.setAttribute("style", " padding-right:-18px !important;padding-left:-18px  !important;");
        itemsContainer.innerHTML = "";
        
        jsonData.conutries.forEach(conutry => {

                if (conutry.cat == category) {
                       const myCard = document.createElement("div");
                myCard.setAttribute("id", `div_${conutry.id}`);
                myCard.setAttribute("class", "card text-right col-sm-3 m-3");
                myCard.addEventListener("mouseover", enlargeCard);
                myCard.addEventListener("mouseout", shrinkCard);

                const Itempic = document.createElement("img");
                Itempic.setAttribute("src", `img/${conutry.pic}`);
                Itempic.setAttribute("class", "card-img-top");
                myCard.appendChild(Itempic);
               
                const Itembody = document.createElement("div");
                Itembody.setAttribute("class", "card-body");
                myCard.appendChild(Itembody);

                const ItemTitle = document.createElement("h5");
                ItemTitle.setAttribute("class", "card-title");
                ItemTitle.innerHTML = (` ${conutry.title}`);
                Itembody.appendChild(ItemTitle);


                const ItemSports = document.createElement("p");
                ItemSports.setAttribute("class", "card-text");
                ItemSports.setAttribute("style", "margin-bottom:50px;");
                ItemSports.innerHTML = (` ${conutry.Sports}`);
                Itembody.appendChild(ItemSports);


                const Itembtn = document.createElement("button");
                Itembtn.setAttribute("type", "button");
                Itembtn.setAttribute("class", "btn btn-outline-primary");
                Itembtn.setAttribute("data-bs-toggle", "modal");
                Itembtn.setAttribute("data-bs-target", `#exampleModal_${conutry.id}`);
                Itembtn.setAttribute("style", "float:left;position: absolute; bottom: 10px; left: 10px;");
                Itembtn.innerHTML = ("לעוד מידע");
                Itembody.appendChild(Itembtn);
                itemsContainer.appendChild(myCard);
                }

        });



}


function toggleNav() {
        document.getElementById("main-nav").classList.toggle("hide-mobile");
}

function enlargeCard() {
        this.style.transform = "scale(1.1)"; // Adjust the scale factor as desired
        this.style.transition = "transform 0.3s ease"; // Add smooth transition
}

function shrinkCard() {
        this.style.transform = "scale(1)";
}


   
