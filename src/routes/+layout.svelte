<script>
  import '../global.css';

    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>