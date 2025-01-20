import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const corpse = [
  "./webpics/odyssey.png",
  "./webpics/existence.png",
  "./webpics/guidance.png",
  "./webpics/mementomori.png",
  "./webpics/exquisitecorpse.png",
  "./webpics/ref.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
      <p id="expdiff">a1: E U D A I M O N I A</p>
    </section>

    <section id="projects">
      <div id="project-row">
        <div class="three-model"
          <a href="./webpics/fullbleed.png" target="_blank"><img src="./webpics/fullbleed.png" alt=fullbleed" id="model1" /></a>
        </div>
        <div id="images-description">
          <div id="images">
            ${corpse
              .map(
                (corpse, index) => `<img src="${corpse}" alt="corpse${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description1">An Odyssey to Self-Mastery</h4>
          <h4 id="description2">Stoicism, as a philosophy, teaches us the profound art of thriving in a world we cannot control, finding freedom and fulfillment not in external circumstances but within ourselves. Through the process of understanding Stoic principles, such as the dichotomy of control, the cultivation of resilience, and the pursuit of virtue, I have come to appreciate its relevance in modern life, especially in an era riddled with distractions, uncertainty, and an unrelenting pace. The title Eudaimonia: A Surreal Journey to Self-Mastery encapsulates the transformative journey of aligning with one’s true nature, where self-improvement stems from rationality, emotional mastery, and harmonious living. Through this exploration, I have learned to embrace adversity as an opportunity for growth, practice daily self-reflection as a path to clarity, and see life’s transient nature as a reminder to value the present moment. Stoicism’s call to focus only on what is within our control—our thoughts, actions, and character—offers not only solace but also empowerment in a world dominated by the uncontrollable. It inspires us to face life with calm determination, to anchor ourselves in virtues like justice, courage, and wisdom, and to realize that flourishing is not about acquiring more, but about being more. In creating this surreal journey, I discovered that Stoicism is not a relic of the past but a timeless guide for navigating the complexities of today. Its principles offer tools for achieving mental clarity, emotional balance, and purposeful living. In embracing the lessons of Stoicism, we unlock the potential to live fully and authentically, crafting a life where the pursuit of eudaimonia—true flourishing—becomes both our destination and our journey.</h4>
        </div>
      </div>
      ${/* m2 greyed out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */""}
      ${/* m3 greyed out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li style="display:none">LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github
}</a></li>
    </ul>
  </main>
`;

//Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
