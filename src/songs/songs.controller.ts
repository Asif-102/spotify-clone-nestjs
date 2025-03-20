import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'find all songs';
  }
  @Get(':id')
  findOne() {
    return 'fetched song on the besed on id';
  }

  @Put(':id')
  update() {
    return 'update song on the based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}
