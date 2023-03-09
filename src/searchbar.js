const restaurants = ['Karamalmi ', 'Myyrmäki ', 'Myllypuro ', 'Arabia '];
const searchInput = document.querySelector('.search-input');
const suggestionList = document.querySelector('.search-suggestions');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const suggestions = restaurants.filter(restaurant => restaurant.toLowerCase().includes(query)).slice(0, 3);
  suggestionList.innerHTML = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');

  if (suggestions.length > 0) {
    suggestionList.style.display = 'block';
  } else {
    suggestionList.style.display = 'none';
  }
});

suggestionList.addEventListener('click', event => {
  const suggestion = event.target.closest('li');
  if (suggestion) {
    searchInput.value = suggestion.textContent;
    suggestionList.style.display = 'none';
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.search-container')) {
    suggestionList.style.display = 'none';
  }
});
