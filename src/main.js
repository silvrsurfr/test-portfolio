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

const interop = [
  "./a2/models.png",
  "./a2/pav.png",
  "./a2/torus.png",
  "./a2/sandile.png",
 ,
];



document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
      <p id="a1title">a1: C A D A V R E _ E X Q U I S</p>
    </section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./webpics/fullbleed.png" target="_blank">
          <img src="./webpics/fullbleed.png" id="a1pic" alt="fullbleed">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./webpics/odyssey.png" target="_blank">
              <img src="./webpics/odyssey.png" alt="odyssey" />
            </a>
            <a href="./webpics/existence.png" target="_blank">
              <img src="./webpics/existence.png" alt="existence" />
            </a>
            <a href="./webpics/guidance.png" target="_blank">
              <img src="./webpics/guidance.png" alt="guidance" />
            </a>
            <a href="./webpics/mementomori.png" target="_blank">
              <img src="./webpics/mementomori.png" alt="mementomori" />
            </a>
            <a href="./webpics/exquisitecorpse.png" target="_blank">
              <img src="./webpics/exquisitecorpse.png" alt="exquisitecorpse" />
            </a>
            <a href="./webpics/ref.png" target="_blank">
              <img src="./webpics/ref.png" alt="references" />
            </a>
          </div>
          <h4 id="descheader">EUDAIMONIA: An Odyssey to Self-Mastery</h4>
          <h4 id="a1desc">Stoicism, as a philosophy, teaches us the profound art of thriving in a world we cannot control, finding freedom and fulfillment not in external circumstances but within ourselves. Through the process of understanding Stoic principles, such as the dichotomy of control, the cultivation of resilience, and the pursuit of virtue, I have come to appreciate its relevance in modern life, especially in an era riddled with distractions, uncertainty, and an unrelenting pace. The title Eudaimonia: A Surreal Journey to Self-Mastery encapsulates the transformative journey of aligning with one’s true nature, where self-improvement stems from rationality, emotional mastery, and harmonious living. Through this exploration, I have learned to embrace adversity as an opportunity for growth, practice daily self-reflection as a path to clarity, and see life’s transient nature as a reminder to value the present moment. Stoicism’s call to focus only on what is within our control—our thoughts, actions, and character—offers not only solace but also empowerment in a world dominated by the uncontrollable. It inspires us to face life with calm determination, to anchor ourselves in virtues like justice, courage, and wisdom, and to realize that flourishing is not about acquiring more, but about being more. In creating this surreal journey, I discovered that Stoicism is not a relic of the past but a timeless guide for navigating the complexities of today. Its principles offer tools for achieving mental clarity, emotional balance, and purposeful living. In embracing the lessons of Stoicism, we unlock the potential to live fully and authentically, crafting a life where the pursuit of eudaimonia—true flourishing—becomes both our destination and our journey.</h4>
        </div>
      </div>

  <main id="container">
    <section id="heading">
    <p id="a2title">a2: I N T E R O P ( E R A B I L I T Y )</p>
    </section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./a2/models.png" target="_blank">
          <img src="./a2/models.png" id="a2pic" alt="fullbleed">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
           <a href="./a2/pav.png" target="_blank">
              <img src="./a2/pav.png" alt="pavilion" />
            </a>
            <a href="./a2/torus.png" target="_blank">
              <img src="./a2/torus.png" alt="torus" />
            </a>
            <a href="./a2/sandile.png" target="_blank">
              <img src="./a2/sandile.png" alt="0551" />
            </a>
          </div>
          <h4 id="descheader">CROSS-PLATFORM: Understanding Interoperability</h4>
          <h4 id="a2desc">Reflecting on the different conversions, it’s clear that each modeling type has strengths and limitations. Mesh, Sub-D, and NURBS serve different purposes, and switching between them often introduces challenges such as topology changes, smoothing artifacts, or loss of detail. What I learned is that triangulation is crucial when exporting models for real-time engines but can create unwanted pinching in smooth surfaces, while quadrangulation is better suited for Sub-D workflows, maintaining clean edge flow. Testing file formats like FBX, OBJ, STL, and PLY also plays a role in how models behave across different software. FBX retains animation and hierarchy, making it ideal for game engines, while OBJ is widely supported but lacks advanced data like smoothing groups. STL is used for 3D printing but only supports geometry, and PLY can store color and scan data. Each workflow requires careful testing, ensuring that conversions preserve structure, prevent shading errors, and maintain model integrity across different applications, highlighting the importance of interoperability.</h4>
      </div>
      </div>

<section id="projects">
      <div id="project-row">
      <div class="three-model">
      <div id="model1"></div>
      <div class="three-model">
      <div id="model2"></div>
      <div class="three-model">
      <div id="model3">
      
    
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
createThreeScene("#model1","/3DModels/a2/pav.obj");
createThreeScene("#model2", "/3DModels/a2/torus.obj");
createThreeScene("#model3", "/3DModels/a2/sandile.obj");
