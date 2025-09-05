// JavaScript Document
  const links = document.querySelectorAll("aside nav a");
  const sections = document.querySelectorAll("main section");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").replace(".html","");

      sections.forEach(sec => sec.style.display = "none"); // esconde tudo
      document.getElementById(id).style.display = "block"; // mostra a seção clicada
    });
  });