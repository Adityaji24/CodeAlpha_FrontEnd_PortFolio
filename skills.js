 const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Reveal progress bar on scroll
        const progressBars = document.querySelectorAll('.progress-bar-container');
        window.addEventListener('scroll', () => {
            progressBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    bar.classList.add('show');
                }
            });
        });

        // Hover effect on skill icons
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skill.style.transform = 'scale(1.1)';
                skill.style.transition = 'transform 0.3s ease';
            });
            skill.addEventListener('mouseleave', () => {
                skill.style.transform = 'scale(1)';
            });
        });