export default async function comments({ params }) {
    const { kuchBhi } = await params;

    return (
        <>
            <p>All Comments on <b>{kuchBhi}</b> page</p>
        </>
    );
}