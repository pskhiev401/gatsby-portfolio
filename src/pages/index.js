import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import * as emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const ZOOMIE_IMGS = [
  {
    id: '1',
    src: 'https://s3.amazonaws.com/zoomie/Zoomie_landing.png',
    thumbnail: 'https://s3.amazonaws.com/zoomie/Zoomie_landing.png',
    caption: 'Landing Page',
    description: 'A modern and clean landing page',
  },
  {
    id: '2',
    src: 'https://s3.amazonaws.com/zoomie/dashboard.png',
    thumbnail: 'https://s3.amazonaws.com/zoomie/dashboard.png',
    caption: 'Dashboard View',
    description: 'Simple illustratons on dashboard view',
  },
  {
    id: '3',
    src: 'https://s3.amazonaws.com/zoomie/zoomie-form.png',
    thumbnail: 'https://s3.amazonaws.com/zoomie/zoomie-form.png',
    caption: 'Form Wizard',
    description: 'Users manually fill out their info',
  },
  {
    id: '4',
    src: 'https://s3.amazonaws.com/zoomie/DLScanner.png',
    thumbnail: 'https://s3.amazonaws.com/zoomie/DLScanner.png',
    caption: 'ID Scanner',
    description: 'Users can upload their ID instead of filling out forms',
  },
  {
    id: '5',
    src: 'https://s3.amazonaws.com/zoomie/payment.png',
    thumbnail: 'https://s3.amazonaws.com/zoomie/payment.png',
    caption: 'Payment',
    description: `Stripe's payment platform was used to process credit cards`,
  },
  {
    id: '6',
    src: 'https://s3.amazonaws.com/zoomie/Customer-notify.png',
    thumbnail: 'https://s3.amazonaws.com/zoomie/Customer-notify.png',
    caption: 'Customer Notifcation',
    description:
      'Administrators can write a custom email messages to customers',
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
          Swal('Email Sent!', 'I will contact you soon', 'success')
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
            <header className="major">
              <h2>Skills</h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              />
            </header>
            {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
          </section>

          <section id="two">
            <h1>Portfolio</h1>
            <h2>Zoomie</h2>
            <h4>Technologies: React • Redux • Node • Express • Auth0 • SQL • SASS • Stripe • Nodemailer • AWS SES </h4>
            <p>
              Zoomie is a full stack web application that allows users to get a
              replacement ID/Drivers License without having to visit the DMV by
              uploading a picture of their ID/Drivers License.
            </p>
            <ul>
              <li>Scanner feature parses ID/DL image into base64 then utilizes 3rd party API and returns JSON objects</li>
              <li>Authentication-protected admin pages via Auth0 and Google Auth-ID</li>
              <li>Payment processing was handled through Stripe payment platform</li>
            </ul>

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
