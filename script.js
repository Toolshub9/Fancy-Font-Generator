const fonts = {
    instagram: [
        "Pacifico", "Lobster", "Great Vibes", "Dancing Script", "Roboto", 
        "Montserrat", "Oswald", "Anton", "Caveat", "Patrick Hand", 
        "Satisfy", "Courgette", "Handlee", "Just Another Hand", "Kalam", 
        "Gloria Hallelujah", "Shadows Into Light", "Norican", "Sacramento", "Yellowtail",
        "Cookie", "Alex Brush", "Bad Script", "Beth Ellen", "Bilbo Swash Caps", 
        "Charm", "Dr Sugiyama", "Fondamento", "Italianno", "Kaushan Script", 
        "League Script", "Meddon", "Monsieur La Doulaise", "Nothing You Could Do", "Over the Rainbow", 
        "Parisienne", "Pinyon Script", "Pattaya", "Rochester", "Rouge Script", 
        "Vibur", "Zeyada", "Fredericka the Great", "Rock Salt", "Tangerine",
        "Barriecito", "Belgrano", "Fjord One", "IM Fell English", "Judson"
    ],
    twitter: [
        "Arial", "Lucida Console", "Verdana", "Palatino Linotype", "Tahoma", 
        "Merriweather", "Lora", "Zilla Slab", "Raleway", "Roboto Slab", 
        "Bitter", "Noto Serif", "Playfair Display", "Crimson Text", "EB Garamond",
        "Spectral", "Vollkorn", "Open Sans", "PT Sans", "Ubuntu", 
        "Quicksand", "Rubik", "Work Sans", "Karla", "Fira Sans", 
        "Cabin", "Oxygen", "Muli", "Jost", "Exo", 
        "Nanum Gothic", "Inconsolata", "Manrope", "Dosis", "Questrial", 
        "Arimo", "Varela Round", "Signika", "Chivo", "Mulish", 
        "Spartan", "Press Start 2P", "Candal", "Teko", "Assistant", 
        "Barlow", "Mukta", "Saira", "Fredoka One", "Dancing Script"
    ],
    youtube: [
        "Impact", "Courier New", "Lucida Grande", "Trebuchet MS", "Verdana", 
        "Oswald", "Bebas Neue", "Anton", "Roboto", "Poppins", 
        "Russo One", "Archivo Black", "Francois One", "Lemon", "Alfa Slab One",
        "Squada One", "Sansita", "Secular One", "Teko", "Kanit", 
        "Righteous", "Viga", "Gothic A1", "Lemonada", "Press Start 2P", 
        "Orbitron", "Audiowide", "Electrolize", "Vast Shadow", "Amiko", 
        "Changa", "Archivo", "Saira", "Spartan", "Raleway", 
        "Fredoka One", "Ultra", "Rubik", "Fugaz One", "Titillium Web", 
        "Viga", "Black Han Sans", "Bowlby One", "Michroma", "Luckiest Guy", 
        "Monoton", "Passion One", "Permanent Marker", "Big Shoulders", "Changa"
    ],
    fancy: [
        "Abril Fatface", "Abril Display", "Aladin", "Arizonia", "Bad Script", 
        "Bilbo", "Cedarville Cursive", "Dancing Script", "Euphoria Script", "Fredericka the Great", 
        "Fugaz One", "Gloria Hallelujah", "Great Vibes", "Handlee", "Indie Flower", 
        "Italianno", "Kaushan Script", "Lobster", "Pacifico", "Patrick Hand", 
        "Rock Salt", "Sacramento", "Satisfy", "Shadows Into Light", "Tangerine", 
        "Vibur", "Zeyada", "Belgrano", "Fjord One", "Judson", 
        "Norican", "Parisienne", "Pinyon Script", "Rouge Script", "Rochester", 
        "Sarpanch", "Vast Shadow", "Yellowtail", "Yesteryear", "Courgette", 
        "Fredoka One", "Charm", "Bowlby One", "Francois One", "Caveat", 
        "Monsieur La Doulaise", "Rock Salt", "Barriecito", "Just Another Hand", "IM Fell English"
    ]
};

document.getElementById('generate-btn').addEventListener('click', () => {
    const category = document.getElementById('font-category').value;
    const text = document.getElementById('text-input').value;
    const output = document.getElementById('font-output');
    
    if (text) {
        output.innerHTML = '';
        fonts[category].forEach(font => {
            const fontElement = document.createElement('p');
            fontElement.style.fontFamily = font;
            fontElement.textContent = text;
            output.appendChild(fontElement);
        });
    } else {
        output.innerHTML = '<p>Please enter some text to generate fonts.</p>';
    }
});
