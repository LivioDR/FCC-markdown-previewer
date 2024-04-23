import Head from "next/head";
import Editor from "./components/Editor";


export default function Home() {
  return (
    <>
      <Head>
        <title>FCC Markdown Previewer</title>
        <meta name="description" content="FCC - Markdown Previewer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js" integrity="sha512-xeUh+KxNyTufZOje++oQHstlMQ8/rpyzPuM+gjMFYK3z5ILJGE7l2NvYL+XfliKURMpBIKKp1XoPN/qswlSMFA==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script type="text/javascript" src="src/purify.js"></script>
      <Editor/>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </main>
    </>
  );
}
