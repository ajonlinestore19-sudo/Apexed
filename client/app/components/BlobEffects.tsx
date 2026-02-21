import Image from "next/image";

function BlobEffects() {
  return (
    <>
      <div className="absolute top-[12em] left-[22vw] z-0">
        <Image src="/assets/blob-blurred.svg" alt="blurred-blob" width={100} height={100} />
      </div>
      <div className="absolute top-[10em] left-[60vw] z-0">
        <Image src="/assets/blob.svg" alt="blob" width={50} height={50} />
      </div>
      <div className="absolute top-[24em] left-[75vw] z-0">
        <Image src="/assets/blob-blurred.svg" alt="blurred-blob" width={70} height={70} />
      </div>
      <div className="absolute top-[35em] left-[20vw] z-0">
        <Image src="/assets/blob.svg" alt="blob" width={50} height={50} />
      </div>
    </>
  );
}

export default BlobEffects;
