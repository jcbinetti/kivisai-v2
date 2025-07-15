"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/check-sanity-env.ts
var fs_1 = require("fs");
var path_1 = require("path");
var ENV_PATHS = [
    path_1.default.join(process.cwd(), '.env.local'),
    path_1.default.join(process.cwd(), 'sanity', 'kivisai', '.env.local'),
];
var VERCEL_ENV_VARS = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET',
    'SANITY_API_TOKEN',
];
function parseEnvFile(filePath) {
    if (!fs_1.default.existsSync(filePath))
        return {};
    var content = fs_1.default.readFileSync(filePath, 'utf-8');
    return Object.fromEntries(content
        .split('\n')
        .filter(function (line) { return line.trim() && !line.trim().startsWith('#'); })
        .map(function (line) {
        var _a = line.split('='), key = _a[0], rest = _a.slice(1);
        return [key.trim(), rest.join('=').trim()];
    }));
}
function checkSanityEnv() {
    var found = false;
    for (var _i = 0, ENV_PATHS_1 = ENV_PATHS; _i < ENV_PATHS_1.length; _i++) {
        var envPath = ENV_PATHS_1[_i];
        if (fs_1.default.existsSync(envPath)) {
            found = true;
            console.log("\nPr\u00FCfe: ".concat(envPath));
            var envVars = parseEnvFile(envPath);
            for (var _a = 0, VERCEL_ENV_VARS_1 = VERCEL_ENV_VARS; _a < VERCEL_ENV_VARS_1.length; _a++) {
                var key = VERCEL_ENV_VARS_1[_a];
                if (envVars[key]) {
                    console.log("\u2705 ".concat(key, " = ").concat(envVars[key]));
                }
                else {
                    console.warn("\u274C ".concat(key, " NICHT gesetzt!"));
                }
            }
        }
    }
    if (!found) {
        console.warn('⚠️  Keine .env.local Datei gefunden!');
    }
    console.log('\nVergleiche diese Werte mit den Vercel-Umgebungsvariablen im Dashboard!');
}
checkSanityEnv();
