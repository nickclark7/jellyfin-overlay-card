// Uses esbuild-wasm instead of native esbuild: HA's /config mount is
// typically noexec, so the native esbuild binary can't run there.
import * as esbuild from "esbuild-wasm";

await esbuild.initialize({});

const result = await esbuild.build({
  entryPoints: ["src/jellyfin-overlay-card.ts"],
  bundle: true,
  format: "esm",
  target: "es2021",
  outfile: "dist/jellyfin-overlay-card.js",
  minify: true,
});

if (result.errors.length) {
  console.error(result.errors);
  process.exit(1);
}
console.log("Build complete.");
process.exit(0);
