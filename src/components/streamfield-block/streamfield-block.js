import React from 'react'
import PropTypes from 'prop-types'
import BustOut from '../bustout'

import styles from './streamfield-block.module.scss'
import QuoteSlider from '../quote-slider/quote-slider'

class StreamfieldBlock extends React.Component {

  componentDidMount() {
    document.addEventListener("click", e => {
      const id = e.target.id
      const linkType = e.target.getAttribute('linktype')
      console.log(id, linkType);
    })
  }

  render() {
    const { streamfield, className } = this.props
    return (
      <div className={[styles.streamfield, className].join(' ')}>
        {streamfield.map(block => {
          switch (block.type) {
            case 'intro':
              return (
                <div
                  className={styles.streamfieldIntro}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              )

            case 'aligned_image':
              const aligned_image = React.createRef()
              return (
                <BustOut
                  ref={aligned_image}
                  src={block.value.image.src}
                  align={block.value.alignment}
                  title={'TODO: Ask about title'} // TODO
                  caption={block.value.caption}
                />
              )

            case 'wide_image':
              const wide_image = React.createRef()
              return (
                <img
                  ref={wide_image}
                  src={block.value.image.src}
                  alt={block.value.image.alt}
                  className={styles.streamfieldWideImage}
                  onError={() => {
                    wide_image.src = require('../../images/will.jpg')
                  }}
                />
              )

            case 'h1':
              return <h1 className={styles.streamfieldHeading}>{block.value}</h1>

            case 'h2':
              return <h2 className={styles.streamfieldHeading}>{block.value}</h2>

            case 'h3':
              return <h3 className={styles.streamfieldHeading}>{block.value}</h3>

            case 'h4':
              return <h4 className={styles.streamfieldHeading}>{block.value}</h4>

            case 'h5':
              return <h5 className={styles.streamfieldHeading}>{block.value}</h5>

            case 'embed':
              return (
                <iframe
                  className={styles.streamfieldEmbed}
                  src={block.value.url}
                />
              )

            case 'pullquote':
              return (
                <QuoteSlider
                  className={styles.streamfieldQuote}
                  quotes={[
                    {
                      person: block.value.attribution,
                      role: '',
                      quote: block.value.quote,
                    },
                  ]}
                />
              )

            case 'paragraph':
              return (
                <p
                  className={styles.streamfieldParagraph}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              )

            default:
              console.log("Unknown Streamfield Block: ", block.type)
              return null
          }
        })}
      </div>
    )
  }
}

StreamfieldBlock.propTypes = {
  streamfield: PropTypes.array,
  className: PropTypes.string,
}

StreamfieldBlock.defaultProps = {
  streamfield: [],
  className: '',
}

export default StreamfieldBlock