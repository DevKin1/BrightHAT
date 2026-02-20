const menuBtn = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".aboutSidebar");

  function toggleMenu() {
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menuBtn.classList.remove("active");
      sidebar.classList.remove("active");
    }
  });
