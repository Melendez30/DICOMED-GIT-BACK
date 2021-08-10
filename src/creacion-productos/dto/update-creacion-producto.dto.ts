import { PartialType } from '@nestjs/mapped-types';
import { CreateCreacionProductoDto } from './create-creacion-producto.dto';

export class UpdateCreacionProductoDto extends PartialType(CreateCreacionProductoDto) {}
