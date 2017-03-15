(function () {
    var model = {
        cats: [
            {name: "Autumn", URL: "../autumn.jpg", clicks: 0},
            {name: "Night", URL: "../night.jpg", clicks: 0},
            {name: "Gray", URL: "../gray.jpg", clicks: 0},
            {name: "Tabby", URL: "../tabby.jpg", clicks: 0},
            {name: "Tiger", URL: "../tiger.jpg", clicks: 0}
        ],
        getRandomCat: function () {
            var random = Math.floor(Math.random() * model.cats.length);
            return model.cats[random];
        }
    },

        controller = {
            init: function () {
                view.init();
                view.renderCatPic(model.getRandomCat());
            },
            getCats: function () {
                return model.cats;
            },
            addClicks: function (cat) {
                cat.clicks ++;
            }
        },
        view = {

            init: function(){
                view.renderCatList();
            },
            renderCatList: function(){
                var catsNameList = document.querySelector(".cats-name-list");
                controller.getCats().forEach(function (cat) {
                    var catName = document.createElement("li");
                    catName.classList.add("cat-name");
                    catName.textContent = cat.name;
                    catName.addEventListener("click", function(){
                        return view.renderCatPic(cat);
                    }, false);
                    catsNameList.appendChild(catName);
                })
            },
            renderCatPic: function (cat) {
                var clickerContainer = document.querySelector(".clicker-container"),
                    photo = document.createElement("img"),
                    clickText = document.createElement("span");

                clickText.classList.add("click-text");
                view.showClickText(clickText, cat);

                photo.classList.add("cat");
                photo.setAttribute("alt", "picture of a " + cat.name + "cat");
                photo.setAttribute("src", cat.URL);
                photo.addEventListener("click", function () {
                    controller.addClicks(cat);
                    return view.showClickText(clickText, cat);
                }, false);

                clickerContainer.innerHTML = "<h2>" + cat.name + "</h2>";
                clickerContainer.appendChild(clickText);
                clickerContainer.appendChild(photo);
            },
            showClickText: function (text, cat) {
                text.textContent = cat.clicks? ("The photo was clicked: " + cat.clicks +
                    (cat.clicks === 1?" time" : " times")) : "Click the cat photo";
            }
        };

    controller.init();
})();
