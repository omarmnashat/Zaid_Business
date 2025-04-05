console.log("script.js loaded");
document.addEventListener("DOMContentLoaded", () => {
    const langSwitchButtons = document.querySelectorAll(".lang-switch");
  
    langSwitchButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedLang = button.getAttribute("data-lang");
  
        fetch("lang.json")
          .then(response => response.json())
          .then(translations => {
            const elementsToTranslate = document.querySelectorAll("[data-lang]");
  
            elementsToTranslate.forEach(el => {
              const key = el.getAttribute("data-lang");
              if (translations[selectedLang] && translations[selectedLang][key]) {
                el.textContent = translations[selectedLang][key];
              }
            });
          })
          .catch(error => {
            console.error("Error loading translations:", error);
          });
      });
    });
  });
  