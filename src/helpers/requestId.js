let requestId = 0;

export function getNextRequestId(): number {
  const id = requestId;
  requestId += 1;
  return id;
}
