export default async function comment({ params }) {
    const paramsObj = await params;
    const { commentID, kuchBhi } = paramsObj;

    return (
        <>
            <p className='text-xl'>comment no.<i>{commentID}</i> on <b>{kuchBhi}</b> page</p>
        </>
    );
}