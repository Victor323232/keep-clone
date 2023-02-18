<script lang="ts">
    import type { FiltersType, ITodo } from '$root/types/todo'
    
  
    import AddTodo from './AddTodo.svelte'
    import Todo from './Todo.svelte'
    import TodosLeft from './TodosLeft.svelte'
    import FilterTodos from './FilterTodos.svelte'
    import ClearTodos from './ClearTodos.svelte'
  
    // state
    let todos: ITodo[] = JSON.parse(localStorage.getItem('todos')) ?? []

$: {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  
    let selectedFilter: FiltersType = 'Todos'
  
    // computed
    $: todosAmount = todos.length
    $: incompleteTodos = todos.filter((todo) => !todo.completed).length
    $: filteredTodos = filterTodos(todos, selectedFilter)
    $: completedTodos = todos.filter((todo) => todo.completed).length
  
    // methods
    function generateRandomId(): string {
      return Math.random().toString(16).slice(2)
    }
  
    function addTodo(todo: string): void {
      let newTodo: ITodo = {
        id: generateRandomId(),
        text: todo,
        completed: false,
      }
      todos = [...todos, newTodo]
    }
  
    function toggleCompleted(event: MouseEvent): void {
      let { checked } = event.target as HTMLInputElement
  
      todos = todos.map((todo) => ({
        ...todo,
        completed: checked,
      }))
    }
  
    function completeTodo(id: string): void {
      todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    }
  
    function removeTodo(id: string): void {
      todos = todos.filter((todo) => todo.id !== id)
    }
  
    function editTodo(id: string, newTodo: string): void {
      let currentTodo = todos.findIndex((todo) => todo.id === id)
      todos[currentTodo].text = newTodo
    }
  
    function setFilter(newFilter: FiltersType): void {
      selectedFilter = newFilter
    }
  
    function filterTodos(todos: ITodo[], filter: FiltersType): ITodo[] {
      switch (filter) {
        case 'Todos':
          return todos
        case 'Pendentes':
          return todos.filter((todo) => !todo.completed)
        case 'Completos':
          return todos.filter((todo) => todo.completed)
      }
    }
  
    function clearCompleted(): void {
      todos = todos.filter((todo) => todo.completed !== true)
    }
  </script>
  
  <main>
    <h1 class="title">Keep Clone</h1>
  
    <section class="todos">
      <AddTodo {addTodo} {toggleCompleted} {todosAmount} />
  
      {#if todosAmount}
        <ul class="todo-list">
          {#each filteredTodos as todo (todo.id)}
            <Todo {todo} {completeTodo} {removeTodo} {editTodo} />
          {/each}
        </ul>
  
        <div class="actions">
          <TodosLeft {incompleteTodos} />
          <FilterTodos {selectedFilter} {setFilter} />
          <ClearTodos {clearCompleted} {completedTodos} />
        </div>
      {/if}
    </section>
  </main>
  
  <!-- ... -->
