import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body){
        return { token: this.authService.login(body.username, body.password) };
    }

    @UseGuards(JwtGuard)
    @Get('test-auth')
    test() {
        return {
            name: 'Evandro oliveira',
        };
    }
}
