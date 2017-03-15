(function () {
    var clickerContainer = document.querySelector(".clicker-container"),
        catsNameList = document.querySelector(".cats-name-list"),
        catsArray = [
            {name: "Autumn", URL: "../autumn.jpg", clicks: 0},
            {name: "Night", URL: "../night.jpg", clicks: 0},
            {name: "Gray", URL: "../gray.jpg", clicks: 0},
            {name: "Tabby", URL: "../tabby.jpg", clicks: 0},
            {name: "Tiger", URL: "../tiger.jpg", clicks: 0}
        ];

    function listCatsNames(cat) {
        var catLi = document.createElement("li");
        catLi.textContent = cat.name;
        catsNameList.appendChild(catLi);

        catLi.addEventListener("click", function () {
            clickerContainer.innerHTML = "";
            return showCatClicker(cat);
        }, false)
    }

    function addClicks(anyText, anyClicks) {
        anyText.textContent = "The kitty was clicked " + anyClicks + ((anyClicks === 1)? "time" : " times");
    }

    function showCatClicker(cat) {
        var text = document.createElement("p"),
            catContainer = document.createElement("div");

        text.textContent = (cat.clicks)? ("The kitty was clicked " + cat.clicks + ((cat.clicks === 1)? "time" : " times")) : "Click the cat above";
        catContainer.innerHTML = "<h2>" + cat.name + "</h2><img alt='Photo of a cat' title='click me!' class='cat' src=" + cat.URL + ">";
        catContainer.appendChild(text);
        catContainer.addEventListener("click", function(event){
            if (event.target.tagName === "IMG") {
                cat.clicks++;
                addClicks(text, cat.clicks);
            }
        }, false);

        clickerContainer.appendChild(catContainer);
    }

    catsArray.forEach(listCatsNames);

})();
