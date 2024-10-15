// Array of product data
const products = [
  {
      id: 1,
      name: 'Diwali Invitation',
      description: '• Festive design to invite loved ones.<br>• Customize with your details.',
      image: 'tool1.jpg',
      link: 'diwali.html'
  },
  {
      id: 2,
      name: 'Calculator',
      description: '• Basic calculations made easy.<br>• Perfect for daily use.',
      image: 'tool2.jpg',
      link: 'calculator.html'
  },
  {
      id: 3,
      name: 'Financial Calculator',
      description: '• Calculate loan payments, interest rates, and investment returns.<br>• User-friendly interface for quick financial analysis.',
      image: 'tool3.jpg',
      link: '#'
  },
  {
      id: 4,
      name: 'Scientific Calculator',
      description: '• Essential functions for trigonometry, logarithms, and statistics.<br>• User-friendly design with a large display for accurate calculations.',
      image: 'tool4.jpg',
      link: '#'
  },
];

// Function to dynamically create product cards
function displayProducts() {
  const productGrid = document.getElementById('productGrid');
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <a href="${product.link}" class="btn">Go to ${product.name}</a>
      `;
      productGrid.appendChild(productCard);
  });
}

// Call the displayProducts function
displayProducts();
