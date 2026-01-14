// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.ico",

    customFields: {
    courses: [
      {
        id: 'projects',
        title: '🚀 IoT Projects',
        description: 'Build real-world IoT projects with ESP32. Smart home automation, plant monitoring, and more hands-on projects.',
        image: '/img/courses/projects-cover.png',  // Add your image here
        color: '#FF6B6B',
      },
      {
        id: 'arduino',
        title: '⚡ Arduino Course',
        description: 'Complete Arduino tutorial from basics to advanced. Learn sensors, actuators, and build amazing projects.',
        image: '/img/courses/arduino-cover.png',
        color: '#4ECDC4',
      },
      {
        id: 'esp32',
        title: '📡 ESP32 Course',
        description: 'Master ESP32 microcontroller with WiFi & Bluetooth. IoT projects, web servers, and wireless communication.',
        image: '/img/courses/esp32-cover.png',
        color: '#FFE66D',
      },
      {
        id: 'Embedded',
        title: '🔧 Embedded Systems',
        description: 'Deep dive into embedded programming. Learn C/C++ for microcontrollers and real-time systems.',
        image: '/img/courses/embedded-cover.png',
        color: '#95E1D3',
      },
      {
        id: 'python',
        title: '🐍 Python Course',
        description: 'Python programming for IoT and automation. Learn data processing, APIs, and hardware control.',
        image: '/img/courses/python-cover.png',
        color: '#A8E6CF',
      },
    ],
  },


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

onBrokenLinks: 'warn',   // Allows deployment with warnings

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "projects",
          path: "content/projects",
          routeBasePath: "projects",
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "arduino",
        path: "content/arduino-tutorials",
        routeBasePath: "arduino",
        sidebarPath: "./sidebarsArduino.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "esp32",
        path: "content/esp32-tutorials",
        routeBasePath: "esp32",
        sidebarPath: "./sidebarsESP32.js",
      },
    ],

        [
      "@docusaurus/plugin-content-docs",
      {
        id: "Embedded",
        path: "content/embedded-course",
        routeBasePath: "Embedded",
        sidebarPath: "./sidebarsEmbedded.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "content/python-course",
        routeBasePath: "python",
        sidebarPath: "./sidebarsPython.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "TRC Docs",
        logo: {
          alt: "Thinking Robot Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "projects",
            position: "left",
            label: "Projects",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "arduino",
            position: "left",
            label: "Arduino Course",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "esp32",
            position: "left",
            label: "ESP32 Course",
          },

          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "Embedded",
            position: "left",
            label: "Embedded Course",
          },

          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "python",
            position: "left",
            label: "Python Course",
          },

          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/projects/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
