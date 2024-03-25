
const superheroes = data;

const main = document.querySelector("main");

for (let i = 0; i < superheroes.length; i++) {
   
  
  const superhero = superheroes[i];
  let html = `<section class="superhero">
                <h2 class="superhero-name">${superhero.name}</h2>
                <ul class="superhero-info">
            `;
  
    if(superhero.alias){
      html += `<li class="superhero-alias">${superhero.alias}</li>`;
    }
    if(superhero.equipment){
     html += `<li class="superhero-equipment">${superhero.equipment}</li>`;
    }
    if(superhero.hobby){
      html += `<li class="superhero-hobby">${superhero.hobby}</li>`;
    }
    if(superhero.power){
      html += `<li class="superhero-power">${superhero.power}</li>`;
    }
    if(superhero.sidekick){
      html += `<li class="superhero-sidekick">${superhero.sidekick}</li>`;
    }
    if(superhero.weakness){
      html += `<li class="superhero-weakness">${superhero.weakness}</li>`;
    }
  

  html += `</ul></section>`;
  
  main.innerHTML += html;
}
