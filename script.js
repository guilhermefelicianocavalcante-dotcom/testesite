 function openCourse(courseId) {
            const courses = {
                1: {
                    title: "Cadastro de Usuários",
                    description: "Este curso aborda:\n• Criação de novos usuários\n• Configuração de perfis de acesso\n• Gerenciamento de permissões\n• Boas práticas de segurança"
                },
                2: {
                    title: "Workflows",
                    description: "Aprenda a:\n• Criar fluxos de aprovação\n• Configurar etapas de validação\n• Gerenciar aprovadores\n• Monitorar processos"
                },
                3: {
                    title: "Contratos",
                    description: "Domine:\n• Cadastro de contratos\n• Gestão de aditivos\n• Controle de vigência\n• Relatórios contratuais"
                }
            };

            const course = courses[courseId];
            alert(`${course.title}\n\n${course.description}\n\nClique em OK para iniciar o curso!`);

        }

        // Smooth scroll para navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animação de entrada dos cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 700px -700px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Inicializar animações
        window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.course-card');
            cards.forEach((card, index) => {
                card.style.opacity = '10';
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'all 0.6s ease';
                
                observer.observe(card);
                
                // Animação escalonada
                setTimeout(() => {
                    card.style.opacity = '10';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });