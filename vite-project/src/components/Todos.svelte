<script lang="ts">
	import type { ITodo } from '$root/types/todo'

  // state
  let todos: ITodo[] = [
    { id: '1e4a59703af84', text: 'Todo 1', completed: true },
    { id: '9e09bcd7b9349', text: 'Todo 2', completed: false },
    { id: '9e4273a51a37c', text: 'Todo 3', completed: false },
    { id: '53ae48bf605cc', text: 'Todo 4', completed: false },
  ]
</script>

<main>
  <h1 class="title">todos</h1>

  <section class="todos">
    <form>
      <input type="checkbox" id="toggle-all" class="toggle-all" />
      <label aria-label="Mark all as complete" for="toggle-all">
        Mark all as complete
      </label>

      <input
        id="new-todo"
        class="new-todo"
        placeholder="What needs to be done?"
        type="text"
        autofocus
      />
    </form>

    <ul class="todo-list">
      {#each todos as todo (todo.id)}
        <li class="todo">
          <div class="todo-item">
            <div>
              <input
                checked={todo.completed}
                id="todo"
                class="toggle"
                type="checkbox"
              />
              <label
								aria-label="Check todo"
								class="todo-check"
								for="todo"
							/>
            </div>
            <span class="todo-text">{todo.text}</span>
            <button aria-label="Remove todo" class="remove" />
          </div>

          <!-- <input class="edit" type="text" autofocus /> -->
        </li>
      {/each}
    </ul>

    <div class="actions">
      <span class="todo-count">0 left</span>
      <div class="filters">
        <button class="filter">All</button>
        <button class="filter">Active</button>
        <button class="filter">Completed</button>
      </div>    
      <button class="clear-completed">Clear completed</button>
    </div>
  </section>
</main>

<!-- ... -->
