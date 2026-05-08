import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guard';

export const Protected = () => UseGuards(JwtAuthGuard);
