  
  <script>
    let email = '';
  
    function handleSubmit() {
      // TODO: Handle form submission
    }
  </script>
  
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full md:w-1/3">
          <h2 class="text-2xl font-bold mb-4">Stay Connected</h2>
        </div>
        <div class="w-full md:w-1/3">
          <form class="flex items-center" on:submit|preventDefault={handleSubmit}>
            <input
              type="email"
              class="w-full px-4 py-2 rounded-l-md bg-transparent border border-gray-600 focus:outline-none focus:border-white"
              placeholder="Enter your email"
              bind:value={email}
            />
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/3 mt-8 md:mt-0">
          <ul class="flex justify-end space-x-4">
            <li><a href="/" class="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/features" class="text-gray-300 hover:text-white">Features</a></li>
            <li><a href="/pricing" class="text-gray-300 hover:text-white">Pricing</a></li>
            <li><a href="/contact" class="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-12">
        <ul class="flex justify-center space-x-6">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://meta.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
              <i class="fab fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>



    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-gray-700 font-bold mb-2">
            Designed with ❤️ by SequoiaNova &copy; 2024
          </p>
        </div>
      </div>
    </div>
  </footer>