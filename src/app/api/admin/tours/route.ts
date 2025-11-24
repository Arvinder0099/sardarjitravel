import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/lib/data/tours.json');

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read tours' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newTour = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    data.push(newTour);
    
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, data: newTour });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add tour' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { slug, tour } = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    const index = data.findIndex((t: any) => t.slug === slug);
    if (index !== -1) {
      data[index] = tour;
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true, data: tour });
    }
    
    return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update tour' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { slug } = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    const filtered = data.filter((t: any) => t.slug !== slug);
    fs.writeFileSync(dataPath, JSON.stringify(filtered, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete tour' }, { status: 500 });
  }
}
