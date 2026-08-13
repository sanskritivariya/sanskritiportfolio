import Image from "next/image";
import personal from "../../../data/personal";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content reveal reveal-left">
          <span className="hero-welcome">Hello, I'm</span>
          <h1 className="hero-title">{personal.name}</h1>
          <h2 className="hero-subtitle">{personal.title}</h2>
          <p className="hero-description">{personal.bio}</p>
          
          <div className="hero-actions reveal reveal-up delay-2">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>
        
        <div className="hero-avatar-wrapper reveal reveal-right delay-1">
          <div className="avatar-glowing-ring"></div>
          <div className="avatar-image-container">
            <Image
              src="/images/avatar.png"
              alt={personal.name}
              width={320}
              height={320}
              priority
              className="hero-avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
