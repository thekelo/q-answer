// Sample data (replace with real database later)
let questions = JSON.parse(localStorage.getItem('questions')) || [
  {
    id: 1,
    title: "How to center a div?",
    body: "I'm trying to center a div both horizontally and vertically...",
    tags: ["css", "html"],
    votes: 10,
    answers: []
  }
];

// DOM Elements
const questionsList = document.getElementById('questionsList');

// Display questions
function renderQuestions() {
  questionsList.innerHTML = questions.map(question => `
    <div class="question-card">
      <h3 class="question-title">
        <a href="question.html?id=${question.id}">${question.title}</a>
      </h3>
      <p class="question-body">${question.body.substring(0, 100)}...</p>
      <div class="tags">
        ${question.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="question-meta">
        <span>${question.votes} votes</span>
        <span>${question.answers.length} answers</span>
      </div>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderQuestions();
});

// Save to localStorage
function saveQuestions() {
  localStorage.setItem('questions', JSON.stringify(questions));
}
