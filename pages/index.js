import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import PostCard from '../components/PostCard'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.postContainer}>
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter
    }
  })
  
  return {
    props: {
      posts: posts
    }
  }
}