import Spinner from "../_components/Spinner";

function Loading() {
  return (
    <div className="mt-40 grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}

export default Loading;
