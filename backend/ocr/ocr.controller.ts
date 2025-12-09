import { Get, Controller } from "@nestjs/common";
import { OcrService } from "./ocr.service";

@Controller('ocr')
export class OcrController{
    constructor(private ocrService: OcrService) { }
    

    @Get()
    async testOCR() {
        return this.ocrService.processImage('image.jpeg')
    }
}