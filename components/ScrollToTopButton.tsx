"use client"
import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import confetti from "canvas-confetti";

const shootConfetti = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    document.body.appendChild(canvas);
  
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });
  
    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 3000);
  };
  

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    shootConfetti();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed right-6 bottom-6 z-50 p-2 rounded-full bg-gray-600 text-white shadow-md transition-all hover:bg-gray-800"
          onClick={() => {
            scrollToTop();
            handleClick();
          }}
          aria-label="Scroll to top"
          
        >
          <FaArrowCircleUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
