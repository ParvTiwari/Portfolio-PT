let count = 0;

export async function GET() {
  count += 1;
  return Response.json({ visitors: count });
}