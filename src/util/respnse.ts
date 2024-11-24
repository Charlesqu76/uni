import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

interface Response<T> {
  success: boolean;
  data: T | null;
  msg?: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
      catchError((error) => {
        console.log(error);

        if (error instanceof HttpException) {
          return throwError(() => ({
            success: false,
            msg: error.message,
            data: null,
          }));
        }
        return throwError(() => ({
          success: false,
          msg: "Internal server error",
          data: null,
        }));
      })
    );
  }
}
