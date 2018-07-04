//states
{
    todos: [{
      text: 'Eat food',
      completed: true
    }, {
      text: 'Exercise',
      completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

//reducers
function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
      return action.filter
    } else {
      return state
    }
}
  ​
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }])
        case 'TOGGLE_TODO':
            return state.map(
            (todo, index) =>
                action.index === index
                ? { text: todo.text, completed: !todo.completed }
                : todo
            )
        case 'COMPLETE_TODO':
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: true
                    })
                }
                return todo
            })
      default:
        return state
    }
}

function todoApp(state = {}, action) {
    return {
      todos: todos(state.todos, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}

import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)