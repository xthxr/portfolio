import Head from 'next/head';
import axios from 'axios';

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@atharakram'
    );
    const posts = res.data.items.slice(0, 3); // Show top 3
    return { props: { posts } };
  } catch (err) {
    console.error('Failed to fetch Medium posts:', err);
    return { props: { posts: [] } };
  }
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Athar Akram</title>
      </Head>
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-6 text-accent text-center">Latest Blogs</h2>
        {posts.length === 0 ? (
          <p className="text-center text-text">Could not fetch blogs right now. Try again later.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.guid} className="border border-accent rounded-xl p-4 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-accent">{post.title}</h3>
                <p className="text-sm text-text mt-2" dangerouslySetInnerHTML={{ __html: post.description.slice(0, 100) + '...' }} />
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-accent hover:underline text-sm"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
