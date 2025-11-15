s// Rolagem suave nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Configurações padrão para o SDK (necessário para gerenciamento de configurações)
const defaultConfig = {
  name: "Mayra Calegario",
  title: "Desenvolvedor Full Stack",
  about_text: "Olá! Estudo desenvolvimento de sistemas e estou no 2° ano, tenho 16 anos. Gosto de esportes, principalmente futebol e vôlei, adoro sair com minha família e amigos, e sou apaixonada por paisagens",
  project1_title: "E-commerce Moderno",
  project1_desc: "Plataforma completa de vendas online com carrinho, pagamento e painel administrativo.",
  project2_title: "Dashboard Analytics",
  project2_desc: "Sistema de visualização de dados com gráficos interativos e relatórios em tempo real.",
  project3_title: "App de Mensagens",
  project3_desc: "Aplicativo de chat em tempo real com suporte a grupos e compartilhamento de mídia.",
  contact_email: "mayracalegario1631@gmail.com",
  contact_phone: "(11) 98765-4321",
  background_color: "#667eea",
  accent_color: "#f093fb",
  text_color: "#ffffff",
  card_color: "rgba(255, 255, 255, 0.1)",
  font_family: "Segoe UI",
  font_size: 16
};

// Função para atualizar o conteúdo e o estilo com base nas configurações
async function onConfigChange(config) {
  const headerName = document.getElementById('header-name');
  const headerTitle = document.getElementById('header-title');
  const aboutText = document.getElementById('about-text');
  const project1Title = document.getElementById('project1-title');
  const project1Desc = document.getElementById('project1-desc');
  const project2Title = document.getElementById('project2-title');
  const project2Desc = document.getElementById('project2-desc');
  const project3Title = document.getElementById('project3-title');
  const project3Desc = document.getElementById('project3-desc');
  const contactEmail = document.getElementById('contact-email');
  const contactPhone = document.getElementById('contact-phone');

  // Atualiza o texto do conteúdo
  if (headerName) headerName.textContent = config.name || defaultConfig.name;
  if (headerTitle) headerTitle.textContent = config.title || defaultConfig.title;
  if (aboutText) aboutText.textContent = config.about_text || defaultConfig.about_text;
  if (project1Title) project1Title.textContent = config.project1_title || defaultConfig.project1_title;
  if (project1Desc) project1Desc.textContent = config.project1_desc || defaultConfig.project1_desc;
  if (project2Title) project2Title.textContent = config.project2_title || defaultConfig.project2_title;
  if (project2Desc) project2Desc.textContent = config.project2_desc || defaultConfig.project2_desc;
  if (project3Title) project3Title.textContent = config.project3_title || defaultConfig.project3_title;
  if (project3Desc) project3Desc.textContent = config.project3_desc || defaultConfig.project3_desc;
  if (contactEmail) contactEmail.textContent = config.contact_email || defaultConfig.contact_email;
  if (contactPhone) contactPhone.textContent = config.contact_phone || defaultConfig.contact_phone;

  // Atualiza a fonte
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Tahoma, Geneva, Verdana, sans-serif';
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  // Atualiza os tamanhos da fonte
  const baseSize = config.font_size || defaultConfig.font_size;
  const h1Elements = document.querySelectorAll('h1');
  const h2Elements = document.querySelectorAll('h2');
  const h3Elements = document.querySelectorAll('h3');
  const pElements = document.querySelectorAll('p, .about-content, .project-description, .contact-item');
  const navLinks = document.querySelectorAll('nav a');

  h1Elements.forEach(el => el.style.fontSize = `${baseSize * 3}px`);
  h2Elements.forEach(el => el.style.fontSize = `${baseSize * 2.25}px`);
  h3Elements.forEach(el => el.style.fontSize = `${baseSize * 1.5}px`);
  pElements.forEach(el => el.style.fontSize = `${baseSize * 1.125}px`);
  navLinks.forEach(el => el.style.fontSize = `${baseSize}px`);

  // Atualiza as cores de fundo e texto
  document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, #764ba2 100%)`;
  document.body.style.color = config.text_color || defaultConfig.text_color;

  const sections = document.querySelectorAll('section, nav');
  sections.forEach(section => {
    section.style.background = config.card_color || defaultConfig.card_color;
  });
}

// Função de rolagem suave para as seções
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Inicialização do SDK (mantido para a funcionalidade original de configuração)
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.card_color || defaultConfig.card_color,
          set: (value) => {
            config.card_color = value;
            window.elementSdk.setConfig({ card_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (value) => {
            config.accent_color = value;
            window.elementSdk.setConfig({ accent_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ["name", config.name || defaultConfig.name],
      ["title", config.title || defaultConfig.title],
      ["about_text", config.about_text || defaultConfig.about_text],
      ["project1_title", config.project1_title || defaultConfig.project1_title],
      ["project1_desc", config.project1_desc || defaultConfig.project1_desc],
      ["project2_title", config.project2_title || defaultConfig.project2_title],
      ["project2_desc", config.project2_desc || defaultConfig.project2_desc],
      ["project3_title", config.project3_title || defaultConfig.project3_title],
      ["project3_desc", config.project3_desc || defaultConfig.project3_desc],
      ["contact_email", config.contact_email || defaultConfig.contact_email],
      ["contact_phone", config.contact_phone || defaultConfig.contact_phone]
    ])
  });
}