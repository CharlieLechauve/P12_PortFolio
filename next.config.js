/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/nom-de-votre-repo', // Remplacez par le nom de votre dépôt GitHub
    assetPrefix: '/nom-de-votre-repo/', // Remplacez par le nom de votre dépôt GitHub
    trailingSlash: true, // Ajoute un slash à la fin des chemins
    output: 'export' // Ajoutez cette ligne pour configurer l'exportation statique
  }
  
  module.exports = nextConfig;
  