<script lang="ts">
  import  Router  from "svelte-spa-router";
    import Login from "./pages/auth/Login.svelte";
    import Signup from "./pages/auth/Signup.svelte";
    import Navbar from "./pages/Navbar.svelte";
    import CreatePost from "./pages/post/CreatePost.svelte";
    import Home from "./pages/post/Home.svelte";
    import UpdatePost from "./pages/post/UpdatePost.svelte";
  let routes ={
    "/":Home,
    "/login":Login,
    "/signup":Signup,
    "/create-post":CreatePost,
    "/update-post":UpdatePost,
  }
</script>

<main>
  <Navbar></Navbar>
<Router {routes}/>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>