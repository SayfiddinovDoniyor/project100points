const generateRandomName = () => {
    const syllables = [
      "ab", "ul", "lo", "di", "yor", "bek", "an", "or", "no", "za", "sha", "ra",
      "mi", "la", "zo", "za", "ka", "na", "ur", "to", "mu", "li", "ro", "ta", "ga"
    ];
  
    const length = Math.floor(Math.random() * 3) + 2; // 2–4 syllables
    let name = "";
  
    for (let i = 0; i < length; i++) {
      name += syllables[Math.floor(Math.random() * syllables.length)];
    }
  
    // Capitalize first letter
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  