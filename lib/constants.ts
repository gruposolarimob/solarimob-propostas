export const COMPANY = {
  name: "Grupo Solarimob",
  shortName: "Solarimob",
  tagline: "Energia solar que transforma seu futuro",
  cnpj: "",
  phone: "",
  whatsapp: "5500000000000", // TODO: substituir pelo número real
  email: "grupo@solarimob.com.br",
  address: "",
  city: "Brasil",
  instagram: "https://instagram.com/solarimob",
  facebook: "",
  youtube: "",
  linkedin: "",
};

export const WHATSAPP_URL = (msg?: string) => {
  const text = msg ?? "Olá! Gostaria de um orçamento de energia solar.";
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
};

export const STATS = [
  { value: "500+", label: "Projetos instalados" },
  { value: "R$ 2M+", label: "Economia gerada/ano" },
  { value: "8 anos", label: "De experiência" },
  { value: "98%", label: "Clientes satisfeitos" },
];

export const SERVICES = [
  {
    icon: "Home",
    title: "Residencial",
    description: "Reduza até 95% da sua conta de luz com um sistema solar personalizado para sua casa.",
    href: "/residencial",
    color: "solar",
  },
  {
    icon: "Building2",
    title: "Comercial",
    description: "Aumente a competitividade do seu negócio reduzindo o custo com energia elétrica.",
    href: "/comercial",
    color: "navy",
  },
  {
    icon: "Tractor",
    title: "Rural / Agronegócio",
    description: "Soluções específicas para propriedades rurais, irrigação e instalações agroindustriais.",
    href: "/rural",
    color: "eco",
  },
  {
    icon: "Factory",
    title: "Industrial",
    description: "Grandes plantas solares para indústrias que buscam independência energética.",
    href: "/industrial",
    color: "solar",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Simulação gratuita",
    description: "Use nossa calculadora ou fale com um consultor. Calculamos o sistema ideal para o seu perfil de consumo.",
  },
  {
    step: "02",
    title: "Projeto e proposta",
    description: "Nossa equipe técnica elabora o projeto completo com especificações e retorno do investimento detalhado.",
  },
  {
    step: "03",
    title: "Instalação e homologação",
    description: "Instalamos com equipe certificada e cuidamos de toda a burocracia junto à concessionária.",
  },
  {
    step: "04",
    title: "Monitoramento",
    description: "Acompanhe em tempo real a geração, economia e performance do seu sistema solar.",
  },
];

export const SEGMENTS = [
  {
    slug: "residencial",
    title: "Residencial",
    subtitle: "Para sua casa",
    description: "Economize até 95% na conta de luz e valorize seu imóvel em até 10% com energia solar.",
    heroImage: "/images/residencial-hero.jpg",
    benefits: [
      "Conta de luz próxima de zero",
      "Valorização do imóvel",
      "Proteção contra aumentos tarifários",
      "Retorno do investimento em 3-5 anos",
      "Garantia de 25 anos nos painéis",
    ],
    ctaText: "Simular minha economia",
    typicalSystem: "3 a 10 kWp",
    avgBill: "R$ 200 a R$ 600/mês",
    avgSavings: "R$ 2.400/ano",
  },
  {
    slug: "comercial",
    title: "Comercial",
    subtitle: "Para seu negócio",
    description: "Reduza os custos operacionais e ganhe competitividade com energia limpa e barata.",
    heroImage: "/images/comercial-hero.jpg",
    benefits: [
      "Redução de custos operacionais",
      "Imagem sustentável para clientes",
      "Dedução fiscal (depreciação acelerada)",
      "Retorno em 3-4 anos",
      "Escalável conforme crescimento",
    ],
    ctaText: "Falar com consultor",
    typicalSystem: "10 a 100 kWp",
    avgBill: "R$ 2.000 a R$ 20.000/mês",
    avgSavings: "R$ 24.000/ano",
  },
  {
    slug: "rural",
    title: "Rural",
    subtitle: "Para o campo",
    description: "Energia solar no agronegócio: irrigação, armazenamento frio, aviários e muito mais.",
    heroImage: "/images/rural-hero.jpg",
    benefits: [
      "Independência da rede elétrica",
      "Redução do custo de irrigação",
      "Sistema com bateria opcional",
      "Adaptado para demandas rurais",
      "Linhas de crédito especiais",
    ],
    ctaText: "Quero energia no campo",
    typicalSystem: "5 a 500 kWp",
    avgBill: "R$ 1.000 a R$ 50.000/mês",
    avgSavings: "R$ 12.000/ano",
  },
  {
    slug: "industrial",
    title: "Industrial",
    subtitle: "Para grandes operações",
    description: "Usinas fotovoltaicas de grande porte para indústrias que buscam autonomia energética.",
    heroImage: "/images/industrial-hero.jpg",
    benefits: [
      "Autonomia energética total",
      "Redução da demanda contratada",
      "GD3 e autogeração remota",
      "CAPEX ou PPA (sem investimento)",
      "Monitoramento SCADA integrado",
    ],
    ctaText: "Solicitar estudo de viabilidade",
    typicalSystem: "100 kWp a MW",
    avgBill: "R$ 20.000+/mês",
    avgSavings: "R$ 240.000+/ano",
  },
];
