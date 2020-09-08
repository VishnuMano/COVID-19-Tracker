import { Controller, Get, Put, Header, Param, Body, Headers } from "@nestjs/common";
import { CovidRepository } from "./covid.repository";
import { Covid } from "./covid";

@Controller()
export class CovidController {
    constructor(private readonly covidRepository:CovidRepository) {}

    @Get('find')
    async find() {
            // : Promise<CovidInterface> {
        return this.covidRepository.findAll();
    }

    @Put(':id')
    @Header('Content-Type', 'application/text')
    async updateCourses(
        @Headers('Content-Type') contentType: string,
        // @Header() headers: any,
        @Param("id") courseId: string,
        @Body() changes: Partial<Covid>
    ) {
       console.log(`courseId: ${courseId} body: ${JSON.stringify(changes)}`);
       console.log(`request header: ${contentType}`);
       return this.covidRepository.updateCovid(courseId, changes);
    }

}