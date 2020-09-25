import { useRouter } from 'next/router';

const Tags = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <div>Tags Page for: {tag}</div>
      <button onClick={() => router.back()}>Click here to go back</button>
    </>
  );
};

export default Tags;
