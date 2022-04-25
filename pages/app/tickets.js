export default function Tickets() {
  return <div>WIP</div>;
}

export async function getServerSideProps(context) {
  // TODO: Only allow administrators to access page
  return {
    props: {}
  };
}
