"use client";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const video = ref.current;
    if (!media.matches && !connection?.saveData) void video?.play().catch(() => {});
    const change = () => { if (media.matches) video?.pause(); };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  function toggle() { const video = ref.current; if (!video) return; if (video.paused) void video.play().catch(() => setFailed(true)); else video.pause(); }
  return <figure className="hero-film"><div className="film-window"><video ref={ref} muted loop playsInline preload="metadata" poster="/ambiente-camila.jpg" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} aria-label="Cena de cuidado facial do vídeo utilizado no site atual da empresa" style={{ visibility: failed ? "hidden" : "visible" }}><source src="/cuidado-facial.mp4" type="video/mp4"/></video>{failed && <img src="/ambiente-camila.jpg" alt="Sala da clínica Camila Ferreira, publicada pelo proprietário no Google." className="film-fallback"/>}<div className="film-caption"><p>o cuidado<br/>está no toque.</p>{!failed && <button type="button" onClick={toggle} className="video-toggle" aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}>{playing ? "Ⅱ" : "▷"}</button>}</div></div><figcaption>Vídeo utilizado no site atual da empresa.</figcaption></figure>;
}

const care = [
  { name: "Rosto", title: "Um olhar para a sua pele.", text: "Da limpeza de pele à hidratação, conheça os cuidados faciais divulgados pela clínica.", list: ["Limpeza de pele", "Hidratação profunda", "Drenagem facial"], topic: "os cuidados faciais" },
  { name: "Corpo", title: "Seu corpo merece atenção.", text: "Protocolos corporais e tecnologias fazem parte dos serviços. A equipe orienta sobre a avaliação e as possibilidades de cuidado.", list: ["Radiofrequência corporal", "Criofrequência", "Protocolos corporais"], topic: "os cuidados corporais" },
  { name: "Drenagem", title: "Cuidado em cada movimento.", text: "Drenagem linfática corporal e facial entre os atendimentos da clínica. Converse com a equipe para entender a indicação.", list: ["Drenagem linfática corporal", "Drenagem facial", "Avaliação individual"], topic: "a drenagem linfática" },
  { name: "Massagens", title: "Deixe a correria lá fora.", text: "Uma pausa na semana pode começar por aqui. Consulte as opções de massagens e combine seu atendimento com a equipe.", list: ["Massagem relaxante", "Massagem modeladora", "Consulte sessões avulsas"], topic: "as massagens" },
];
export function CareSelector() {
  const [selected, setSelected] = useState(0);
  const item = care[selected];
  return <div className="care-picker"><div className="care-buttons" role="group" aria-label="Escolha um cuidado">{care.map((entry, index) => <button key={entry.name} type="button" aria-pressed={selected === index} aria-controls="care-description" onClick={() => setSelected(index)}><span>{entry.name}</span><svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5"/></svg></button>)}</div><div className="care-description" id="care-description" aria-live="polite" aria-atomic="true"><span className="care-current">{item.name}</span><h3>{item.title}</h3><p>{item.text}</p><ul>{item.list.map(service => <li key={service}>{service}</li>)}</ul><a href={"https://wa.me/5521992630798?text=" + encodeURIComponent(`Olá! Quero saber mais sobre ${item.topic} na Estética Camila Ferreira.`)} className="care-link">Conversar sobre {item.name.toLocaleLowerCase("pt-BR")}<span aria-hidden="true">↗</span></a></div></div>;
}
