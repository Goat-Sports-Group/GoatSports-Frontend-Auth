import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MascotLines } from '@shared/motion/goat-mascot.component';
import { hideBootSplashWhenReady } from './boot-splash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  title = 'Goat Sports';

  /** Lời thoại của linh vật dê theo từng trang đăng nhập/đăng ký. */
  readonly mascotLines: MascotLines = {
    hello: 'Chào mừng tới GOAT Sports! ⚽',
    hide: 'Ẩn linh vật',
    routes: [
      { prefix: '/login', text: 'Đăng nhập để đặt sân và ghép kèo nha!' },
      { prefix: '/auth/sign-in', text: 'Đăng nhập để đặt sân và ghép kèo nha!' },
      { prefix: '/register', text: 'Tạo tài khoản người chơi hoặc chủ sân chỉ mất 1 phút.' },
      { prefix: '/auth/sign-up', text: 'Tạo tài khoản người chơi hoặc chủ sân chỉ mất 1 phút.' },
      { prefix: '/verify', text: 'Kiểm tra email để lấy mã OTP nhé 📩' },
      { prefix: '/auth/verify', text: 'Kiểm tra email để lấy mã OTP nhé 📩' },
      { prefix: '/forgot-password', text: 'Quên mật khẩu? Mình giúp lấy lại liền.' },
      { prefix: '/auth/forgot-password', text: 'Quên mật khẩu? Mình giúp lấy lại liền.' }
    ],
    clicks: [
      'Sẵn sàng ra sân chưa? ⚽',
      'GOAT = Greatest Of All Time 🐐',
      'Cuối tuần đá một trận không?',
      'Nhớ khởi động trước khi chơi nha!'
    ]
  };

  constructor(router: Router) {
    hideBootSplashWhenReady(router);
  }
}
