import { readFile } from "node:fs/promises";
import concurrently from "concurrently";

console.log("Hello from ESM TypeScript!");

try {
  // Example async ESM code
  const packageJson = await readFile("./package.json", "utf-8");
  console.log("Package info:", JSON.parse(packageJson).name);
} catch (err) {
  console.error("Error:", err);
}

concurrently([
  { command: "echo hello from concurrently", name: "echo" },
  { command: "sleep 5s", name: "sleep" },
]);
