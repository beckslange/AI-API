function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "tfo33b89af42954f2d60430a801e1b3c";
let context = "be polite and provide a very short answer";
let prompt = "who was the first female president was?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
