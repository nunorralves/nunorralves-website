import { useRouter } from 'next/router';

const Categories: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <div>category Page for: {category}</div>;
      <button onClick={() => router.back()}>Click here to go back</button>
    </>
  );
};

export default Categories;
