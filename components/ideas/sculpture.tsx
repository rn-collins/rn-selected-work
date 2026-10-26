'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ideas.module.css';
export default function Sculpture({ paused }: { paused: boolean }) {
 const host = useRef<HTMLDivElement>(null);
 const motion = useRef(!paused);
 const renderOnce = useRef<(() => void) | null>(null);
 const [ready, setReady] = useState(false);
 useEffect(() => { motion.current = !paused; renderOnce.current?.(); }, [paused]);
 useEffect(() => {
  let disposed = false;
  let cleanup = () => {};
  import('three').then(T => {
   if (disposed || !host.current) return;
   const container = host.current;
   let renderer: InstanceType<typeof T.WebGLRenderer>;
   try { renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { return; }
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));renderer.setClearColor(0x000000, 0);
   renderer.toneMapping = T.ACESFilmicToneMapping;renderer.toneMappingExposure = 1.5;
   container.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-hidden', 'true');
   const scene = new T.Scene();const camera = new T.PerspectiveCamera(35, 1, 0.1, 100);camera.position.set(0, 0, 9);
   const assembly = new T.Group();scene.add(assembly);
   const geometry = new T.TorusKnotGeometry(1.25, .39, 180, 36, 2, 3);
   const material = new T.MeshPhysicalMaterial({ color: 0xdad9ff, metalness: .55, roughness: .23, clearcoat: 1, clearcoatRoughness: .1, iridescence: .85, iridescenceIOR: 1.3 });
   const knot = new T.Mesh(geometry, material);assembly.add(knot);
   const hoopGeometry = new T.TorusGeometry(2.3, .009, 6, 140);
   const hoopMaterial = new T.MeshBasicMaterial({ color: 0xd4ff74, transparent: true, opacity: .8 });
   const hoops = [0,1,2].map(i => { const mesh = new T.Mesh(hoopGeometry, hoopMaterial); mesh.rotation.set(.5+i*.55,.3+i*.6,.2); assembly.add(mesh); return mesh; });
   const starGeometry = new T.SphereGeometry(.05, 12, 12);const starMaterial = new T.MeshBasicMaterial({ color: 0xd4ff74 });
   const star = new T.Mesh(starGeometry,starMaterial);assembly.add(star);
   scene.add(new T.AmbientLight(0xd8d2ff, 2));
   [[0xffffff,5,3,5,4],[0xb6a1ff,6,-4,1,2],[0xff8855,5,0,-3,3]].forEach(([color,intensity,x,y,z])=>{const light=new T.DirectionalLight(color,intensity);light.position.set(x,y,z);scene.add(light);});
   let frame = 0, visible = true, contextLost = false, angle = .3, last = 0, pointerX = 0, pointerY = 0;
   const render = (time = 0) => {
    frame = 0;if(contextLost || disposed)return;const moving = motion.current && visible && !document.hidden;
    if (moving) angle += Math.min((time-last)/1000 || 0, .04) * .18;last = time;
    knot.rotation.set(angle*.45 + pointerY*.15, angle + pointerX*.2, -.35);hoops[0].rotation.z=angle*.3;
    star.position.set(Math.cos(angle*2)*2.3,Math.sin(angle*2)*1.7,Math.sin(angle*2)*1.5);renderer.render(scene,camera);
    if(moving) frame=requestAnimationFrame(render);
   };
   const resume = () => { if(frame) cancelAnimationFrame(frame);last=0;render(); };renderOnce.current = resume;
   const resize = () => { const {width,height}=container.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/Math.max(height,1);camera.updateProjectionMatrix();resume(); };
   const observer = new ResizeObserver(resize);observer.observe(container);
   const visibility = new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;resume();});visibility.observe(container);
   const pointer = (e: PointerEvent) => { if(!motion.current || e.pointerType==='touch')return;const r=container.getBoundingClientRect();pointerX=(e.clientX-r.left)/r.width-.5;pointerY=(e.clientY-r.top)/r.height-.5;if(!frame)resume(); };
   container.addEventListener('pointermove',pointer,{passive:true});document.addEventListener('visibilitychange',resume);
   const lost = (e: Event) => {e.preventDefault();contextLost=true;if(frame)cancelAnimationFrame(frame);frame=0;renderer.domElement.style.visibility='hidden';setReady(false);};
   const restored = () => {contextLost=false;renderer.domElement.style.visibility='';resize();setReady(true);};
   renderer.domElement.addEventListener('webglcontextlost',lost);renderer.domElement.addEventListener('webglcontextrestored',restored);
   resize();setReady(true);
   cleanup = () => {cancelAnimationFrame(frame);renderOnce.current=null;observer.disconnect();visibility.disconnect();container.removeEventListener('pointermove',pointer);document.removeEventListener('visibilitychange',resume);renderer.domElement.removeEventListener('webglcontextlost',lost);renderer.domElement.removeEventListener('webglcontextrestored',restored);geometry.dispose();material.dispose();hoopGeometry.dispose();hoopMaterial.dispose();starGeometry.dispose();starMaterial.dispose();renderer.dispose();renderer.domElement.remove();};
  }).catch(()=>{});
  return () => {disposed=true;cleanup();};
 }, []);
 return <div className={styles.sculpture} ref={host} aria-hidden="true"><div className={styles.fallback} style={{opacity:ready?0:1}}><span/><span/><span/></div></div>;
}
