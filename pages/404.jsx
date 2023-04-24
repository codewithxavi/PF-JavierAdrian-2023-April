import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <h1>Ooopppps...</h1>
      <h2>That page cannot be found</h2>
      <p>Go back to the <Link href={"/"}>Homepage</Link></p>
    </div>
  );
}
