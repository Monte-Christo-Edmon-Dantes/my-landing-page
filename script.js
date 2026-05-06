const images = [
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629198735660-e39ea93f5f4d?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1974&auto=format&fit=crop"
];

const hero = document.querySelector(".hero");

const img = images[Math.floor(Math.random() * images.length)];
hero.style.backgroundImage = `url(${img})`;
