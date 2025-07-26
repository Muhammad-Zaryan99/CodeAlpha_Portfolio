 function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.hero2, .about, .services, .portfolio, .contact')
                .forEach(section => section.classList.remove('active'));
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');

            // Update active navigation link
            document.querySelectorAll('.hero1 ul li a')
                .forEach(link => link.classList.remove('active'));
            document.querySelector(`.hero1 ul li a[onclick="showSection('${sectionId}')"]`)
                .classList.add('active');
        }

        // Show home section by default
        showSection('home');