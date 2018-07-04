/*
 * action types
 */
​
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
​
/*
 * other constants
 */
​
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
​
export function addTodo(text) {
  return { type: ADD_TODO, text }
}
​
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}
​
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
​
//actions
{ type: ADD_TODO, text: 'Go to swimming pool' }
{ type: ADD_TODO, text: 'Build my first Redux app' }
{ type: TOGGLE_TODO, index: 1 }
{ type: SET_VISIBILITY_FILTER, filter: SHOW_ALL }
{ type: SET_VISIBILITY_FILTER, filter: SHOW_COMPLETED }

//bound action creator
const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))