export const LoadingPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute m-0 -translate-y-2/4 top-2/4 left-0 right-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/loading.gif" alt="loading" style={{ margin: "auto" }} width="1010px" />
      </div>
    </div>
  );
};