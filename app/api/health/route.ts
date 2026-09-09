export function GET() {
  return Response.json(
    { status: 'ok', service: 'beijingsauce', contentSource: 'fixtures' },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
