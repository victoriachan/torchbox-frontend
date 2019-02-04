import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './footer.module.scss'

const Footer = ({ links, className }) => (
  <div className={[styles.footer, className].join(' ')}>
    <div className={styles.footerContent}>
      <ul className={styles.footerAddressList}>
        <li className={styles.footerAddress}>
          <h4 className={styles.footerAddressTitle}>Glorious Oxfordshire</h4>
          <p>
            3rd Floor
            <br />
            15 Colston Street
            <br />
            Bristol
            <br />
            <a href="#">BS1 5AP</a>
            <br />
            UK
          </p>
        </li>

        <li className={styles.footerAddress}>
          <h4 className={styles.footerAddressTitle}>Vibrant Bristol</h4>
          <p>
            3rd Floor
            <br />
            15 Colston Street
            <br />
            Bristol
            <br />
            <a href="#">BS1 5AP</a>
            <br />
            UK
          </p>
        </li>

        <li className={styles.footerAddress}>
          <h4 className={styles.footerAddressTitle}>Working in the US</h4>
          <p>
            We have a special formula for working successfully with
            organisations in the US
          </p>
        </li>
      </ul>

      <div>
        <span className={styles.footerCopyright}>© Torchbox 2018</span>
        {links.map(link => (
          <Link className={styles.footerLink} to={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
    <img
      className={styles.footerImage}
      src={require('../../images/man-coffee.svg')}
      alt=""
    />
  </div>
)

Footer.propTypes = {
  links: PropTypes.array,
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
  links: [],
}

export default Footer