// TODO - DELETE
// import {
//   ExecutionContext,
//   Injectable,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { AuthGuard } from '@nestjs/passport';
// import { key } from 'src/api/common/enum';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard(
//   key.jwt,
// ) {
//   constructor(private _reflector: Reflector) {
//     super();
//   }

//   canActivate(context: ExecutionContext) {
//     const isPublic =
//       this._reflector.getAllAndOverride<any>(
//         key.is_public,
//         [
//           context.getHandler(),
//           context.getClass(),
//         ],
//       );
//     if (isPublic) {
//       return true;
//     }
//     return super.canActivate(context);
//   }
// }
