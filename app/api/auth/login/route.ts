import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Get credentials from environment variables
    const adminEmail = process.env.ADMIN_LOGIN || 'admin@kivisai.com';
    const adminPassword = process.env.ADMIN_PASSWORD || '1234qwer';

    // Check credentials
    if (email === adminEmail && password === adminPassword) {
      // In a real application, you would create a proper session/token here
      const user = {
        id: '1',
        name: 'Admin',
        email: email,
        role: 'admin'
      };

      return NextResponse.json({ 
        success: true, 
        user,
        message: 'Login erfolgreich'
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Ungültige Anmeldedaten' 
      }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Server-Fehler' 
    }, { status: 500 });
  }
} 