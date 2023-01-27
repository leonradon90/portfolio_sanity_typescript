import Link from 'next/link';
import { createClient } from "next-sanity"
import sanityCli from 'nov-proekt/sanity.cli';
import { sanityClient } from '../../sanity';
import { Post } from '../../typings';
import PortableText from 'react-portable-text';
interface Props {
  posts: [Post];
}

export default function LandingPage({ posts }: Props) {
  console.log(posts);

  return (
    <div>
      <section>
        <div>
          {posts.map(post => (

            <div key={post._id}>
              <div>

                <PortableText
                  className=""
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                  content={post.body}
                  serializers={{
                    h1: (props: any) => (
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h2: (props: any) => (
                      <h1 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }: any) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ href, children }: any) => (
                      <a href={href} className="text-blue-500 hover underline">{children}</a>
                    ),

                  }}
                />


                <PortableText
                  className=""
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                  content={post.body2}
                  serializers={{
                    h1: (props: any) => (
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h2: (props: any) => (
                      <h1 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }: any) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ href, children }: any) => (
                      <a href={href} className="text-blue-500 hover underline">{children}</a>
                    ),

                  }}
                />

              </div>

            </div>

          ))}
        </div>
      </section>
      <section>

      </section>
    </div>
  );
}


export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{

    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    body,
    body2
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
