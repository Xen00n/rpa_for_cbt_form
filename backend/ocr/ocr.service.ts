import { Injectable } from "@nestjs/common";
import { runOCR } from "./ocr_demo";
import * as path from 'path';


@Injectable()
export class OcrService {
  async processImage(fileName: string) {
    const filePath = path.resolve(process.cwd(), 'public', fileName)
    return await runOCR(filePath);
  }
}
