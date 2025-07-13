const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Define component import mappings and their correct usage
const componentMap = {
    Header: {
        oldImport: /import\s+\{\s*Header\s*\}\s+from\s+['"]@\/components\/header['"]/,
        newImport: 'import Header from "@/components/header";',
    },
    Footer: {
        oldImport: /import\s+\{\s*Footer\s*\}\s+from\s+['"]@\/components\/footer['"]/,
        newImport: 'import Footer from "@/components/footer";',
    },
    Hero: {
        oldImport: /import\s+\{\s*Hero\s*\}\s+from\s+['"]@\/components\/(common\/hero-section|global\/Hero)['"]/,
        newImport: 'import { HeroSection as Hero } from "@/components/common/hero-section";',
    },
    Breadcrumb: {
        oldImport: /import\s+\{\s*Breadcrumb\s*\}\s+from\s+['"]@\/components\/(common\/service-breadcrumb|global\/Breadcrumb)['"]/,
        newImport: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";`,
    },
    CTA: {
        oldImport: /import\s+\{\s*CTA\s*\}\s+from\s+['"]@\/components\/(common\/cta-section|global\/CTA)['"]/,
        newImport: 'import { CtaSection as CTA } from "@/components/common/cta-section";',
    },
};

// Function to find and replace imports and props
async function refactorImportsAndProps() {
    const files = await glob('app/**/*.tsx');

    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // Fix imports
        for (const comp of Object.values(componentMap)) {
            if (comp.oldImport.test(content)) {
                content = content.replace(comp.oldImport, comp.newImport);
                changed = true;
            }
        }

        // Fix Breadcrumb usage
        if (content.includes('<Breadcrumb items={')) {
            content = content.replace(/<Breadcrumb items=\{([^}]+)\}\s*\/>/g, (match, items) => {
                const parsedItems = JSON.parse(items.replace(/'/g, '"').replace(/(\w+):/g, '"$1":'));
                let breadcrumbItems = '';
                parsedItems.forEach((item, index) => {
                    breadcrumbItems += `<BreadcrumbItem><BreadcrumbLink href="${item.href}">${item.label}</BreadcrumbLink></BreadcrumbItem>`;
                    if (index < parsedItems.length - 1) {
                        breadcrumbItems += `<BreadcrumbSeparator />`;
                    }
                });
                return `<Breadcrumb><BreadcrumbList>${breadcrumbItems}</BreadcrumbList></Breadcrumb>`;
            });
            changed = true;
        }

        // Fix Hero props
        if (content.includes('<Hero ')) {
            content = content.replace(/<Hero\s+([^>]+)>/g, (match, props) => {
                let newProps = props;
                newProps = newProps.replace(/backgroundColor=\{?"([^"}]+)"\}?/, 'background="gradient"');
                newProps = newProps.replace(/textColor=\{?"([^"}]+)"\}?/, '');
                return `<Hero ${newProps}>`;
            });
            changed = true;
        }
        
        // Fix CTA props
        if (content.includes('<CTA ')) {
            content = content.replace(/<CTA\s+([^>]+)>/g, (match, props) => {
                let newProps = props;
                const buttonTextMatch = newProps.match(/buttonText=\{?"([^"}]+)"\}?/);
                const buttonLinkMatch = newProps.match(/buttonLink=\{?"([^"}]+)"\}?/);

                if(buttonTextMatch && buttonLinkMatch) {
                    const primaryCta = `primaryCta={{ text: "${buttonTextMatch[1]}", href: "${buttonLinkMatch[1]}", icon: "arrow" }}`;
                    newProps = newProps.replace(/buttonText=\{?"[^"}]+"\}?/, '');
                    newProps = newProps.replace(/buttonLink=\{?"[^"}]+"\}?/, primaryCta);
                }
                return `<CTA ${newProps}>`;
            });
            changed = true;
        }


        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Refactored ${file}`);
        }
    }
}

refactorImportsAndProps().then(() => console.log('Refactoring complete.')); 