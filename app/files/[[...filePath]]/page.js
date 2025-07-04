export default async function Page({ params }) {
  const { filePath } = await params;
  console.log('File Path:', filePath);

  return (
    <div>
      <h1>File Content for====== {filePath}</h1>
      <h4>Filke join========== /{filePath?.join('/')}</h4>
    </div>
  );
}
