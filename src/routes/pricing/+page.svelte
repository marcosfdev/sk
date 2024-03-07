<script>
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
    {
      name: 'Bronze',
      price: '$10',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
      ],
    },
    {
      name: 'Silver',
      price: '$20',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      name: 'Gold',
      price: '$30',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
      ],
    },
  ];
</script>

<section class="bg-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-4">Pricing Plans</h1>
    <p class="text-xl mb-12">Choose the plan that suits your needs.</p>
    <h4 class="text-4xl font-bold mb-4">  GET STARTED NOW</h4>
  </div>
</section>

<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each pricingTiers as tier}
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-3xl font-bold mb-4 uppercase">{tier.name}</h2>
          <p class="text-4xl font-bold mb-6">{tier.price}<span class="text-xl font-normal">/month</span></p>
          <ul class="mb-8">
            {#each tier.features as feature}
              <li class="mb-2">{feature}</li>
            {/each}
          </ul>
          <a href="/register" class="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 block">Purchase</a>
        </div>
      {/each}
    </div>
  </div>
</section>