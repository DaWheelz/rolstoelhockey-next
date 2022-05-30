import { GraphQLClient } from "graphql-request";
import Link from "next/link";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        content{
          text
        }
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
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
    {
      posts(orderBy: publishedAt_ASC) {
        id
        title
        content{
          text
        }
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
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Post({ post }) {
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
        <div className="py-5 px-10">
        <Link href="/nieuws">
          <a className="underline decoration-orange-600">Terug naar alle nieuwsberichten</a>
        </Link>
      </div>
      <div className="max-w-fit shadow-md rounded-lg mx-auto flex px-10">
      <img src={post.coverImage.url} alt="..." class="shadow rounded h-96 w-auto border-none" />
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal content-center">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {post.title}
            </div>
            <div className="text-gray-700 text-base whitespace-pre-line" >{post.content.text}</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{post.author.name}</p>
              <p className="text-gray-600">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};