export default function Page({ slug }) {
  return <div>{slug}</div>;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  if (slug[0] === "error") {
    throw new Error("foo");
  }

  return {
    props: {
      slug: slug.join("/"),
    },
    revalidate: 10,
  };
};
