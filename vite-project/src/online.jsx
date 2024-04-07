function isonline() {
  const isonline = useIsOnline();
  if (isonline) return <>"online"</>;
  return <>"offline"</>;
}

function useIsOnline() {
  const online = window.navigator.onLine;
  return online;
}

export default isonline;
