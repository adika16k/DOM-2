document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("paragraph");
  let text = paragraph.textContent;
  const words = text.split(/\s+/);

  for (const word of words) {
    if (word.length > 8) {
      text = text.replace(new RegExp(word, "g"), `<span class="highlighted">${word}</span>`);
    }
  }
  paragraph.innerHTML = text;

  // Task 2: Add a link back to the source of the text.
  const sourceLink = document.createElement("a");
  sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
  sourceLink.textContent = "Source";
  paragraph.insertAdjacentElement("afterend", sourceLink);

  // Task 3: Split each sentence onto a separate line.
  text = text.replace(/\. /g, ".<br>");
  paragraph.innerHTML = text;

  // Task 4: Count the number of words and display the count.
  const wordCount = words.length;
  const wordCountDisplay = document.createElement("p");
  wordCountDisplay.textContent = `Word Count: ${wordCount}`;
  paragraph.insertAdjacentElement("beforebegin", wordCountDisplay);

  // Task 5: Replace question marks and exclamation marks.
  text = text.replace(/\?/g, '&#129300').replace(/\!/g, '&#128562');
  paragraph.innerHTML = text;
});
