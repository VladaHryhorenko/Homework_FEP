
document.body.style.fontFamily = 'Roboto';
document.body.style.boxSizing = 'border-box';
document.body.style.margin = '0';
let container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';
container.style.width = '100vw';
container.style.background = 'url(../img/bg-main.jpg) no-repeat';
container.style.backgroundSize = 'cover';
document.body.prepend(container);
let button = document.createElement('button');
button.innerText = 'Get info';
button.style.padding = '20px 30px';
button.style.border = 'none';
button.style.borderRadius = "50px";
button.style.fontSize = '40px';
button.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
})

container.appendChild(button);

function createContent(data) {
    let contentSect = document.createElement('div');
    container.parentNode.replaceChild(contentSect, container);
    contentSect.style.background = 'url(../img/bg.jpg) repeat'; // специально поставила повторяющийся фон
    contentSect.style.backgroundSize = '100%';
    contentSect.style.padding = '50px 0px'
    document.body.prepend(contentSect);
    let title = document.createElement('h1');
    title.innerText = 'Planets';
    title.style.fontSize = '64px';
    title.style.textAlign = 'center';
    title.style.color = '#fff';
    title.style.marginTop = '0';
    contentSect.appendChild(title);
    data = JSON.parse(data);
    console.log(data);
    for (const key in data) {
        //console.log(key);
        if (key === 'planets') {
            for (i in data[key]) {
                let item = document.createElement('div');
                item.style.background = 'rgba(255, 255, 255, 0.4)';
                item.style.backgroundSize = 'cover'
                item.style.borderRadius = '30px';
                item.style.margin = '0px 50px 50px';
                item.style.padding = '30px';
                contentSect.appendChild(item);
                for (const subkey in data[key][i]) {
                    //console.log(subkey);
                    if (subkey === 'title') {
                        let planetTitle = document.createElement('h2');
                        planetTitle.innerHTML = data[key][i][subkey];
                        planetTitle.style.fontSize = '32px';
                        item.appendChild(planetTitle);
                    }
                    if (subkey === 'info') {
                        let planetInfo = document.createElement('p');
                        planetInfo.innerHTML = data[key][i][subkey];
                        planetInfo.style.fontSize = '24px';
                        item.appendChild(planetInfo);
                    }
                    if (subkey === 'url') {
                        let planetUrl = document.createElement('img');
                        planetUrl.style.display = 'block';
                        planetUrl.setAttribute('src', data[key][i][subkey])
                        planetUrl.style.height = '300px';
                        //planetUrl.style.width = '500px';
                        //planetUrl.innerHTML = data[key][i][subkey];
                        item.appendChild(planetUrl);
                    }
                }
            }


        }
    }
    //contentSect.appendChild(content); 
}

function httpGet(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.send();
    });
}

function buttonPromice() {
    httpGet("https://trevadim.github.io/vue/data/data.json")
        .then(
            response => createContent(response),
            error => alert(`Rejected: ${error}`)
        );
}

button.addEventListener('click', buttonPromice, false);

