import Link from "next/link";

export default function Services(props) {
    console.log("props", props);
    console.log("Hello, world!222223334455");
    return (
      <>
        <h1>Services</h1>
        <p>
        <Link href='/services/web-dev'>web development</Link>
        </p>
        <p><Link href='/'>app development</Link>
        </p>
        <p><Link href='/services/seo'>seo</Link>
        </p>
        <p><Link href='/'>Data science</Link>
        </p>
      </>
    );
  }
  