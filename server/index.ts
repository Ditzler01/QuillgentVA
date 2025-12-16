import { spawn } from "child_process";

const port = process.env.PORT || "5000";

console.log(`Starting Next.js on port ${port}...`);

const nextProcess = spawn("npx", ["next", "dev", "-p", port], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env },
});

nextProcess.on("error", (error) => {
  console.error("Failed to start Next.js:", error);
  process.exit(1);
});

nextProcess.on("close", (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code || 0);
});
