// DevOps tools data
const devopsData = {
    "Version Control": {
        icon: "📚",
        color: "#00d4ff",
        tools: {
            "Git": { difficulty: 2, description: "Distributed version control system for tracking changes in source code during software development.", links: ["https://git-scm.com/", "https://github.com/"] },
            "GitHub": { difficulty: 1, description: "Web-based Git repository hosting service with collaboration features, issue tracking, and CI/CD.", links: ["https://github.com/", "https://docs.github.com/"] },
            "GitLab": { difficulty: 2, description: "Complete DevOps platform with built-in Git repository, CI/CD, and project management.", links: ["https://gitlab.com/", "https://docs.gitlab.com/"] },
            "Bitbucket": { difficulty: 2, description: "Git repository management solution designed for professional teams by Atlassian.", links: ["https://bitbucket.org/", "https://support.atlassian.com/bitbucket-cloud/"] }
        }
    },
    "CI/CD": {
        icon: "🔄",
        color: "#00ff88",
        tools: {
            "Jenkins": { difficulty: 3, description: "Open-source automation server for building, testing, and deploying applications.", links: ["https://jenkins.io/", "https://jenkins.io/doc/"] },
            "GitHub Actions": { difficulty: 2, description: "Native CI/CD platform integrated directly into GitHub repositories.", links: ["https://github.com/features/actions", "https://docs.github.com/en/actions"] },
            "GitLab CI": { difficulty: 2, description: "Built-in continuous integration and deployment tool in GitLab.", links: ["https://docs.gitlab.com/ee/ci/", "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/"] },
            "CircleCI": { difficulty: 2, description: "Cloud-based CI/CD platform that automates the software development process.", links: ["https://circleci.com/", "https://circleci.com/docs/"] },
            "Azure DevOps": { difficulty: 3, description: "Microsoft's comprehensive DevOps solution with repos, boards, pipelines, and artifacts.", links: ["https://azure.microsoft.com/en-us/services/devops/", "https://docs.microsoft.com/en-us/azure/devops/"] },
            "TeamCity": { difficulty: 3, description: "JetBrains' build management and continuous integration server.", links: ["https://www.jetbrains.com/teamcity/", "https://www.jetbrains.com/help/teamcity/"] }
        }
    },
    "Containers": {
        icon: "📦",
        color: "#8b5cf6",
        tools: {
            "Docker": { difficulty: 2, description: "Platform for developing, shipping, and running applications using containerization.", links: ["https://www.docker.com/", "https://docs.docker.com/"] },
            "Kubernetes": { difficulty: 4, description: "Open-source container orchestration platform for automating deployment, scaling, and management.", links: ["https://kubernetes.io/", "https://kubernetes.io/docs/"] },
            "Podman": { difficulty: 3, description: "Daemonless container engine for developing, managing, and running OCI containers.", links: ["https://podman.io/", "https://docs.podman.io/"] },
            "Helm": { difficulty: 3, description: "Package manager for Kubernetes that helps deploy and manage applications.", links: ["https://helm.sh/", "https://helm.sh/docs/"] }
        }
    },
    "Cloud Platforms": {
        icon: "☁️",
        color: "#ff6b35",
        tools: {
            "AWS": { difficulty: 4, description: "Amazon Web Services - comprehensive cloud computing platform with 200+ services.", links: ["https://aws.amazon.com/", "https://docs.aws.amazon.com/"] },
            "Azure": { difficulty: 4, description: "Microsoft's cloud computing platform with integrated tools and services.", links: ["https://azure.microsoft.com/", "https://docs.microsoft.com/en-us/azure/"] },
            "GCP": { difficulty: 4, description: "Google Cloud Platform offering computing, storage, and application development services.", links: ["https://cloud.google.com/", "https://cloud.google.com/docs"] },
            "DigitalOcean": { difficulty: 2, description: "Simple cloud infrastructure provider focused on developer experience.", links: ["https://www.digitalocean.com/", "https://docs.digitalocean.com/"] }
        }
    },
    "Infrastructure as Code": {
        icon: "🏗️",
        color: "#ff4757",
        tools: {
            "Terraform": { difficulty: 3, description: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely.", links: ["https://www.terraform.io/", "https://www.terraform.io/docs/"] },
            "Ansible": { difficulty: 3, description: "Simple automation tool for configuration management, application deployment, and orchestration.", links: ["https://www.ansible.com/", "https://docs.ansible.com/"] },
            "Puppet": { difficulty: 4, description: "Configuration management tool that helps automate infrastructure provisioning and management.", links: ["https://puppet.com/", "https://puppet.com/docs/"] },
            "Chef": { difficulty: 4, description: "Configuration management tool for automating infrastructure deployment and management.", links: ["https://www.chef.io/", "https://docs.chef.io/"] },
            "CloudFormation": { difficulty: 3, description: "AWS service for modeling and setting up AWS resources using templates.", links: ["https://aws.amazon.com/cloudformation/", "https://docs.aws.amazon.com/cloudformation/"] }
        }
    },
    "Monitoring": {
        icon: "📊",
        color: "#00d4ff",
        tools: {
            "Prometheus": { difficulty: 3, description: "Open-source monitoring system with dimensional data model and powerful query language.", links: ["https://prometheus.io/", "https://prometheus.io/docs/"] },
            "Grafana": { difficulty: 2, description: "Open-source analytics and interactive visualization web application.", links: ["https://grafana.com/", "https://grafana.com/docs/"] },
            "ELK Stack": { difficulty: 4, description: "Elasticsearch, Logstash, and Kibana for searching, analyzing, and visualizing log data.", links: ["https://www.elastic.co/elastic-stack/", "https://www.elastic.co/guide/"] },
            "Datadog": { difficulty: 2, description: "Cloud-based monitoring and analytics platform for applications and infrastructure.", links: ["https://www.datadoghq.com/", "https://docs.datadoghq.com/"] },
            "New Relic": { difficulty: 2, description: "Observability platform that helps monitor applications and infrastructure performance.", links: ["https://newrelic.com/", "https://docs.newrelic.com/"] }
        }
    },
    "Security": {
        icon: "🔒",
        color: "#ff4757",
        tools: {
            "Vault": { difficulty: 4, description: "Tool for securely accessing secrets like passwords, certificates, and encryption keys.", links: ["https://www.vaultproject.io/", "https://www.vaultproject.io/docs/"] },
            "OWASP ZAP": { difficulty: 3, description: "Open-source web application security scanner for finding vulnerabilities.", links: ["https://owasp.org/www-project-zap/", "https://www.zaproxy.org/docs/"] },
            "SonarQube": { difficulty: 3, description: "Platform for continuous inspection of code quality and security vulnerabilities.", links: ["https://www.sonarqube.org/", "https://docs.sonarqube.org/"] },
            "Snyk": { difficulty: 2, description: "Developer security platform for finding and fixing vulnerabilities in code and dependencies.", links: ["https://snyk.io/", "https://docs.snyk.io/"] },
            "Aqua Security": { difficulty: 3, description: "Container and cloud native security platform for CI/CD and runtime protection.", links: ["https://www.aquasec.com/", "https://docs.aquasec.com/"] }
        }
    },
    "Communication": {
        icon: "💬",
        color: "#8b5cf6",
        tools: {
            "Slack": { difficulty: 1, description: "Business communication platform for team collaboration and integration with DevOps tools.", links: ["https://slack.com/", "https://api.slack.com/"] },
            "Microsoft Teams": { difficulty: 1, description: "Collaboration platform that combines workplace chat, meetings, and file collaboration.", links: ["https://www.microsoft.com/en-us/microsoft-teams/", "https://docs.microsoft.com/en-us/microsoftteams/"] },
            "Discord": { difficulty: 1, description: "Voice, video, and text communication service popular among developer communities.", links: ["https://discord.com/", "https://discord.com/developers/docs"] },
            "Mattermost": { difficulty: 2, description: "Open-source, self-hosted Slack alternative for team collaboration.", links: ["https://mattermost.com/", "https://docs.mattermost.com/"] }
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setToolOfTheDay();
    initializeAnimations();
    initializeFloatingActionButton();
});

// Render categories
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';

    Object.entries(devopsData).forEach(([category, data]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in';
        categoryCard.innerHTML = `
            <div class="category-header">
                <div class="category-icon">${data.icon}</div>
                <h3 class="category-title">${category}</h3>
            </div>
            <div class="tools-grid">
                ${Object.entries(data.tools).map(([tool, info]) => `
                    <div class="tool-card" onclick="openModal('${tool}', '${category}')">
                        <div class="tool-icon">${tool.charAt(0)}</div>
                        <div class="tool-name">${tool}</div>
                        <div class="difficulty">
                            ${Array.from({length: 5}, (_, i) => 
                                `<div class="difficulty-dot ${i < info.difficulty ? 'active' : ''}"></div>`
                            ).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(categoryCard);
    });
}

// Search functionality
function searchTools(query) {
    const cards = document.querySelectorAll('.tool-card');
    const categoryCards = document.querySelectorAll('.category-card');
    
    if (!query.trim()) {
        cards.forEach(card => card.style.display = 'block');
        categoryCards.forEach(card => card.style.display = 'block');
        return;
    }

    const searchTerm = query.toLowerCase();
    
    categoryCards.forEach(categoryCard => {
        const toolCards = categoryCard.querySelectorAll('.tool-card');
        let hasVisibleTools = false;
        
        toolCards.forEach(card => {
            const toolName = card.querySelector('.tool-name').textContent.toLowerCase();
            if (toolName.includes(searchTerm)) {
                card.style.display = 'block';
                hasVisibleTools = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        categoryCard.style.display = hasVisibleTools ? 'block' : 'none';
    });
}

// Modal functionality
function openModal(toolName, category) {
    const modal = document.getElementById('toolModal');
    const tool = devopsData[category].tools[toolName];
    
    document.getElementById('modalIcon').textContent = toolName.charAt(0);
    document.getElementById('modalTitle').textContent = toolName;
    document.getElementById('modalDescription').textContent = tool.description;
    
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = tool.links.map(link => 
        `<a href="${link}" target="_blank" class="modal-link">
            ${link.includes('docs') ? '📚 Documentation' : '🌐 Official Site'}
        </a>`
    ).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Track tool visit
    trackToolVisit(toolName);
}

function closeModal() {
    const modal = document.getElementById('toolModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        button.textContent = '🌙 Dark';
    } else {
        body.setAttribute('data-theme', 'light');
        button.textContent = '☀️ Light';
    }
}

// Tool of the Day
function setToolOfTheDay() {
    const allTools = [];
    Object.entries(devopsData).forEach(([category, data]) => {
        Object.entries(data.tools).forEach(([tool, info]) => {
            allTools.push({ name: tool, category, ...info });
        });
    });
    
    const today = new Date().getDate();
    const todaysTool = allTools[today % allTools.length];
    
    document.getElementById('toolOfDay').innerHTML = `
        <strong>${todaysTool.name}</strong><br>
        <small>${todaysTool.description}</small>
    `;
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Random tool suggestion
function getRandomTool() {
    const allTools = [];
    Object.entries(devopsData).forEach(([category, data]) => {
        Object.entries(data.tools).forEach(([tool, info]) => {
            allTools.push({ name: tool, category });
        });
    });
    
    const randomTool = allTools[Math.floor(Math.random() * allTools.length)];
    openModal(randomTool.name, randomTool.category);
}

// Initialize floating action button
function initializeFloatingActionButton() {
    // Add a floating action button for random tool
    const fab = document.createElement('button');
    fab.innerHTML = '🎲';
    fab.className = 'fab';
    fab.title = 'Random Tool';
    fab.onclick = getRandomTool;
    
    const fabStyles = document.createElement('style');
    fabStyles.textContent = `
        .fab {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--gradient-primary);
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: var(--shadow);
            transition: var(--transition);
            z-index: 1000;
        }
        
        .fab:hover {
            transform: scale(1.1);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        
        @media (max-width: 768px) {
            .fab {
                bottom: 1rem;
                right: 1rem;
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
            }
        }
    `;
    
    document.head.appendChild(fabStyles);
    document.body.appendChild(fab);
}

// Progress tracking (using in-memory storage)
let visitedTools = new Set();

function trackToolVisit(toolName) {
    visitedTools.add(toolName);
    updateProgress();
}

function updateProgress() {
    const totalTools = Object.values(devopsData).reduce((sum, category) => 
        sum + Object.keys(category.tools).length, 0);
    const progress = (visitedTools.size / totalTools) * 100;
    
    // Display progress in console (you could show this in UI)
    console.log(`Progress: ${Math.round(progress)}% (${visitedTools.size}/${totalTools} tools explored)`);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    document.getElementById('toolModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Smooth scrolling for navigation links
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

    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Escape key to close modal
        if (e.key === 'Escape') {
            closeModal();
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.search-input').focus();
        }
    });
});