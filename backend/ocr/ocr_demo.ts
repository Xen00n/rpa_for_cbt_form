import { createWorker } from "tesseract.js";
import { writeFileSync } from "fs";

export async function runOCR(filePath: string) {
  const worker = await createWorker("eng", 1, {
    logger: (m) => console.log(m), 
  });

  try {
    console.log("Starting OCR...");
    const result = await worker.recognize(filePath);

    const text = result.data.text;
    console.log("OCR Result:\n", text);

    writeFileSync("output.txt", text);
    console.log("Saved to output.txt");
  } catch (error) {
    console.error("OCR Error:", error);
  }
``
  await worker.terminate();
}
