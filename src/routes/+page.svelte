<script>
    let email = '';
  </script>
  
  <section class="bg-cover bg-center h-screen" style="background-image: url(https://example.com/image.jpg)">
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold mb-2 text-white">Welcome to Our Website</h1>
      <p class="text-xl mb-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </section>
  
  <section class="bg-white py-8">
    <div class="container mx-auto px-6">
      <h2 class="text-2xl font-bold mb-2 text-gray-800">Subscribe to Our Newsletter</h2>
      <form class="flex items-center">
        <input type="email" bind:value={email} placeholder="Your email" class="bg-transparent border-b-2 border-blue-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500">
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Subscribe</button>
      </form>
    </div>
  </section>