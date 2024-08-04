import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const form = document.querySelector("#posterForm");
const movieTitle = document.querySelector("#movie-title");
const artStyles = document.querySelector("#art-styles");
const posterOutput = document.querySelector("#poster-output");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  posterOutput.innerHTML = `Generating poster for "${movieTitle.value.trim()}" in the style of ${artStyles.value}...`;
  const prompt = `An imaginative poster inspired by the movie "${movieTitle.value.trim()}",
  rendered in the ${artStyles.value} art style.`;
  generatePoster(prompt);
  form.reset();
});

async function generatePoster(prompt) {
  try {
    const image = await openai.images.generate({
       model: "dall-e-3",
       prompt
    });
  
    const imgURL = image.data[0].url;
    posterOutput.innerHTML = `<img src="${imgURL}" alt="Imaginative movie poster inspired by art.">`;   
  } catch (error) {
      console.error(error);
      posterOutput.innerHTML = "Sorry, an error occurred while generating the poster. ${error.message}";
  }
}