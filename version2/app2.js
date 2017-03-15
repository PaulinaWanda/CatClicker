(function () {

    var model = {
        catsArray: [
            {name: "Autumn", URL: "../autumn.jpg", clicks: 0},
            {name: "Night", URL: "../night.jpg", clicks: 0},
            {name: "Gray", URL: "../gray.jpg", clicks: 0},
            {name: "Tabby", URL: "../tabby.jpg", clicks: 0},
            {name: "Tiger", URL: "../tiger.jpg", clicks: 0}
            ]
    };

    var controller = {
        init: function() {
            model.catsArray.forEach(view.listCatsNames)
        },

        appendCatName: function (anyLi, anyCat) {
            anyLi.textContent = anyCat.name;
        },

        setTextContent: function (anyText, anyCat) {
            anyText.textContent = (anyCat.clicks)? ("The kitty was clicked " + anyCat.clicks + ((anyCat.clicks=== 1)? "time" :
                    " times")) : "Click the cat above";
        },

        setCatContainerHTML: function (anyContainer, anyCat) {
            anyContainer.innerHTML = "<h2>" + anyCat.name + "</h2><img alt='Photo of a cat' title='click me!' class='cat' src="
                + anyCat.URL + ">";
        },

        addClicks: function (anyCat) {
            anyCat.clicks++;
        }

};

    var view = {
        clickerContainer: document.querySelector(".clicker-container"),
        catsNameList: document.querySelector(".cats-name-list"),

        listCatsNames: function (cat) {
            var catLi = document.createElement("li");

            controller.appendCatName(catLi, cat);
            view.catsNameList.appendChild(catLi);
            catLi.addEventListener("click", function () {
                view.clickerContainer.innerHTML = "";
                return view.showCatClicker(cat);
            }, false)
        },

        showCatClicker: function(cat) {
            var text = document.createElement("p"),
                catContainer = document.createElement("div");

            controller.setTextContent(text, cat);
            controller.setCatContainerHTML(catContainer, cat);
            catContainer.appendChild(text);
            catContainer.addEventListener("click", function(event){
                if (event.target.tagName === "IMG") {
                    controller.addClicks(cat);
                    controller.setTextContent(text, cat);
                }
            }, false);

            view.clickerContainer.appendChild(catContainer);
        }
    };

    controller.init();

})();

