const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    document.querySelector(".characters-container").innerHTML = ''
    charactersAPI.getFullList()
      .then(allCharacters => {
        allCharacters.data.forEach(element => {
          const { id, name, occupation, cartoon, weapon } = element;
          document.querySelector(".characters-container").innerHTML +=
            `<div class="character-info">
        <div class="name"><b>Id:</b> ${id}</div>
        <div class="name"><b>Name:</b> ${name}</div>
        <div class="occupation"><b>Ocuppation:</b> ${occupation}</div>
        <div class="cartoon"><b>Is a Cartoon?</b> ${cartoon}</div>
        <div class="weapon"><b>Character Weapon:</b> ${weapon}</div>
      </div>`
        })
      })
      .catch(error => {
        return "There aren't characters data"
      })
  },

document.querySelector(".characters-container").innerHTML = ""
  let value = document.querySelector("#character-id").value;
  console.log(value);
  charactersAPI.getOneRegister(value).then(elem => {
    document.querySelector(".characters-container").innerHTML +=
      `<div class="character-info">
      <div class="name">Name: ${elem.name}</div>
      <div class="occupation">Character Occupation ${elem.occupation}</div>
      <div class="cartoon">Is a Cartoon: ${elem.cartoon}</div>
      <div class="weapon">Character Weapon: ${elem.weapon}</div>
    </div>`;
  });
}
},

document.getElementById('delete-one').onclick = function () {

},

  document.getElementById('edit-character-form').onsubmit = function () {

  },

  document.getElementById('new-character-form').onsubmit = function () {

  }
})
