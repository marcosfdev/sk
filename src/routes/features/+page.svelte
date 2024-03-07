<script>
  const features = [
    {
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/400x300',
      imagePosition: 'left',
    },
    {
      title: 'Feature 2',
      description: 'Praesent sagittis, quam vel bibendum malesuada, sapien elit tincidunt justo.',
      image: 'https://via.placeholder.com/400x300',
      imagePosition: 'right',
    },
    // Add more features as needed (3-6)
  ];
</script>

<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Features</h1>
    <p class="text-xl mb-12 text-center">Discover the amazing features of our product.</p>
    <div class="text-center">
      <a href="/pricing" class="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600">Purchase Now</a>
    </div>
  </div>
</section>

<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    {#each features as feature, index}
      <div class="flex flex-wrap mb-12 {index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
        <div class="w-full md:w-1/2 {feature.imagePosition === 'left' ? 'md:pr-8' : 'md:pl-8'}">
          <img src="{feature.image}" alt="{feature.title}" class="w-full h-auto rounded-lg shadow-md">
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 class="text-3xl font-bold mb-4">{feature.title}</h2>
          <p class="text-lg mb-6">{feature.description}</p>
          <a href="/pricing" class="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600">Get Started</a>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="bg-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-8">Ready to Get Started?</h2>
    <a href="/pricing" class="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600">Get Started Now</a>
  </div>
</section>