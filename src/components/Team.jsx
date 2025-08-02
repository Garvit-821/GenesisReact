import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import '../styles/team.css';

const Team = () => {
  const teamContainerRef = useRef(null);
  const teamMembers = [
    {
      name: "Harshil Srivastav",
      role: "Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Shauryadeep",
      role: "Co-founder, Lead Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Moksh Kohli",
      role: "Community Manager",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    }
  ];

  useEffect(() => {
    // Three.js setup
    let scene, camera, renderer;
    let teamCards = [];
    let currentFocusIndex = 0;

    const init = () => {
      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);
      
      // Camera setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      
      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      teamContainerRef.current.appendChild(renderer.domElement);
      
      // Create team cards
      createTeamCards();
      
      // Handle window resize
      window.addEventListener('resize', onWindowResize);
      
      // Start animation loop
      animate();
    };

    const createTeamCards = () => {
      const cardGeometry = new THREE.BoxGeometry(3, 4, 0.1);
      const cardMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x141414,
        transparent: true,
        opacity: 0.9
      });
      
      teamMembers.forEach((member, index) => {
        const card = new THREE.Mesh(cardGeometry, cardMaterial);
        
        // Position cards in a circle
        const angle = (index / teamMembers.length) * Math.PI * 2;
        const radius = 5;
        card.position.x = Math.cos(angle) * radius;
        card.position.y = Math.sin(angle) * radius;
        
        // Store member data
        card.userData = member;
        
        scene.add(card);
        teamCards.push(card);
        
        // Create HTML overlay for each card
        createCardHTML(member, index);
      });
      
      // Set focus on first card
      setFocus(0);
    };

    const createCardHTML = (member, index) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'team-card-overlay';
      cardElement.innerHTML = `
        <div class="member-image">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <div class="social-links">
          <a href="${member.social.twitter}"><i className="fab fa-twitter"></i></a>
          <a href="${member.social.github}"><i className="fab fa-github"></i></a>
          <a href="${member.social.linkedin}"><i className="fab fa-linkedin"></i></a>
        </div>
      `;
      
      cardElement.addEventListener('click', () => setFocus(index));
      teamContainerRef.current.appendChild(cardElement);
    };

    const setFocus = (index) => {
      currentFocusIndex = index;
      
      // Animate cards to new positions
      teamCards.forEach((card, i) => {
        const angle = ((i - index) / teamMembers.length) * Math.PI * 2;
        const radius = i === index ? 0 : 5;
        
        gsap.to(card.position, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          z: i === index ? 1 : 0,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(card.rotation, {
          y: i === index ? 0 : angle,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(card.scale, {
          x: i === index ? 1.2 : 1,
          y: i === index ? 1.2 : 1,
          z: i === index ? 1.2 : 1,
          duration: 1,
          ease: "power3.out"
        });
      });
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate cards slightly for visual interest
      teamCards.forEach((card, i) => {
        if (i !== currentFocusIndex) {
          card.rotation.y += 0.005;
        }
      });
      
      renderer.render(scene, camera);
    };

    init();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (teamContainerRef.current && renderer) {
        teamContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section id="team" style={{ position: 'relative', height: '100vh', background: '#0a0a0a', overflow: 'hidden' }}>
      <h2 className="section-title">Meet Our <span>Core Team</span></h2>
      <div id="team-container" ref={teamContainerRef}></div>
    </section>
  );
};

export default Team;