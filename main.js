let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(250)
  .typeString('Desarrolladora web junior')
  .pauseFor(200)
  .deleteChars(1)
  .start();
  
