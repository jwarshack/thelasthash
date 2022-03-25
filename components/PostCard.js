import React from 'react'
import styles from './PostCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <Image src={post.frontMatter.cover_image} alt='' height={300} width={300}/>
      <Link href={`/blog/${post.slug}`}><h3 className={styles.title}>{post.frontMatter.title}</h3></Link>
      <p>{post.frontMatter.excerpt}</p>
    </div>
  )
}
