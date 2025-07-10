import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      links: [
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
      ],
    },
    {
      text: 'Layanan',
      links: [
        {
          text: 'Fitur Unggulan',
          href: getPermalink('/#features'),
        },
        {
          text: 'Layanan Kami',
          href: getPermalink('/services'),
        },
        {
          text: 'Harga Paket',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Tentang Kami',
          href: getPermalink('/about'),
        },
        {
          text: 'Syarat & Ketentuan',
          href: getPermalink('/terms'),
        },
        {
          text: 'Kebijakan Privasi',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing Page',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Artikel Terbaru',
          href: getBlogPermalink(),
        },
        {
          text: 'Tips Memilih Jasa Website',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Website Responsif untuk Bisnis',
          href: getPermalink('website-responsif-penting-bisnis', 'post'),
        },
        {
          text: 'Panduan SEO Website',
          href: getPermalink('panduan-seo-website-baru', 'post'),
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Konsultasi Gratis',
      href: 'https://wa.me/62895610090128?text=Halo%20Codexsus!%20Saya%20ingin%20konsultasi%20gratis%20tentang%20pembuatan%20website.',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Layanan',
      links: [
        { text: 'Landing Page', href: getPermalink('/landing/click-through') },
        { text: 'Portfolio Website', href: getPermalink('/homes/startup') },
        { text: 'Company Profile', href: getPermalink('/services') },
        { text: 'E-commerce', href: getPermalink('/services') },
        { text: 'SEO Optimization', href: getPermalink('/services') },
        { text: 'Maintenance', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { text: 'Tentang Kami', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Harga Paket', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Dukungan',
      links: [
        { text: 'FAQ', href: getPermalink('/#faqs') },
        { text: 'Panduan', href: getBlogPermalink() },
        { text: 'Konsultasi Gratis', href: 'https://wa.me/62895610090128' },
        { text: 'Support 24/7', href: 'https://wa.me/62895610090128' },
      ],
    },
    {
      title: 'Artikel Populer',
      links: [
        {
          text: 'Tips Memilih Jasa Website',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        { text: 'Website Responsif', href: getPermalink('website-responsif-penting-bisnis', 'post') },
        { text: 'Panduan SEO', href: getPermalink('panduan-seo-website-baru', 'post') },
        { text: 'Tren Design 2025', href: getPermalink('tren-design-website-2025', 'post') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Syarat & Ketentuan', href: getPermalink('/terms') },
    { text: 'Kebijakan Privasi', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/62895610090128' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm">🚀</span>
    Dibuat dengan ❤️ oleh <a class="text-blue-600 underline dark:text-muted" href="https://codexsus.com/"> Codexsus</a> · © 2024 Codexsus. All rights reserved.
  `,
};
