console.log('AJAX - Pobierz dane po klinięciu przycisku');

let btnGetData = document.getElementById('get-data'); //Tworzenie zmiennej i pobranie przycisku
console.log(btnGetData);

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php') // Url do API - strony skąd mają zostać pobrane dane. 
        .then(res => res.json()) // Zamienie tekstu na obiekt JS
        .then(data => { // Otrzymane dane

            // Tworzenie nowych elementów (<p>) na stronie - dopięcie danych
            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            // Przypisanie danych
            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            // Dołączenie na końcu strony, by dane wyświetlały się na stronie
            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

            // console.log(data);
        })
        .catch(error => {
            console.error(error);
        })

    // console.log('getData()');
}

btnGetData.addEventListener('click', getData); // Nasłuch zdarzenia 'click'