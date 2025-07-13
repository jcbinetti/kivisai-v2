const fs = require('fs');
const path = require('path');

// Import mapping
const importMappings = {
  '@/components/global/Header': '@/components/header',
  '@/components/global/Footer': '@/components/footer',
  '@/components/global/Hero': '@/components/common/hero-section',
  '@/components/global/Breadcrumb': '@/components/common/service-breadcrumb',
  '@/components/global/CTA': '@/components/common/cta-section',
  '@/../tailwind.config.js': '@/tailwind.config.js'
};

// Files to fix
const filesToFix = [
  'app/ueber-kivisai/prinzipien/page.tsx',
  'app/ueber-kivisai/team-netzwerk/page.tsx',
  'app/wissen/page.tsx',
  'app/wissen/blog/page.tsx',
  'app/wissen/newsletter/page.tsx',
  'app/wissen/ki-club-webinare/page.tsx',
  'app/wissen/kivisai-pro/page.tsx'
];

function fixImports() {
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix imports
      Object.entries(importMappings).forEach(([oldImport, newImport]) => {
        const regex = new RegExp(`import\\s+{[^}]*}\\s+from\\s+['"]${oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g');
        content = content.replace(regex, (match) => {
          return match.replace(oldImport, newImport);
        });
      });
      
      // Fix default imports
      content = content.replace(
        /import\s+\{\s*Header\s*\}\s+from\s+['"]@\/components\/header['"]/g,
        'import Header from "@/components/header"'
      );
      content = content.replace(
        /import\s+\{\s*Footer\s*\}\s+from\s+['"]@\/components\/footer['"]/g,
        'import Footer from "@/components/footer"'
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed imports in ${filePath}`);
    }
  });
}

fixImports(); 