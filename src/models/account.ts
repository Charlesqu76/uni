// CREATE TABLE users (
//   user_id SERIAL PRIMARY KEY,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   password_hash VARCHAR(255),
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//   email_verified BOOLEAN DEFAULT FALSE,
//   CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
// );

import { IsNumber, IsNumberString, IsString } from "class-validator";

export class AccountQuery {
  @IsNumberString()
  userId: number;
}

export class NewAccount {
  @IsString()
  email: string;
}
