'use strict';

const projects = [
  { title: 'Portfolio Site', desc: 'My personal website built with HTML and CSS.', tags: 'HTML, CSS' },
  { title: 'Tip Calculator', desc: 'A small tool that splits a bill between people.', tags: 'JavaScript' },
  { title: 'Password Checker', desc: 'Checks if a password is strong enough.', tags: 'Security' },
  { title: 'Notes App', desc: 'A simple app to save and delete notes.', tags: 'JavaScript' }
]
                                          
const searchEl = document.querySelector('#search')
const listEl = document.querySelector('#project-list')
const countEl = document.querySelector('#count')

function getFilteredList(list, search) {
  let searchLower = search.toLowerCase()
  searchLower = searchLower.trim()

  if (searchLower === '') {
    return list
  }

  const result = []

  for (let i = 0; i < list.length; i++) {
    const currentProject = list[i]
    const titleLower = currentProject.title.toLowerCase()

    if (titleLower.includes(searchLower)) {
      result.push(currentProject)
    }
  }

  return result
}

function showProjects(list) {
  if (list.length === 0) {
    listEl.innerHTML = ''
    countEl.textContent = 'No projects found.'
    return
  }

  let output = ''

  for (let i = 0; i < list.length; i++) {
    const currentProject = list[i]
    const title = currentProject.title
    const tags = currentProject.tags
    const desc = currentProject.desc

    output = output + '<li><strong>' + title + '</strong> (' + tags + ')<br>' + desc + '</li>'
  }

  listEl.innerHTML = output

  const totalCount = projects.length
  const showingCount = list.length

  countEl.textContent = 'Showing ' + showingCount + ' of ' + totalCount + ' projects.'
}

function handleSearch() {
  const searchValue = searchEl.value
  const filteredList = getFilteredList(projects, searchValue)
  showProjects(filteredList)
}

searchEl.addEventListener('input', handleSearch)

showProjects(projects)