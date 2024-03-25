
const superheroes = data;

const main = document.querySelector("main");

for (let i = 0; i < superheroes.length; i++) {
   
  
  const superhero = superheroes[i];
  let html = `<section class="superhero">
                <h2 class="superhero-name">${superhero.name}</h2>
                <ul class="superhero-info">
            `;
  
    if(superhero.alias){
      html += `<li>${superhero.alias}</li>`;
    }
    if(superhero.equipment){
     html += `<li>${superhero.equipment}</li>`;
    }
    if(superhero.hobby){
      html += `<li>${superhero.hobby}</li>`;
    }
    if(superhero.power){
      html += `<li>${superhero.power}</li>`;
    }
    if(superhero.sidekick){
      html += `<li>${superhero.sidekick}</li>`;
    }
    if(superhero.weakness){
      html += `<li>${superhero.weakness}</li>`;
    }
  

  html += `</ul></section>`;
  
  main.innerHTML += html;
}
