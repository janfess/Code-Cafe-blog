/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import CategoryLabel from "./CategoryLabel";

export default function Post({post}) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
      <Image
        className='mb-2'
        src={post.frontmatter.cover_image}
        alt=''
        height={420}
        width={600}
      />
      <div className='flex justify-between items-center'>
        <span className='font-light text-gray-600'>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <div className='mt-2'>
        <Link
          className='text-2xl text-gray-700 font-bold hover:underline'
          href={`/blog/${post.slug}`}
        >
          {post.frontmatter.title}
        </Link>
        <p className='mt-2 text-gray-600'>{post.frontmatter.excerpt}</p>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <Link
          className='text-gray-900 hover:text-blue-600'
          href={`/blog/${post.slug}`}
        >
          Read More
        </Link>
        <div className='flex items-center'>
          <img
            src={post.frontmatter.author_image}
            className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            alt=''
          />
          <h3 className='text-gray-700 font-bold'>{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  );
}