import { GraphQLClient } from "graphql-request";
import Link from "next/link";

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
        <div className="py-10 px-10">
        {posts.map((post) => {
          return (
            <Link key={post.id} as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="max-w-fit shadow-md rounded-lg mx-auto flex">
              <img src={post.coverImage.url} alt="..." class="shadow rounded h-96 w-auto border-none" />
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {post.title}
                    </div>
                    <p className="text-gray-700 text-base">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.date}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
      
    );
  };