import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';
import { CreateSongDTO } from './dto/create-song.dto';
import { SongsService } from './songs.service';

@Controller({
  path: 'songs',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`,
    );
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    // try {
    //   return this.songsService.findAll();
    // } catch (e) {
    //   throw new HttpException(
    //     'server error',
    //     HttpStatus.INTERNAL_SERVER_ERROR,
    //     {
    //       cause: e,
    //     },
    //   );
    // }
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `fetched song on the besed on id ${typeof id}`;
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
