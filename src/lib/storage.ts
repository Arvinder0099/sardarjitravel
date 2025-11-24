import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "lib", "data");

const OBJECT_FILES = new Set(["settings.json"]);

export function readJson<T = any>(fileName: string): T {
  try {
    const fullPath = path.join(dataDir, fileName);
    if (!fs.existsSync(fullPath)) {
      return (OBJECT_FILES.has(fileName) ? ({} as T) : ([] as unknown as T));
    }
    const content = fs.readFileSync(fullPath, "utf-8");
    return content ? JSON.parse(content) : ([] as unknown as T);
  } catch (e) {
    return (OBJECT_FILES.has(fileName) ? ({} as T) : ([] as unknown as T));
  }
}

export function writeJson(fileName: string, data: any) {
  fs.mkdirSync(dataDir, { recursive: true });
  const fullPath = path.join(dataDir, fileName);
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
}