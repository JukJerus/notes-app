import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXIST Notes (id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT, title VARCHAR(50) NOT NULL, body VARCHAR(255), createdAt DATETIME DEFAULT CURRENT_TIMESTAMP);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}