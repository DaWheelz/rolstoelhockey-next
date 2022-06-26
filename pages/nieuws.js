import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import GoogleAd from './components/GoogleAd';

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

export async function getStaticProps() {
    const { posts } = await graphcms.request(
      `
      query Posts() {
        posts {
          id
          title
          excerpt
          slug
          coverImage {
            id
            url
          }
          author {
            id
            name
          }
          date
        }
      }
    `
    );
  
    return {
      props: {
        posts,
      },
    };
  }
  
  export default function Nieuws({ posts }) {
    return (
    <div className="p-7 bg-gray-100 min-h-screen">
        <h2 className="text-4xl font-bold mt-0 mb-6">Nieuws</h2>
        <div style={{maxHeight: '10rem', minWidth: '15rem'}}>
          <GoogleAd slot="4495490030" googleAdId="ca-pub-3103181417222460"/>
        </div>
        <div>
        {posts.map((post) => {
          return (
              // <a className="max-w-fit shadow-md rounded-lg mx-auto md:block">
              // <img src={post.coverImage.url} alt="..." className="shadow rounded h-auto border-none w-auto" />
              //   <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal w-auto">
              //     <div className="mb-8">
              //       <div className="text-gray-900 font-bold text-xl mb-2">
              //         {post.title}
              //       </div>
              //       <p className="text-gray-700 text-base">{post.excerpt}</p>
              //     </div>
              //     <div className="flex items-center">
              //       <div className="text-sm">
              //         <p className="text-gray-900 leading-none">
              //           {post.author.name}
              //         </p>
              //         <p className="text-gray-600">{post.date}</p>
              //       </div>
              //     </div>
              //   </div>
              // </a>

          <Link key={post.id} as={`/posts/${post.slug}`} href="/posts/[slug]">
          <div className="flex justify-center p-10">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={post.coverImage.url} alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{post.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                {post.excerpt}
                </p>
                <p className="text-gray-600 text-xs">{post.author.name}</p>
              </div>
            </div>
          </div>
          </Link>
          );
        })}
      </div>
    </div>
     );
  };