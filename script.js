// TODO: add code here
window.addEventListener("load", function (event) {
    const URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    let container = document.getElementById("container");
    fetch(URL).then(function (response) {
        response.json().then(function (astronauts) {
            let astronautCount = `${astronauts.length}`;
            astronauts.sort((elementA, elementB) => elementA.hoursInSpace - elementB.hoursInSpace);
            for (let astronaut of astronauts) {
                container.innerHTML +=
                    `<div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                    </div >
                    <img class="avatar" src="${astronaut.picture}">
                </div>`

            }
            container.innerHTML += `<H2>Total Astronauts Count: ${astronautCount}</H2>`
        });
    });
});