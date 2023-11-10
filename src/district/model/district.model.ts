import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

interface DistrictAttr {}

@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAttr> {}
