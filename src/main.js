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
      <p id="a-title">a1: C A D A V R E _ E X Q U I S</p>
    </section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./a1/fullbleed.png" target="_blank">
          <img src="./a1/fullbleed.png" id="a1pic" alt="fullbleed">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./a1/odyssey.png" target="_blank">
              <img src="./a1/odyssey.png" alt="odyssey" />
            </a>
            <a href="./a1/existence.png" target="_blank">
              <img src="./a1/existence.png" alt="existence" />
            </a>
            <a href="./a1/guidance.png" target="_blank">
              <img src="./a1/guidance.png" alt="guidance" />
            </a>
            <a href="./a1/mementomori.png" target="_blank">
              <img src="./a1/mementomori.png" alt="mementomori" />
            </a>
            <a href="./a1/exquisitecorpse.png" target="_blank">
              <img src="./a1/exquisitecorpse.png" alt="exquisitecorpse" />
            </a>
            <a href="./a1/ref.png" target="_blank">
              <img src="./a1/ref.png" alt="references" />
            </a>
          </div>
          <h4 id="descheader">EUDAIMONIA: An Odyssey to Self-Mastery</h4>
          <h4 id="a1desc">Stoicism, as a philosophy, teaches us the profound art of thriving in a world we cannot control, finding freedom and fulfillment not in external circumstances but within ourselves. Through the process of understanding Stoic principles, such as the dichotomy of control, the cultivation of resilience, and the pursuit of virtue, I have come to appreciate its relevance in modern life, especially in an era riddled with distractions, uncertainty, and an unrelenting pace. The title Eudaimonia: A Surreal Journey to Self-Mastery encapsulates the transformative journey of aligning with one’s true nature, where self-improvement stems from rationality, emotional mastery, and harmonious living. Through this exploration, I have learned to embrace adversity as an opportunity for growth, practice daily self-reflection as a path to clarity, and see life’s transient nature as a reminder to value the present moment. Stoicism’s call to focus only on what is within our control—our thoughts, actions, and character—offers not only solace but also empowerment in a world dominated by the uncontrollable. It inspires us to face life with calm determination, to anchor ourselves in virtues like justice, courage, and wisdom, and to realize that flourishing is not about acquiring more, but about being more. In creating this surreal journey, I discovered that Stoicism is not a relic of the past but a timeless guide for navigating the complexities of today. Its principles offer tools for achieving mental clarity, emotional balance, and purposeful living. In embracing the lessons of Stoicism, we unlock the potential to live fully and authentically, crafting a life where the pursuit of eudaimonia—true flourishing—becomes both our destination and our journey.</h4>
        </div>
      </div>

  <main id="container">
    <section id="heading">
    <p id="a-title">a2: I N T E R O P ( E R A B I L I T Y )</p>
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
              <img src="./a2/pav.png" id="imgborder" alt="pavilion" />
            </a>
            <a href="./a2/torus.png" target="_blank">
              <img src="./a2/torus.png" id="imgborder" alt="torus" />
            </a>
            <a href="./a2/sandile.png" target="_blank">
              <img src="./a2/sandile.png" id="imgborder" alt="0551" />
            </a>
          </div>
          <h4 id="descheader">CROSS-PLATFORM: Understanding Interoperability</h4>
          <h4 id="a2desc">Reflecting on the different conversions, it’s clear that each modeling type has strengths and limitations. Mesh, Sub-D, and NURBS serve different purposes, and switching between them often introduces challenges such as topology changes, smoothing artifacts, or loss of detail. What I learned is that triangulation is crucial when exporting models for real-time engines but can create unwanted pinching in smooth surfaces, while quadrangulation is better suited for Sub-D workflows, maintaining clean edge flow. Testing file formats like FBX, OBJ, STL, and PLY also plays a role in how models behave across different software. FBX retains animation and hierarchy, making it ideal for game engines, while OBJ is widely supported but lacks advanced data like smoothing groups. STL is used for 3D printing but only supports geometry, and PLY can store color and scan data. Each workflow requires careful testing, ensuring that conversions preserve structure, prevent shading errors, and maintain model integrity across different applications, highlighting the importance of interoperability.</h4>
      </div>
      </div>

    <main id="container">
    <section id="heading">
    <p id="a-title">a3: O B J E C T _ D E S I G N</p>
    </section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./a3/eyeofra.png" target="_blank">
          <img src="./a3/eyeofra.png" id="a3pic" alt="fullbleed">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
           <a href="./a3/models.png" target="_blank">
              <img src="./a3/models.png" id="imgborder" alt="objects" />
            </a>
            <a href="./a3/diagram.png" target="_blank">
              <img src="./a3/diagram.png" id="imgborder" alt="schematic" />
            </a>
            <a href="./a3/pseudocode.png" target="_blank">
              <img src="./a3/pseudocode.png" alt="flowchart" />
            </a>
          </div>
          <h4 id="descheader">EYE OF RA: Fictional Object Fabrication</h4>
          <h4 id="a3desc">The  Eye of Ra is a personal doomsday clock, a mystical artifact that reveals the passage of time unique to its holder. At its core, a red circular gauge gradually fills in a clockwise direction, marking the progression of an individual’s lifespan. When the red ring reaches full completion, the holder’s time will come to an end. However, the speed at which it fills varies for each person, dictated by unseen cosmic forces, making it an enigmatic and deeply personal symbol of mortality. The name eye of ra draws inspiration from ancient egyptian mythology, where the eye of ra was both a protector and an agent of destruction—representing wisdom, divine vision, and the inevitable cycle of life and death. Like its namesake, this artifact does not merely signify an ending but serves as a reminder of one’s finite existence, urging its bearer to live with awareness and purpose. The sun-like form reinforces the idea of time’s relentless motion, akin to the sun rising and setting, a cycle that governs all life. By holding the Eye of Ra, one does not merely witness their own mortality but is given the gift of foresight—to cherish, to act, and to embrace the present moment.</h4>
      </div>
      </div>

    <main id="container">
    <section id="heading">
    <p id="a-title">a4: P L A C E M A K I N G</p>
    </section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./a4/paracosm.png" target="_blank">
          <img src="./a4/paracosm.png" id="a4pic" alt="fullbleed">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
           <a href="./a4/renders.png" target="_blank">
              <img src="./a4/renders.png" alt="shots" />
            </a>
            <a href="./a4/fabrications.png" target="_blank">
              <img src="./a4/fabrications.png" alt="builds" />
            </a>
            <a href="./a4/pseudocode.png" target="_blank">
              <img src="./a4/pseudocode.png" id="imgborder" alt="flowchart" />
            </a>
          </div>
          <h4 id="descheader">PARACOSM: Corpse-Inspired Placemaking</h4>
          <h4 id="a3desc">Paracosm is a visionary pavilion where architecture converges with art in a realm of limitless imagination. Its two gracefully curving arms, defined by louvre facades and supported by bold diagonal frames, invite visitors to traverse a living gallery. Here, every step unfolds a dynamic space of regenerative art—a place where creativity transforms architecture into an immersive, interactive world. Note: the .obj file is distorted in the website interactable.</h4>
      </div>
      </div>

    <main id="container">
    <p id="a-title">a5: G A M E _ E N G I N E S</p>
    </section>
    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./a5/shots.png" target="_blank">
          <img src="./a5/shots.png" id="a5pic" alt="fullbleed">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./a5/iso.png" target="_blank">
              <img src="./a5/iso.png" id="imgborder" alt="isometric" />
            </a>
            <a href="./a5/elevation.png" target="_blank">
              <img src="./a5/elevation.png" id="imgborder" alt="facade" />
            </a>
            <a href="./a5/plan.png" target="_blank">
              <img src="./a5/plan.png" id="imgborder" alt="floorplan" />
            </a>
            <a href="./a5/dsgn_c1.png" target="_blank">
              <img src="./a5/dsgn_c1.png" id="imgborder" alt="concept1" />
            </a>
            <a href="./a5/dsgn_c2.png" target="_blank">
              <img src="./a5/dsgn_c2.png" id="imgborder" alt="concept2" />
            </a>
            <a href="./a5/pseudocode.png" target="_blank">
              <img src="./a5/pseudocode.png" alt="flowchart" />
            </a>
          </div>
          <h4 id="descheader">EUDAIMONIA: Unity + Spatial.io Metaverse</h4>
          <h4 id="a1desc">The Eudaimonia Gallery is an open‑air exhibition space set above an grassland, accessed by a single, sturdy oak ladder standing on the earth. Upon climbing, visitors step onto a series of softly glowing cloud platforms—each one a dedicated gallery stage where artworks and installations of previous assignments float on mist‑like pedestals. The clouds are arranged along a gentle aerial path, allowing guests to move from piece to piece in a seamless progression through parkour. Designed for contemplative exploration, the Eudaimonia Gallery blends the surreality of the exquisite corpse with innovative metaversal presentation, offering a unique elevation of art and game design.</h4>
        </div>
      </div>

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