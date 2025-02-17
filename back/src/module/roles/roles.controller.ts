import { Controller, Post, Get, Delete, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from '../../entities/Role.entity';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles/roles.guard';
import { Roles } from '../../decorators/roles/roles.decorator';

@ApiTags('Roles')

@Controller('roles')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateRoleDto })
  @ApiResponse({ status: 201, description: 'Role created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.createRole(createRoleDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, description: 'Retrieved all roles.' })
  async getAllRoles(): Promise<Role[]> {
    return this.rolesService.getAllRoles();
  }

//buscar por nombre de rol
  @Get('Representante')
@HttpCode(HttpStatus.OK)
@ApiResponse({ status: 200, description: 'Rol Representante encontrado.' })
@ApiResponse({ status: 404, description: 'Rol Representante no encontrado.' })
async getRoleRepresentante(): Promise<Role> {
  return this.rolesService.getRoleByNameRepresentante();
}


  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Role deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Role not found.' })
  async deleteRole(@Param('id') id: string): Promise<void> {
    return this.rolesService.deleteRoleById(id);
  }
}
