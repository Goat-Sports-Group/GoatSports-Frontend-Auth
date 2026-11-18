# GoatSports Frontend Auth

Ứng dụng web đăng nhập dùng chung cho mọi vai trò (Angular 21, Tailwind CSS 4). Sau khi đăng nhập thành công,
người chơi được chuyển về app `goat-sports-client`, chủ sân và quản trị viên về app `goat-sports-admin`.

## Chức năng

| Trang | Đường dẫn |
|---|---|
| Đăng nhập (email + mật khẩu, hoặc Google qua Keycloak) | `/auth/sign-in` (alias `/login`) |
| Đăng ký người chơi / chủ sân | `/auth/sign-up` (alias `/register`) |
| Xác minh email bằng OTP | `/auth/verify` |
| Quên mật khẩu | `/auth/forgot-password` |

- Mật khẩu được **mã hóa RSA trên trình duyệt** trước khi gửi lên auth-service.
- Token do backend đặt trong cookie HttpOnly; app không tự lưu token.
- Hiển thị thông báo tài khoản chưa kích hoạt (gửi lại OTP) hoặc bị khóa (kèm form kháng nghị).

## Cấu trúc

Mã nguồn theo Clean Architecture, quy tắc phụ thuộc mô tả trong [src/app/ARCHITECTURE.md](src/app/ARCHITECTURE.md):

```
src/app/
├── domain/
├── application/
├── infrastructure/
└── presentation/pages/   # sign-in, sign-up, verify, forgot-password
```

`npm run check:architecture` kiểm tra import sai tầng.

## Cấu hình

| Biến | Mặc định |
|---|---|
| `NG_APP_API_URL` | `http://localhost:7070` (API Gateway) |
| `NG_APP_CLIENT_API_URL`, `NG_APP_ADMIN_API_URL` | `http://localhost:4200`, `http://localhost:4300` |
| `NG_APP_KEYCLOAK_URL`, `NG_APP_KEYCLOAK_REALM`, `NG_APP_KEYCLOAK_CLIENT_ID` | Keycloak cho đăng nhập Google |
| `NG_APP_BACKEND_CALLBACK_URL` | Callback Google của auth-service |

## Chạy

```bash
npm install
npm start      # http://localhost:4400
npm run build
npm test
```

## Triển khai

Build và host trên Vercel.
