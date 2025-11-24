import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/lib/data/prices.json');

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read prices' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newPrice = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    data.push(newPrice);
    
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, data: newPrice });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add price' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { index, price } = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    if (index >= 0 && index < data.length) {
      data[index] = price;
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true, data: price });
    }
    
    return NextResponse.json({ error: 'Invalid index' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update price' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { index } = await request.json();
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    if (index >= 0 && index < data.length) {
      data.splice(index, 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Invalid index' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete price' }, { status: 500 });
  }
}
