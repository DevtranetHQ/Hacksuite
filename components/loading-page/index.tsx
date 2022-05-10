export const LoadingPage = () => {
  return (
    <div className="relative h-screen">
      <div className="mxs:-translate-y-3/4 absolute m-0 -translate-y-2/4 top-2/4 left-0 right-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mxs:scale-150 w-[1010px]"
          src="/assets/loading.gif"
          alt="loading"
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
};
