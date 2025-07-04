export default async function Page({ params }) {
  const { filePath } = await params;
  console.log("File Path:", filePath);

  return (
    <div>
      <h1>File Content for: {filePath}</h1>
    </div>
  );
}