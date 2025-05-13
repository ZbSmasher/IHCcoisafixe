document.addEventListener('DOMContentLoaded', function() {
    // Search toggle functionality
    const searchToggle = document.querySelector('.search-toggle');
    const searchBox = document.querySelector('.search-box');
    
    searchToggle.addEventListener('click', function() {
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-box') && !event.target.closest('.search-toggle')) {
            searchBox.style.display = 'none';
        }
    });
});



// MENU

        lucide.createIcons();

        
    const submenuData = {
      1: [
        { text: 'Deputados em funções', href: '#' },
        { text: 'Agenda Parlamentar', href: '#' },
        { text: 'Leis em Discussão', href: '#' },
        { text: 'Contactar um deputado', href: '#' }
      ],
      2: [
        { text: 'Próximas Eleições', href: '#' },
        { text: 'Como votar', href: '#' },
        { text: 'Resultados Eleitorais', href: '#' },
        { text: 'Mesa de Voto', href: 'PaginaVotar.html' }
      ],
      3: [{ text: 'Entrar no Forum', href: 'forum.html' }],
      4: [
        { text: 'Partidos', href: 'partidos.html' },
        { text: 'Financiamento partidário', href: '#' },
        { text: 'Como criar um partido', href: 'como_criar_partido.html' },
        { text: 'Comparador de Partidos', href: 'comparador.html' }
      ],
      5: [
        { text: 'Texto da Constituição', href: 'constituicao.html' },
        { text: 'Princípios Fundamentais', href: '#' },
        { text: 'Direitos e Deveres', href: 'direitos-deveres.html' }
      ],
           6: [
    { text: 'Notícias', href: 'noticias.html', icon: 'newspaper' }
]
    };

    function renderMenuCategories() {
      const menu = document.getElementById("dropdownMenu");
      menu.innerHTML = '';

      // Add top-level "Voltar" button to close menu
      const closeBtn = document.createElement('a');
      closeBtn.href = "#";
      closeBtn.className = 'back-button'; // AQUI
      closeBtn.textContent = '← Voltar';
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove("show");
        document.getElementById("menuOverlay").classList.remove("show");
      });
      menu.appendChild(closeBtn);

      const categories = [
        { id: 4, name: 'Partidos' },
        { id: 1, name: 'Assembleia da República' },
        { id: 2, name: 'Eleições' },
        { id: 5, name: 'Constituição' },
        { id: 3, name: 'Forum' },
        { id: 6, name: 'Notícias'}

      ];

      categories.forEach(cat => {
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = cat.name;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          renderSubmenu(cat.id);
        });
        menu.appendChild(link);
      });
    }

    function renderSubmenu(id) {
      const menu = document.getElementById("dropdownMenu");
      const submenu = submenuData[id];
      menu.innerHTML = '';

      const back = document.createElement('a');
      back.textContent = '← Voltar';
      back.href = "#";
      back.className = 'back-button';
      back.addEventListener('click', (e) => {
        e.preventDefault();
        renderMenuCategories();
      });
      menu.appendChild(back);

      submenu.forEach(item => {
        const sublink = document.createElement('a');
        sublink.href = item.href;
        sublink.textContent = item.text;
        sublink.classList.add("submenu");
        menu.appendChild(sublink);
      });
    }

    document.getElementById("admin-btn").addEventListener("click", function (event) {
      event.preventDefault();
      const menu = document.getElementById("dropdownMenu");
      const overlay = document.getElementById("menuOverlay");

      menu.classList.toggle("show");
      overlay.classList.toggle("show");

      if (menu.classList.contains("show")) {
        renderMenuCategories();
      }
    });

    document.getElementById("menuOverlay").addEventListener("click", () => {
      document.getElementById("dropdownMenu").classList.remove("show");
      document.getElementById("menuOverlay").classList.remove("show");
    });