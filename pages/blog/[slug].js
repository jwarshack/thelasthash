import React from 'react'
import styles from '../../styles/PostPage.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPage({ frontMatter: {title, excerpt, cover_image}, slug, content }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Image src={cover_image} height={100} width={100}/>
      <div className={styles.postBody}>
        <div dangerouslySetInnerHTML={{ __html: marked (content)}}></div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths: paths,
    fallback: false
  }

}

export function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'),'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontMatter,
      slug,
      content
    }

  }

}
