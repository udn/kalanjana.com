import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Ayo buat produk yang disukai pengguna Anda.</h1>
    <p>kalanjana adalah konsultan desain dan pengembangan yang membawa ide produk digital mu menjadi nyata.</p>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <a href="mailto:udnpico@gmail.com">
        <button style={{ 
          maxWidth: '500px',
          marginBottom: '1.45rem',
          backgroundColor: 'red',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '3px',
          border: 'red',
          padding: '15px' }}
          >
          Mulai Projek dengan kami
        </button>
      </a>
    </div>
  </Layout>
)

export default IndexPage
