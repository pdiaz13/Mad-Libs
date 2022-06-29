const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');

const submitMadLibs = (event) => {
    event.preventDefault();
madLibsForm.classList.add('hide');


const form = new FormData(event.target);
const userSubmission = Object.fromEntries(form);


const story = 
` <h3>Your completed story:</h3> 
<p>Star Wars is a <span class="inserted-text">${userSubmission.adjective_1}</span> <span class="inserted-text">${userSubmission.noun_1}</span> of <span class="inserted-text">${userSubmission.adjective_2}</span> versus evil in a <span class="inserted-text">${userSubmission.noun_place}</span> far far away. A <span class="inserted-text">${userSubmission.adjective_3}</span> power called The <span class="inserted-text">${userSubmission.noun_2}</span> <span class="inserted-text">${userSubmission.verb_1}</span> people to do <span class="inserted-text">${userSubmission.adjective_4}</span> things, like <span class="inserted-text">${userSubmission.verb_2}</span> <span class="inserted-text">${userSubmission.plural_1}</span>. The Jedi <span class="inserted-text">${userSubmission.plural_job}</span> use the force for the <span class="inserted-text">${userSubmission.adjective_5}</span> side and the Sith <span class="inserted-text">${userSubmission.verb_3}</span> it for the <span class="inserted-text">${userSubmission.adjective_6}</span> side.</p>`;



storySection.innerHTML += story;
storySection.classList.remove('hide');

}

let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>`;
storySection.innerHTML += resetButton;

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
} 