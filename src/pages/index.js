import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import * as emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const ZOOMIE_IMGS = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Landing',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Dashboard',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'ID Scanner',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Payment Integration',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Admin Page',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Customer Notifcation',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      name: '',
      email: '',
      message: '',
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  submitHandler = () => {
    // console.log('hit')
    const { name, email, message } = this.state
    emailjs
      .send(
        'amazon_ses',
        'portfolio_template',
        { from_name: name, from_email: email, message_html: message },
        'user_gzMEM66SbGx8Ite2WwBvF'
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text)
          Swal('Email Sent!', 'I will contact you soon :D', 'success')
          this.setState({ name: '', email: '', message: '' })
        },
        err => {
          console.log('FAILED...', err)
          Swal({
            type: 'error',
            title: `Email didn't send`,
            text: 'Please try again',
          })
        }
      )
  }

  render() {
    console.log(this.state)
    const siteTitle = 'Patric Khiev'
    const siteDescription = 'Patric Khiev Portfolio Site'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>A little About Me</h2>
            </header>
            <p>
              After spending a majority of my adult life formally studying and
              integrating pragmatic solutions in the public sector, I began
              taking on new hobbies to expand my skill set. I stumbled upon
              programming and urban farming. Any aspirations of becoming an
              urban farmer died along with the store-bought basil plant. But I
              kept programming, and over time I grew an affinity for the simple
              projects I created. I quickly realized programming is my passion:
              the entire process, from wire-framing to product deployment is
              very rewarding.
              <br />
              <br /> My journey in becoming a developer has been an interesting
              one. Do you have an exciting project and want to collaborate, or
              just nerd out and talk about tech/cars feel free to contact me!
            </p>
            {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
          </section>

          <section id="two">
            <h1>Portfolio</h1>
            <h2>Zoomie</h2>

            <Gallery
              images={ZOOMIE_IMGS.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a
                  href="https://github.com/pskhiev401/zoomie_project"
                  className="button"
                >
                  Visit Repo
                </a>
              </li>
              <li>
                <a href="https://zoomie.club" className="button">
                  Visit Site
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Connect with Me</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        required
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                        value={this.state.message}
                        onChange={e =>
                          this.setState({ message: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      onClick={() => this.submitHandler()}
                    />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    San Francisco, CA <br />
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    650-416-8566
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">webdev.patric@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
