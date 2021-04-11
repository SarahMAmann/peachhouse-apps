import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://www.instagram.com/peachhouseco/">@peachhouseco</a>
      <div style={{paddingTop: 30, fontSize: 13}}><a href="https://www.etsy.com/shop/PEACHHOUSESTUDIO?ref=search_shop_redirect" target="_blank">check out our shop →</a></div>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.instagram.com/peachhouseco/" target="_blank">Peach House Apps</a>.
        </span>
      </div>
    </footer>
  </div>
)
