import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/lib/data/countries.json');

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read countries' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newCountry = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    data.push(newCountry);
    
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, data: newCountry });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add country' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { slug, country } = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    const index = data.findIndex((c: any) => c.slug === slug);
    if (index !== -1) {
      data[index] = country;
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true, data: country });
    }
    
    return NextResponse.json({ error: 'Country not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update country' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { slug } = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    const filtered = data.filter((c: any) => c.slug !== slug);
    fs.writeFileSync(dataPath, JSON.stringify(filtered, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete country' }, { status: 500 });
  }
}
