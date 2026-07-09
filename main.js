// WHATSAPP — link
const waEncoded = 'MjQ0OTcyNDQ1MDQ1';
function applyWaLinks() {
  const waNumber = atob(waEncoded);
  document.querySelectorAll('[data-wa-link]').forEach(a => {
    a.href = 'https://wa.me/' + waNumber;
  });
}
applyWaLinks();

// TRADUÇÃO PT / EN

let currentLang = document.documentElement.getAttribute('data-lang') || 'pt';
const langLabelEl = document.getElementById('lang-label');
if (langLabelEl) langLabelEl.textContent = currentLang === 'pt' ? 'EN' : 'PT';
function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  document.getElementById('lang-label').textContent = currentLang === 'pt' ? 'EN' : 'PT';
  document.documentElement.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    el.innerHTML = currentLang === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
  });
  document.querySelectorAll('[data-pt-placeholder]').forEach(el => {
    el.placeholder = currentLang === 'pt' ? el.getAttribute('data-pt-placeholder') : el.getAttribute('data-en-placeholder');
  });
  applyWaLinks();
  const fb = document.getElementById('t-feedback');
  if (fb && fb.style.display !== 'none') {
    fb.textContent = currentLang === 'pt' ? 'Obrigado! O depoimento será revisto em breve.' : 'Thank you! Your testimonial will be reviewed shortly.';
  }
}

// matrix

const mc = document.getElementById('matrix-canvas');
const mctx = mc.getContext('2d');
function resizeMatrix() { mc.width = window.innerWidth; mc.height = window.innerHeight; }
resizeMatrix();
window.addEventListener('resize', resizeMatrix);
const techs = ['HTML','CSS','JS','React','Node','MySQL','PWA','01','10','</>','{}','()=>'];
let drops = [];
function initDrops() { drops = Array(Math.floor(mc.width/20)).fill(1); }
initDrops();
window.addEventListener('resize', initDrops);
function drawMatrix() {
  mctx.fillStyle = 'rgba(10,14,26,0.05)'; mctx.fillRect(0,0,mc.width,mc.height);
  mctx.fillStyle='#00D9F5'; mctx.font='12px JetBrains Mono,monospace';
  drops.forEach((y,i) => {
    mctx.fillText(techs[Math.floor(Math.random()*techs.length)], i*20, y*20);
    if (y*20 > mc.height && Math.random()>.975) drops[i]=0;
    drops[i]++;
  });
}
let matrixTabVisible = true;
document.addEventListener('visibilitychange', () => { matrixTabVisible = !document.hidden; });
let lastMatrixDraw = 0;
function matrixLoop(ts) {
  if (matrixTabVisible && ts - lastMatrixDraw >= 60) {
    drawMatrix();
    lastMatrixDraw = ts;
  }
  requestAnimationFrame(matrixLoop);
}
requestAnimationFrame(matrixLoop);

// LOADER

const loaderTexts = ['Loading portfolio...','Compiling stack...','Connecting to server...','Rendering Cxi5...','Ready.'];
let progress = 0; let ti = 0;
const loaderBar = document.getElementById('loader-bar');
const loaderText = document.getElementById('loader-text');
const loader = document.getElementById('loader');
const loaderInterval = setInterval(() => {
  progress += Math.random()*18+5;
  if (progress >= 100) progress = 100;
  loaderBar.style.width = progress + '%';
  if (ti < loaderTexts.length) loaderText.textContent = loaderTexts[ti++];
  if (progress >= 100) {
    clearInterval(loaderInterval);
    setTimeout(() => loader.classList.add('fade-out'), 400);
    setTimeout(() => loader.style.display = 'none', 1000);
  }
}, 200);

// HERO — CHANGING WORD com typewriter letra a letra + fonte diferente

const heroWords = [
  { text: 'HTML',       font: "'Orbitron', sans-serif",       color: '#E44D26' },
  { text: 'CSS',        font: "'Syne', sans-serif",            color: '#1572B6' },
  { text: 'JavaScript', font: "'Share Tech Mono', monospace",  color: '#F7DF1E' },
  { text: 'React',      font: "'Rajdhani', sans-serif",        color: '#61DAFB' },
  { text: 'Tailwind',   font: "'Exo 2', sans-serif",           color: '#38BDF8' },
  { text: 'Node.js',    font: "'JetBrains Mono', monospace",   color: '#339933' },
  { text: 'PHP',        font: "'Syne', sans-serif",            color: '#8892BF' },
  { text: 'MySQL',      font: "'Orbitron', sans-serif",        color: '#00758F' },
  { text: 'PWA',        font: "'Exo 2', sans-serif",           color: '#5A0FC8' },
];
let hwi = 0;
const heroDisplay = document.getElementById('hero-word-display');

function typeHeroWord(wordObj, callback) {
  heroDisplay.innerHTML = '';
  let i = 0;
  const interval = setInterval(() => {
    if (i < wordObj.text.length) {
      const span = document.createElement('span');
      span.className = 'hero-char';
      span.textContent = wordObj.text[i];
      span.style.fontFamily = wordObj.font;
      span.style.color = wordObj.color;
      span.style.fontSize = 'inherit';
      span.style.fontWeight = '700';
      span.style.textShadow = `0 0 12px ${wordObj.color}55`;
      heroDisplay.appendChild(span);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 70);
}

function eraseHeroWord(callback) {
  const chars = heroDisplay.querySelectorAll('.hero-char');
  let i = chars.length - 1;
  if (i < 0) { if (callback) callback(); return; }
  const interval = setInterval(() => {
    if (i >= 0) { chars[i].remove(); i--; }
    else { clearInterval(interval); if (callback) callback(); }
  }, 40);
}

function cycleHeroWord() {
  eraseHeroWord(() => {
    hwi = (hwi + 1) % heroWords.length;
    setTimeout(() => {
      typeHeroWord(heroWords[hwi], () => {
        setTimeout(cycleHeroWord, 2200);
      });
    }, 200);
  });
}

// Inicia
typeHeroWord(heroWords[0], () => { setTimeout(cycleHeroWord, 2200); });

// SCROLL REVEAL

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// SKILLS — TYPEWRITER LETRA A LETRA ao entrar na viewport

function typewriteSkill(el, text, delay) {
  setTimeout(() => {
    el.classList.add('skill-visible');
    const labelEl = el.querySelector('.skill-label');
    labelEl.textContent = '';
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) { labelEl.textContent += text[i]; i++; }
      else clearInterval(iv);
    }, 50);
  }, delay);
}
const skillsObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.skill-tag').forEach((tag, idx) => {
        typewriteSkill(tag, tag.getAttribute('data-label'), idx * 110);
      });
      skillsObs.disconnect();
    }
  });
}, { threshold: 0.2 });
if (document.getElementById('skills')) skillsObs.observe(document.getElementById('skills'));

// ACTIVE DOCK

const sections = ['hero','about','skills','projects','testimonials','contact'];
const dockItems = document.querySelectorAll('.dock-item');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(id => { const s = document.getElementById(id); if (s && window.scrollY >= s.offsetTop - 200) cur = id; });
  dockItems.forEach(item => item.classList.toggle('active', item.dataset.section === cur));
});

// TESTIMONIAL SUBMIT — EmailJS

function submitTestimonial() {
  const honeypot = document.getElementById('t-website');
  if (honeypot && honeypot.value.trim() !== '') return; // bot detectado — bloqueia silenciosamente
  const name = document.getElementById('t-name').value.trim();
  const role = document.getElementById('t-role').value.trim();
  const msg = document.getElementById('t-msg').value.trim();
  const fb = document.getElementById('t-feedback');
  if (!name || !msg) {
    fb.style.color='#FF5F57';
    fb.textContent = currentLang==='pt' ? 'Preenche o nome e o comentário.' : 'Please fill in your name and comment.';
    fb.style.display='block'; return;
  }
  fb.style.color='var(--cyan)';
  fb.textContent = currentLang==='pt' ? 'A enviar...' : 'Sending...';
  fb.style.display='block';

  emailjs.send('service_t04o9wn', 'template_hcpbe24', {
    name: name,
    from_role: role || '—',
    message: msg,
    to_email: 'leosebastiao25@gmail.com'
  }).then(() => {
    fb.textContent = currentLang==='pt' ? 'Obrigado! O depoimento será revisto em breve.' : 'Thank you! Your testimonial will be reviewed shortly.';
    document.getElementById('t-name').value='';
    document.getElementById('t-role').value='';
    document.getElementById('t-msg').value='';
  }).catch(() => {
    fb.style.color='#FF5F57';
    fb.textContent = currentLang==='pt' ? 'Erro ao enviar. Tenta novamente.' : 'Error sending. Please try again.';
  });
}

// CENA 3D INTERATIVA

function initScene3D() {
  const canvas = document.getElementById('scene3d-canvas');
  const W = canvas.offsetWidth || 600;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W, W);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50,1,0.1,100);
  camera.position.z = 3.5;

  const coreGeo = new THREE.SphereGeometry(0.18,32,32);
  const coreMat = new THREE.MeshBasicMaterial({ color:0x00D9F5, transparent:true, opacity:0.9 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  const haloMesh = new THREE.Mesh(new THREE.SphereGeometry(0.26,32,32), new THREE.MeshBasicMaterial({ color:0x00D9F5, transparent:true, opacity:0.12, side:THREE.BackSide }));

  function makeRing(radius,tilt,color,opacity) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(radius,0.004,8,120), new THREE.MeshBasicMaterial({ color, transparent:true, opacity }));
    m.rotation.x = tilt; return m;
  }
  const rings = [makeRing(0.7,Math.PI/2,0x00D9F5,0.5),makeRing(1.0,Math.PI/3,0x7B2FBE,0.4),makeRing(1.35,Math.PI/1.6,0x00D9F5,0.3),makeRing(1.7,Math.PI/4,0x7B2FBE,0.2)];

  const pCount = 2800;
  const pPos = new Float32Array(pCount*3), pCol = new Float32Array(pCount*3);
  const cyan=new THREE.Color(0x00D9F5), purple=new THREE.Color(0x7B2FBE), white=new THREE.Color(0xF0F6FF);
  for (let i=0;i<pCount;i++) {
    const r=0.4+Math.random()*2.2, theta=Math.random()*Math.PI*2, phi=Math.acos(2*Math.random()-1);
    pPos[i*3]=r*Math.sin(phi)*Math.cos(theta); pPos[i*3+1]=r*Math.sin(phi)*Math.sin(theta); pPos[i*3+2]=r*Math.cos(phi);
    const c=Math.random()<.5?cyan:(Math.random()<.6?purple:white);
    pCol[i*3]=c.r; pCol[i*3+1]=c.g; pCol[i*3+2]=c.b;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos,3));
  pGeo.setAttribute('color', new THREE.Float32BufferAttribute(pCol,3));
  const pMat = new THREE.PointsMaterial({ size:0.022, vertexColors:true, transparent:true, opacity:0.75, sizeAttenuation:true });
  const particles = new THREE.Points(pGeo, pMat);

  const satData = [{radius:0.55,speed:1.1,size:0.03,color:0xF0F6FF,tilt:Math.PI/2.4},{radius:0.7,speed:0.8,size:0.04,color:0x00D9F5,tilt:Math.PI/2},{radius:0.85,speed:0.65,size:0.038,color:0x00D9F5,tilt:Math.PI/1.8},{radius:1.0,speed:0.5,size:0.05,color:0x7B2FBE,tilt:Math.PI/3},{radius:1.15,speed:0.42,size:0.032,color:0x00D9F5,tilt:Math.PI/2.8},{radius:1.35,speed:0.35,size:0.035,color:0xF0F6FF,tilt:Math.PI/1.6},{radius:1.5,speed:0.3,size:0.036,color:0x7B2FBE,tilt:Math.PI/1.3},{radius:1.7,speed:0.25,size:0.04,color:0x7B2FBE,tilt:Math.PI/4}];
  const satellites = satData.map((d,i) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(d.size,12,12), new THREE.MeshBasicMaterial({ color:d.color }));
    mesh.add(new THREE.Mesh(new THREE.SphereGeometry(d.size*1.8,12,12), new THREE.MeshBasicMaterial({ color:d.color, transparent:true, opacity:.15, side:THREE.BackSide })));
    return { mesh, ...d, angle: i*(2*Math.PI/satData.length) };
  });

  let isDragging=false, prevMouse={x:0,y:0}, rotVel={x:0,y:0}, targetRot={x:0,y:0}, currentRot={x:0,y:0};
  canvas.addEventListener('mousedown', e => { isDragging=true; prevMouse={x:e.clientX,y:e.clientY}; rotVel={x:0,y:0}; });
  window.addEventListener('mouseup', ()=>{ isDragging=false; });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx=e.clientX-prevMouse.x, dy=e.clientY-prevMouse.y;
    rotVel.y=dx*.005; rotVel.x=dy*.005;
    targetRot.y+=rotVel.y; targetRot.x+=rotVel.x;
    prevMouse={x:e.clientX,y:e.clientY};
  });
  canvas.addEventListener('touchstart', e=>{ isDragging=true; prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY}; });
  canvas.addEventListener('touchend', ()=>{ isDragging=false; });
  canvas.addEventListener('touchmove', e=>{ if(!isDragging)return; e.preventDefault(); const dx=e.touches[0].clientX-prevMouse.x,dy=e.touches[0].clientY-prevMouse.y; rotVel.y=dx*.005; rotVel.x=dy*.005; targetRot.y+=rotVel.y; targetRot.x+=rotVel.x; prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY}; },{passive:false});
  canvas.addEventListener('wheel', e=>{ camera.position.z=Math.max(1.8,Math.min(6,camera.position.z+e.deltaY*.004)); },{passive:true});

  const pivot = new THREE.Group();
  scene.add(pivot);
  [core, haloMesh, ...rings, particles].forEach(obj => pivot.add(obj));
  const satGroup = new THREE.Group();
  pivot.add(satGroup);
  satellites.forEach(s => satGroup.add(s.mesh));
  scene.add(new THREE.AmbientLight(0x00D9F5,0.4));
  const pt = new THREE.PointLight(0x7B2FBE,1.5,8);
  pt.position.set(2,2,2);
  scene.add(pt);

  let t=0;
  let animFrameId = null;
  function animate() {
    animFrameId = requestAnimationFrame(animate); t+=0.008;
    if (!isDragging) { rotVel.x*=.92; rotVel.y*=.92; targetRot.x+=rotVel.x; targetRot.y+=rotVel.y; targetRot.y+=.002; }
    currentRot.x+=(targetRot.x-currentRot.x)*.08; currentRot.y+=(targetRot.y-currentRot.y)*.08;
    pivot.rotation.x=currentRot.x; pivot.rotation.y=currentRot.y;
    const pulse=0.9+Math.sin(t*2)*.1;
    core.scale.setScalar(pulse); coreMat.opacity=0.7+Math.sin(t*2)*.2;
    rings[0].rotation.z+=.006; rings[1].rotation.z-=.004; rings[2].rotation.z+=.003; rings[3].rotation.z-=.002;
    particles.rotation.y+=.0008;
    satellites.forEach(s => {
      s.angle += s.speed*.012;
      s.mesh.position.set(s.radius*Math.cos(s.angle), s.radius*Math.sin(s.angle)*Math.sin(s.tilt), s.radius*Math.sin(s.angle)*Math.cos(s.tilt));
    });
    pMat.opacity=0.6+Math.sin(t)*.15;
    renderer.render(scene,camera);
  }
  const scene3dObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (animFrameId === null) animate();
      } else if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    });
  }, { threshold: 0.01 });
  scene3dObs.observe(canvas);
}

// LAZY LOAD DO THREE.JS — só carrega quando a secção 3D se aproxima

function loadScene3DWhenNear() {
  const section = document.getElementById('scene3d-section');
  if (!section) return;
  const loaderObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loaderObs.disconnect();
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = initScene3D;
        document.head.appendChild(script);
      }
    });
  }, { rootMargin: '600px' });
  loaderObs.observe(section);
}
loadScene3DWhenNear();