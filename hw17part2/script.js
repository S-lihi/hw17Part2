const items = ["Молоко", "Орехи", "Кофе", "Сахар", "Хлеб", "Йогурт", "Сок", "Бананы", "Мандарины", "Шоколад", "Печенье"];

const wrapper = document.querySelector('.wrapper')

class Results {
  elemLink
  constructor(className) {
    this.createElement(className)
  }
  createElement(className) {
    this.elemLink = document.createElement('ul')
    this.elemLink.className = className
    items.forEach(element => this.elemLink.innerHTML += `<li>${element}</li>`);
    wrapper.appendChild(this.elemLink)
  }
  showResults(results) {
    this.elemLink.innerHTML = ''
    results.forEach(element => this.elemLink.innerHTML += `<li>${element}</li>`);
  }
}

class Search {
  elemLink
  resultsContainer
  constructor(id, placeholder, resultsContainer) {
    this.createElement(id, placeholder, resultsContainer)
  }
  createElement(id, placeholder, resultsContainer) {
    this.elemLink = document.createElement('input')
    this.elemLink.setAttribute('type', 'text')
    this.elemLink.setAttribute('placeholder', placeholder)
    this.elemLink.setAttribute('id', id)
    this.elemLink.addEventListener('input', this.onInput.bind(this))
    wrapper.prepend(this.elemLink);
    this.resultsContainer = resultsContainer
  }
  onInput() {
    const inputValue = this.elemLink.value
    if (inputValue) {
      const filteredResults = items.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
      this.resultsContainer.showResults(filteredResults)
    } else {
      this.resultsContainer.showResults(items)
    }
  }
}

const resultsElem = new Results('results')
const searchElem = new Search('search', 'Найти', resultsElem)